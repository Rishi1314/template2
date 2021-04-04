
const menu=$("#menu")
function closemenu(){
    menu.css('left','-100%')
}
function openmenu(){
    menu.css('left','0')
}
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: 2 ,delay:0.5}, "-=1");
tl.to(".navbar", { y: "-50%", duration: 1,delay:0.2},"-=1");


