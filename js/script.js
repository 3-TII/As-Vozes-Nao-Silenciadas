//SLIDER ARTISTS

//Next Slide
function nxtSlide(id) {
    if (id + 1 > 11) {
        id = 1;

        var element = document.getElementById(id + 10);
        element.classList.remove("active");
        element.classList.add("off");

        var nxtElement = document.getElementById(id);
        nxtElement.classList.remove("off");
        nxtElement.classList.add("active");
    } else {
        var element = document.getElementById(id);
        element.classList.remove("active");
        element.classList.add("off");

        var nxtElement = document.getElementById(id + 1);
        nxtElement.classList.remove("off");
        nxtElement.classList.add("active");
    }
}

//Previous Slide
function prevSlide(id) {
    if (id - 1 == 0) {
        var element = document.getElementById(id);
        element.classList.remove("active");
        element.classList.add("off");

        var prevElement = document.getElementById(id + 10);
        prevElement.classList.remove("off");
        prevElement.classList.add("active");

    } else {
        var element = document.getElementById(id);
        element.classList.remove("active");
        element.classList.add("off");

        var prevElement = document.getElementById(id - 1);
        prevElement.classList.remove("off");
        prevElement.classList.add("active");
    }
}


// SLIDER TOPICS

//Next Topic
function nxtTopic(id) {
    let nextId = id + 1 > 12 ? 1 : id + 1;
    let currentElement = document.getElementById("t" + id);
    let nextElement = document.getElementById("t" + nextId);

    currentElement.classList.remove("active");
    currentElement.classList.add("off");

    nextElement.classList.remove("off");
    nextElement.classList.add("active");
}

//Previous Topic
function prevTopic(id) {
    let prevId = id - 1 === 0 ? 12 : id - 1;
    let currentElement = document.getElementById("t" + id);
    let prevElement = document.getElementById("t" + prevId);

    currentElement.classList.remove("active");
    currentElement.classList.add("off");

    prevElement.classList.remove("off");
    prevElement.classList.add("active");
}



async function showRefList() {
    const element = document.getElementById("reference-list");
    const btn1 = document.getElementById("btnControl-1-ref");
    const btn2 = document.getElementById("btnControl-2-ref");

    if (element.classList.contains("off")) {
        element.classList.remove("off");
        element.classList.remove("animate__fadeOut");
        element.classList.add("animate__fadeIn");
        element.classList.add("active");

        btn1.classList.remove("rotate-1-back");
        btn1.classList.add("rotate-1");

        btn2.classList.remove("rotate-2-back");
        btn2.classList.add("rotate-2");

    } else {
        const timer = (seconds) => {
            let time = seconds * 1000
            return new Promise(res => setTimeout(res, time))
        }

        element.classList.remove("animate__fadeIn");
        element.classList.add("animate__fadeOut");
        await timer(0.5);
        element.classList.remove("active");
        element.classList.add("off");

        btn1.classList.remove("rotate-1");
        btn1.classList.add("rotate-1-back");

        btn2.classList.remove("rotate-2");
        btn2.classList.add("rotate-2-back");
    }
}


function displayText(id) {
  const bioma_etnia = document.getElementById('bioma-etnia');
  var i = 1; 

  do {
    if (i != id) {
      document.getElementById(i + ("-etnia")).style.display = "none";

    } else /*if (document.getElementById(id + ("-etnia")).style.display == "flex" && i == id) {
      document.getElementById(id + ("-etnia")).classList.toggle('slide-out-top');
      
      setTimeout(() => {
        document.getElementById(id + ("-etnia")).style.display = "none";
        document.getElementById(id + ("-etnia")).classList.remove('slide-out-top');
        bioma_etnia.style.display = "none";
      }, 1000);

    } else */{
      bioma_etnia.style.display = "inline";
      document.getElementById(id + ("-etnia")).style.display = "flex";
    }
    i++;
  } while (i < 7);

}

function menu(){
  const nav = document.querySelector('ul');
  nav.classList.toggle('show-menu');
}

function abrir(){
  window.location.href = "index.html";
}

document.addEventListener('click', (event) => {
  const logo = document.querySelector('img');
  const nav = document.querySelector('ul');
  if (!nav.contains(event.target) && nav.classList.contains('show-menu')) {
      nav.classList.remove('show-menu');
      logo.style.display = 'block';
    }
  });

window.addEventListener('scroll', () => {   
  const logo = document.querySelector('img');
  const nav = document.querySelector('ul');
  if (!nav.contains(event.target) && nav.classList.contains('show-menu')) {
      nav.classList.remove('show-menu');
      logo.style.display = 'block';
    }
});

