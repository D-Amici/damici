document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".custom-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    toggler.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
      toggler.classList.remove("active");
    });

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
      toggler.classList.add("active");
    });
  });
      

      document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('darkModeToggle');
      
        if (!toggleButton) return;
      
        // Aplică tema dark dacă era salvată anterior
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
        }
      
        toggleButton.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
          } else {
            localStorage.setItem('theme', 'light');
          }
        });
      });
      

      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'ro',
            includedLanguages: 'ro,en,de,it,fr,es',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }




        setTimeout(() => {
          const el = document.getElementById("text");
          el.remove(); // sau el.remove();
        }, 3500);

      

        document.getElementById("year").textContent = new Date().getFullYear();
