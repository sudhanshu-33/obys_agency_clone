function loaderAnimation(){
  var tl = gsap.timeline();

tl.from(".element h1", {
  y: 150,
  stagger: 0.5,
  duration: 0.6,
//   delay: 0.5,
});
tl.from("#element-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#element-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 30);
  },
});
tl.to(".element h2",{
    animationName:"nowAnimation",
    opacity:1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 1,
});
tl.from("#page1",{
    delay:0.2,
    y:2000,
    opacity:0,
    duration:0.7,
    // ease:Power8
})
tl.to("#loader",{
    display:"none"
})
tl.from("#page1 h1",{
opacity:0,
})
tl.from("#heading1 h1,#heading2 h1,#heading3 h2,#heading4 h1",{
  y:120,
  stagger:0.2,
  duration:0.7,
})
}


function cursorAnimation(){
document.addEventListener("mousemove",function(dets){
 gsap.to("#cursr",{
  left:dets.x,
  top:dets.y,
  
 })
})
Shery.makeMagnet("#page1 #nav h4,.brand__svg", {
});
}
loaderAnimation();
cursorAnimation();
