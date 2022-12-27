/* -------------------------------------------------------------------- */
// * Start check Data in local Storage
/* -------------------------------------------------------------------- */
let mainColors = localStorage.getItem("color_option");
if(mainColors !== null){
    document.documentElement.style.setProperty("--main--color" , mainColors);
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");
        if(element.dataset.color===mainColors){
        element.classList.add("active")
        }
    });
}

// *Random Background option
let backgroundOption = true;
// *Variable To Control The Background Interval
let backgroundInterval;
// *check If There's Local Storage Random Background Item
let backgroundLocalItem=localStorage.getItem("background_option");

// *check If  Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null){
  if(backgroundLocalItem === "true"){
    backgroundOption = true;
  }else{
    backgroundOption=false;
  }
  // *Remove Active Class From All Span
  document.querySelectorAll(".random-background span").forEach(element=> {
    element.classList.remove("active")
  })
  if(backgroundLocalItem ==="true"){
    document.querySelector(".random-background .yes").classList.add("active");
  }else{
    document.querySelector(".random-background .no").classList.add("active");
  }
}

/* -------------------------------------------------------------------- */
// * End check Data in local Storage
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *Start Add class Toggle In Icon Gear And Show Menu By Toggle
/* -------------------------------------------------------------------- */

document.querySelector(".toggle-settings .fa-gear").onclick=function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}

/* -------------------------------------------------------------------- */
// *End Add class Toggle In Icon Gear And Show Menu By Toggle
/* -------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *Start Switch colors
/* -------------------------------------------------------------------- */

const colorsLi =document.querySelectorAll(".color-list li");
colorsLi.forEach(li => {
    li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
    localStorage.setItem("color_option",e.target.dataset.color);
    // *handelActive This Is Function To Remove Class Active And Add It
    handelActive(e)
    });
});

/* -------------------------------------------------------------------- */
// *End Switch colors
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *start switch Random Background Option
/* -------------------------------------------------------------------- */

let randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach(span => {
  span.addEventListener("click",(e) => {
    // *handelActive This Is Function To Remove Class Active And Add It
    handelActive(e);
    if(e.target.dataset.background==="yes"){
      backgroundOption = true;
      randomizeImg();
      localStorage.setItem("background_option",true);
    }else{
      backgroundOption = false;
      clearInterval(backgroundInterval)
      localStorage.setItem("background_option",false);
    }
  })
})

/* -------------------------------------------------------------------- */
// *End switch Random Background Option
/* -------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *Start Change Background Photo
/* -------------------------------------------------------------------- */

let landingPage=document.querySelector(".landing-page")
let imgsArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]



function randomizeImg(){
  if(backgroundOption === true){
    backgroundInterval = setInterval(() => {
      let randomNumber =Math.floor(Math.random() * imgsArray.length)
      landingPage.style.backgroundImage=`url("img/${imgsArray[randomNumber]}")`
      }, 2000);
      
  }
}
randomizeImg();
/* -------------------------------------------------------------------- */
// *End Change Background Photo
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *Start Select Skills 
/* -------------------------------------------------------------------- */
let ourSkills =document.querySelector(".skills")

window.onscroll=function () {
let skillsOffsetTop=ourSkills.offsetTop;
let skillsOuterHeight=ourSkills.offsetHeight;
let windowHeight=this.innerHeight;
let windowScrollTop=this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
  let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
  allSkills.forEach(skill => {
    skill.style.width = skill.dataset.progress;
  });
}
}

