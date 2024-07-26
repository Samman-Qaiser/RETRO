function loader(){
var page1=document.querySelector(".page1")
var tl=gsap.timeline()

tl.to(".main",{
    y:"100vh",
    scale:0.6,
    duration:1
})
tl.to(".main",{
    y:"30vh",
    duration:2,
    delay:1
})
tl.to(".main",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})
}
function move(){
    var move=document.querySelectorAll(".move")

    gsap.to(".move",{
transform:"translateX(-100%)",
        repeat:-1,
        duration:4
    })
  
    
     
}
function boxes(){
 var b1=document.querySelector(".b1")
 var b2=document.querySelector(".b2")
 var b3=document.querySelector(".b3")
 var b4=document.querySelector(".b4")
 b1.addEventListener("mouseenter",function(){
    b2.style.transform="translateX(-10%)"
     b3.style.transform="translateX(-70%)"
      b4.style.transform="translateX(-130%)"
 })
 b1.addEventListener("mouseleave",function(){
    b2.style.transform="translateX(-50%)"
     b3.style.transform="translateX(-100%)"
      b4.style.transform="translateX(-160%)"
 })
 b2.addEventListener("mouseenter",function(){
    // b1.style.transform="translateX(-10%)"
     b3.style.transform="translateX(-60%)"
      b4.style.transform="translateX(-130%)"
 })
 b2.addEventListener("mouseleave",function(){
   
     b3.style.transform="translateX(-100%)"
      b4.style.transform="translateX(-160%)"
 })
 b3.addEventListener("mouseenter",function(){
   
   
      b4.style.transform="translateX(-110%)"
 })
 b3.addEventListener("mouseleave",function(){
   
   
      b4.style.transform="translateX(-160%)"
 })
}
boxes()
move()
loader()