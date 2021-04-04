const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });
t2.to(".loading", { left: "-10%",top:'-10%', duration: 4});
t2.to(".otherpagesintro", { x: "100%", duration: 0.5 , delay:1} ,'-=1');