if (window.outerWidth < 768) {
  const nav = document.querySelector('ul');
  let items = document.querySelectorAll('li a');
  let terceiroItem = items[2];

  terceiroItem.addEventListener('click', function(event) {
  event.preventDefault();
});
  terceiroItem.setAttribute('disabled', 'true');

  const navHeight = document.querySelector('ul').offsetHeight;
  const main = document.querySelector('main');

  const etniaTitles = document.querySelectorAll('.etnia-title');
  for (const etnia_title of etniaTitles) {
    etnia_title.style.marginTop = (navHeight + 10) + 'px';
  }

  main.style.width = window.innerWidth;

}

const originalWidth = 650;
const originalHeight = 650;

function updateMapAreas() {
    const img = document.querySelector('.map-image');
    const areas = document.querySelectorAll('area');

    if (img && areas.length > 0) {
        const width = img.offsetWidth;
        const height = img.offsetHeight;

        areas.forEach(area => {
            const coordsAttr = area.getAttribute('coords');
            if (coordsAttr) {
                const coords = coordsAttr.split(',').map(Number);
                const newCoords = coords.map((coord, index) => {
                    return index % 2 === 0 ? (coord / originalWidth) * width : (coord / originalHeight) * height;
                });
                area.setAttribute('coords', newCoords.join(','));
            } else {
                console.warn('erro');
            }
        });
    } else {
        console.warn('erro');
    }
}

if (window.outerWidth < 768) {
    updateMapAreas();
}

window.addEventListener('resize', () => {
    if (window.outerWidth < 768) {
        updateMapAreas();
    }
});

const path = window.location.pathname;

if(path.includes('Resistencia.html')){
function alternarVisibilidade(elementoHtml) {
  const paragrafos = document.querySelectorAll(".mn_pesquisas");

  paragrafos.forEach((p) => {
    if (p !== elementoHtml) {
      p.style.display = "none";
    }
  });

  elementoHtml.style.display = (elementoHtml.style.display === "block") ? "none" : "block";

  //alterar display btnVoltar
  const btn_voltar = document.getElementById('btnVoltar');
  const check_display = Array.from(paragrafos).some((p) => p.style.display === "block");

  if (check_display) {
    btn_voltar.classList.remove("off");
    btn_voltar.classList.add("btnVoltar");
  } else {
    btn_voltar.classList.remove("btnVoltar");
    btn_voltar.classList.add("off");
  }
}
//onclick das pesquisas
for (let i = 1; i < 9; i++) {
  document.getElementById(i).onclick = () => {
    const idPesquisa = "P" + i;
    alternarVisibilidade(document.getElementById(idPesquisa));
  };
}
}

function menu() {
  const nav = document.querySelector('ul');
  nav.classList.toggle('show-menu');
}

document.addEventListener('click', (event) => {
  const logo = document.querySelector('img');
  const nav = document.querySelector('ul');
  if (!nav.contains(event.target) && nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
    logo.style.display = 'block';
  }
});

window.addEventListener('scroll', () => {
  const logo = document.querySelector('img');
  const nav = document.querySelector('ul');
  if (!nav.contains(event.target) && nav.classList.contains('show-menu')) {
    nav.classList.remove('show-menu');
    logo.style.display = 'block';
  }
});

if (window.outerWidth < 768) {
  const nav = document.querySelector('ul');
  const navHeight = document.querySelector('ul').offsetHeight;
  const main = document.querySelector('main');

  const etniaTitles = document.querySelectorAll('.etnia-title');
  for (const etnia_title of etniaTitles) {
    etnia_title.style.marginTop = (navHeight + 10) + 'px';
  }

  main.style.width = window.innerWidth;

}



//Referências
async function showRefList() {
  const element = document.getElementById("RF");
  const btn1 = document.getElementById("btnControl-1-ref");
  const btn2 = document.getElementById("btnControl-2-ref");

  if (element.classList.contains("off")) {

    btn1.classList.remove("rotate-1-back");
    btn1.classList.add("rotate-1");

    btn2.classList.remove("rotate-2-back");
    btn2.classList.add("rotate-2");

    element.classList.remove("off");
    element.classList.add("active");

  } else {
    const timer = (seconds) => {
      let time = seconds * 1000
      return new Promise(res => setTimeout(res, time))
    }

    btn1.classList.remove("rotate-1");
    btn1.classList.add("rotate-1-back");

    btn2.classList.remove("rotate-2");
    btn2.classList.add("rotate-2-back");

    element.classList.remove("active");
    element.classList.add("off");
  }
}