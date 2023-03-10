
function openForm() {
    document.getElementById("login-btn").style.display = "none";
    document.querySelector(".login-popup").style.display = "block";
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');

  }
  
  function closeForm() {
    document.querySelector(".login-popup").style.display = "none";
    document.getElementById("login-btn").style.display = "inline-block";

    const body = document.querySelector('body');

    body.classList.remove('overflow-hidden');
  }

  
  function enableOverflow(){
    document.querySelector(".overflow-hidden").style.overflow = "visible";
  }



  var typed = new Typed(".auto-type", {
    strings: ["Attīsti IT jomu šodien!", "Uzsāc savas spējas darba tirgū!", "Iepazīsti IT pasauli!", "Izzini jaunākās tendences!", "IT speciālisti ir milzu pieprasīti!", "Sāc savu karjeras ceļu tagad!", "Galvenais ir sākt!"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
})