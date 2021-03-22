$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();

  // Scroll Buttons

  const btnScrollToTop = document.querySelector(".scroll-to-top");
  const skillsbtn = document.querySelector("#skills");
  const certificationsbtn = document.querySelector("#certifications");
  const projectsbtn = document.querySelector("#projects");

  // Scroll to Top Button

  window.addEventListener("scroll", function() {
    if (window.pageYOffset>650) {
      btnScrollToTop.classList.add("active");
    } else {
      btnScrollToTop.classList.remove("active");
    }
  });

  btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  // Menu Buttons

  skillsbtn.addEventListener("click", function() {
    if (screen.width>800) {
      window.scrollTo({
        top: 1200,
        left: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth"
      });
    }
  });

  certificationsbtn.addEventListener("click", function() {
    if (screen.width>800) {
      window.scrollTo({
        top: 2000,
        left: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 1500,
        left: 0,
        behavior: "smooth"
      });
    }

  });

  projectsbtn.addEventListener("click", function() {
    if (screen.width>800) {
      window.scrollTo({
        top: 2900,
        left: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 2750,
        left: 0,
        behavior: "smooth"
      });
    }

  });