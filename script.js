var tl=gsap.timeline()

tl.from(".part1,.part2,.part3",{
    opacity:0,
    y:-30,
    duration:1,
    deley:1,
})
tl.from(".box h2",{
    opacity:0,
    scale:0.5,
    duration:2, 
})
tl.from(".img1,.img2,.img3,.img4",{
    rotate:80,
    opacity:0,
    duration:1,
    deley:1,
    stagger:0.5,
})







