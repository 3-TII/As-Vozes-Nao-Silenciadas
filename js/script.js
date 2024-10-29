
function displayText(id) {
  const bioma_etnia = document.getElementById('bioma-etnia');
  var i = 1; 

  do {
    if (i != id) {
      document.getElementById(i + ("-etnia")).style.display = "none";

    } else if (document.getElementById(id + ("-etnia")).style.display == "flex" && i == id) {
      document.getElementById(id + ("-etnia")).classList.toggle('slide-out-top');
      
      setTimeout(() => {
        document.getElementById(id + ("-etnia")).style.display = "none";
        document.getElementById(id + ("-etnia")).classList.remove('slide-out-top');
        bioma_etnia.style.display = "none";
      }, 1000);

    } else {
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

    const originalWidth = 650; // Largura original
const originalHeight = 650; // Altura original

function updateMapAreas() {
    const img = document.querySelector('.map-image');
    const areas = document.querySelectorAll('area');

    // Verifica se a imagem e as áreas existem
    if (img && areas.length > 0) {
        // Obtenha as dimensões da imagem
        const width = img.offsetWidth;
        const height = img.offsetHeight;

        // Atualize as coordenadas das áreas
        areas.forEach(area => {
            const coordsAttr = area.getAttribute('coords');
            if (coordsAttr) { // Verifica se o atributo existe
                const coords = coordsAttr.split(',').map(Number);
                const newCoords = coords.map((coord, index) => {
                    return index % 2 === 0 ? (coord / originalWidth) * width : (coord / originalHeight) * height;
                });
                area.setAttribute('coords', newCoords.join(','));
            } else {
                console.warn('Atributo data-coords não encontrado para esta área.');
            }
        });
    } else {
        console.warn('Imagem ou áreas não encontradas.');
    }
}

// Chama a função ao carregar a página e ao redimensionar a janela
if (window.outerWidth < 768) {
    updateMapAreas();
}

window.addEventListener('resize', () => {
    if (window.outerWidth < 768) {
        updateMapAreas();
    }
});