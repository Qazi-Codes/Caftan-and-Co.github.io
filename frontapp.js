let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".front-page",
      start: "top",
      end: "100%",
      scrub: "true",
      pin: true,
    },
  });

  tl.fromTo(
    ".testdiv",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.2,
    }
  );
  
  tl.fromTo(
    ".front-page",
    {
      clipPath: "circle(10%)",
    },
    {
      clipPath: "circle(75%)",
      duration: 2,
    }
  );
  
  tl.fromTo(
    ".intro-logo",
    {
      scale: 0.54,
    },
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    "-=2"
  );
  
  tl.fromTo(
    ".title",
    {
      opacity: 0,

    },
    {
      opacity: 1,
      duration: 1,
      
    }
  );
  
  tl.fromTo(
    ".sub-title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  );
  