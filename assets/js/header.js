let prevScrollPos = window.pageYOffset;
    const header = document.getElementById("mainHeader");

    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        header.classList.remove("header-hidden");
      } else {
        header.classList.add("header-hidden");
      }

      prevScrollPos = currentScrollPos;
    }