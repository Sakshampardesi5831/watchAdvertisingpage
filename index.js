// overlayer transition Animation code 
 gsap.to('.overlayer',{
     y:'-100vh',
     delay:1.5
 })
gsap.to('.layer1',{
    y:'-100vh',
    delay:0.5
})
gsap.to('.layer2',{
    y:'-100vh',
    delay:0.7
})
gsap.to('.layer3',{
    y:'-100vh',
    delay:0.9
})
gsap.from('.circle-small',{
    x:'-30rem',
    opacity:0,
    delay:1.2
})
gsap.from('.circle-large',{
    x:'100rem',
    opacity:0,
    delay:2
})
gsap.from('.text',{
    x:'30rem',
    opacity:0,
    delay:2.5
})
gsap.from('.watch-wrapper',{
    x:'30rem',
    opacity:0,
    delay:3
})