/* -------------------------------------------------------------------- */
// *End Select Skills 
/* -------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *Start Select Skills 
/* -------------------------------------------------------------------- */
// *Create Popup With The
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {
  img.addEventListener("click",function (e) {
    /**Create overlay and popupBox*/
    // *Creat Overlay Element
    let overlay =document.createElement("div");
    // *Add Class To overlay
    overlay.className="popup-overlay";
    // *Append overlay The Body
    document.body.appendChild(overlay);
    // *Creat The Popup
    let popupBox =document.createElement("div");
    // *Add Class To popupBox
    popupBox.className="popup-box";
    // *-------------------------------------------------
    /**Create If The Image Have Alt*/
    if(img.alt !== null){
      // *Creat Heading
      let imgHeading=document.createElement("h3");
      // *Creat Text For Heading
      let imgText =document.createTextNode(img.alt);
      // *Append The Text To Heading
      imgHeading.appendChild(imgText);
      // *Append The heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }
    // *-------------------------------------------------
    /**Create The Image And Add It In The Popup Box*/
    // *Creat The Image
    let popupImage= document.createElement("img");
    // *Set Image Source
    popupImage.src=img.src;
    // *Add Image To Popup Box
    popupBox.appendChild(popupImage);
    // *Append The Popup Box To Body
    document.body.appendChild(popupBox);
    // *-------------------------------------------------
    /**Create The Close button*/
    // *Create The Close Span
    let closeButton=document.createElement("span");
    // *Create The Close Button Text 
    let closeButtonText =document.createTextNode("X");
    // *Append Text To Close Button
    closeButton.appendChild(closeButtonText);
    // *Add Class To Clos Button 
    closeButton.className="close-button";
    // *Add Close Button To The Popup Box
    popupBox.appendChild(closeButton)
  })
});
/* -------------------------------------------------------------------- */
// *Start Close The Popup By Button Close
/* -------------------------------------------------------------------- */
document.addEventListener("click",function (e) {
  if(e.target.className =="close-button"){
    // *Remove The Current Popup
    e.target.parentNode.remove();
    // *Remove Overlay
    document.querySelector(".popup-overlay").remove()
  }
})

/* -------------------------------------------------------------------- */
// *End Close The Popup By Button Close
/* -------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *End Select Skills 
/* -------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *Start Nav Bullets And Link Got Section
/* -------------------------------------------------------------------- */
// *Select All Bullets
const allBullets =document.querySelectorAll(".nav-bullets .bullet")
// *Select All Bullets
const allLinks =document.querySelectorAll(".links a")

function scrollToSomeWhere(elements) {
  elements.forEach(ele => {
    ele.addEventListener("click",function (e) {
      e.preventDefault()
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:"smooth"
      })
    })
  });
}

scrollToSomeWhere(allBullets)
scrollToSomeWhere(allLinks)

/* -------------------------------------------------------------------- */
// *End Nav Bullets And Link Got Section
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *Start Handel Class Active State
/* -------------------------------------------------------------------- */
function handelActive(ev) {
  // *Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
    element.classList.remove("active");
  })
  // *Add Active Class on Self
  ev.target.classList.add("active");
}


/* -------------------------------------------------------------------- */
// *End Handel Class Active State
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* -------------------------------------------------------------------- */
// *Start Show Bullets And hide
/* -------------------------------------------------------------------- */
let bulletsSpan =document.querySelectorAll(".bullets-option span");
let bulletsContainer =document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option")//*

if(bulletLocalItem !== null){
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  });
  if(bulletLocalItem === "block"){
    bulletsContainer.style.display="block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  }else{
    bulletsContainer.style.display="none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}
bulletsSpan.forEach(span => {
  span.addEventListener("click",(e) => {
    if (span.dataset.display==="show") {
      bulletsContainer.style.display="block";
      localStorage.setItem("bullets-option","block")
    }else{
      bulletsContainer.style.display="none";
      localStorage.setItem("bullets-option","none")
    }
    handelActive(e)
  })
});

/* -------------------------------------------------------------------- */
// *End Show Bullets And hide
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *Start Reset Button
/* -------------------------------------------------------------------- */
document.querySelector(".reset-options").onclick=function () {
  localStorage.clear();
  window.location.reload();
}
/* -------------------------------------------------------------------- */
// *Start Reset Button
/* -------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------- */
// *Start Toggle Menu
/* -------------------------------------------------------------------- */

// *toggle Menu
let toggleBtn =document.querySelector(".toggle-menu");
// *All Links
let tLinks=document.querySelector(".links");

toggleBtn.addEventListener("click",function (e) {
  // *Stop propagation
  e.stopPropagation()
  // *Toggle class "menu-active" On Button
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open")
})




// *Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click",function (e) {
  if(e.target !== toggleBtn && e.target !== tLinks){
    // *Check If Menu Is Open
    if(tLinks.classList.contains("open")){
    // *Toggle class "menu-active" On Button
    toggleBtn.classList.toggle("menu-active");
    // *Toggle Class "open" On Links
    tLinks.classList.toggle("open")
    }
  }
})

  // *Stop propagation On Menu
  tLinks.onclick=function (e) {
    e.stopPropagation()
  }

/* -------------------------------------------------------------------- */
// *End Toggle Menu
/* -------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------------------------------------------------------------------*/

