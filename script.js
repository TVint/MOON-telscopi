// --- GENERATORE DI STELLE  ---
function initStars() {
  // Calcola le dimensioni REALI di tutto il documento scrollabile
  let docWidth = document.documentElement.clientWidth;
  let docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 5000);

  // La funzione calcola il numero di stelle in base all'area totale, mantenendo densità costante
  function generateDensity(densityFactor) {
    let count = Math.floor((docWidth * docHeight) / densityFactor);
    let shadows = [];
    for(let i = 0; i < count; i++) {
      let x = Math.floor(Math.random() * docWidth);
      let y = Math.floor(Math.random() * docHeight);
      shadows.push(`${x}px ${y}px #ffffff`);
    }
    return shadows.join(', ') || '0px 0px transparent';
  }

    document.getElementById('star-layer-1').style.boxShadow = generateDensity(6000);  // Molto fitto
    document.getElementById('star-layer-2').style.boxShadow = generateDensity(12000); // Fitto
    document.getElementById('star-layer-3').style.boxShadow = generateDensity(25000); // Fitto
}

// Inizializza non appena la pagina ha caricato le sue dimensioni
document.addEventListener("DOMContentLoaded", initStars);
// Se l'utente gira il telefono, ricalcola le stelle
window.addEventListener("resize", initStars);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('star-layer-1').style.boxShadow = generateStars(450, '#e8eaef');
  document.getElementById('star-layer-2').style.boxShadow = generateStars(240, '#ffffff');
  document.getElementById('star-layer-3').style.boxShadow = generateStars(120, '#ffffff');
});


// --- DATABASE DEI 21 TELESCOPI ---
const telescopesData = [
  {
    id: "galileo", img: "img/1.GALILEO.webp", year: "1609", category: "ottici",
    meta: { it: { type: "Rifrattore / Cannocchiale", obs: "Terra", spec: "Luce visibile", dim: "Lungo circa 98 cm, ingrandimento fino a 30×", inv: "Galileo Galilei, Italia" }, en: { type: "Refractor / Telescope", obs: "Earth", spec: "Visible light", dim: "About 98 cm long, magnification up to 30x", inv: "Galileo Galilei, Italy" } },
    title_it: "Cannocchiale di Galileo", title_en: "Galileo’s telescope",
    desc_it: "Luna, fasi di Venere, satelliti di Giove, Via Lattea. Non inventa il cannocchiale, ma è il primo a trasformarlo in una macchina scientifica che cambia l’astronomia.", desc_en: "The Moon, the phases of Venus, Jupiter’s satellites and the Milky Way. Galileo did not invent the telescope, but he was the first to turn it into a scientific machine that changed astronomy."
  },
  {
    id: "newton", img: "img/2.NEWTON.webp", year: "1668", category: "ottici",
    meta: { it: { type: "Riflettore", obs: "Terra", spec: "Luce visibile", dim: "Piccolo strumento sperimentale, specchio di pochi cm", inv: "Isaac Newton, Inghilterra" }, en: { type: "Reflector", obs: "Earth", spec: "Visible light", dim: "Small experimental instrument, mirror a few cm wide", inv: "Isaac Newton, England" } },
    title_it: "Telescopio riflettore di Newton", title_en: "Newton’s reflecting telescope",
    desc_it: "Non conta tanto la potenza osservativa, quanto il principio. Sostituire le lenti con uno specchio permette di superare molti limiti dei primi rifrattori e apre la strada ai grandi telescopi moderni.", desc_en: "What matters most is not its observing power, but its principle. Replacing lenses with a mirror made it possible to overcome many limits of early refractors and opened the way to modern large telescopes."
  },
  {
    id: "herschel", img: "img/3.HERSCHEL.webp", year: "1789", category: "ottici",
    meta: { it: { type: "Riflettore", obs: "Terra", spec: "Luce visibile", dim: "Specchio primario da 1,2 m, tubo da 12 m", inv: "William Herschel, Regno Unito" }, en: { type: "Reflector", obs: "Earth", spec: "Visible light", dim: "Primary mirror about 1.2 m, 40-foot tube", inv: "William Herschel, United Kingdom" } },
    title_it: "40-foot Telescope di William Herschel", title_en: "William Herschel’s 40-foot Telescope",
    desc_it: "Fu il più grande telescopio del mondo per circa mezzo secolo. Rappresenta il momento in cui l’astronomia entra davvero nell’era dei grandi strumenti.", desc_en: "It was the largest telescope in the world for about half a century. It represents the moment when astronomy truly entered the era of large instruments.",
    extra_it: "Curiosità: Herschel aveva già scoperto Urano nel 1781 con strumenti più piccoli, questo telescopio è il simbolo della sua ambizione di 'allargare l'universo'.", extra_en: "Did you know? Herschel had already discovered Uranus in 1781 with smaller instruments; this telescope is the symbol of his ambition to 'enlarge the universe'."
  },
  {
    id: "leviathan", img: "img/4.LEVIATHAN.webp", year: "1845", category: "ottici",
    meta: { it: { type: "Riflettore", obs: "Terra", spec: "Luce visibile", dim: "Specchio da 1,83 m", inv: "William Parsons, Irlanda" }, en: { type: "Reflector", obs: "Earth", spec: "Visible light", dim: "72-inch / 1.83 m mirror", inv: "William Parsons, Ireland" } },
    title_it: "Leviathan of Parsonstown", title_en: "Leviathan of Parsonstown",
    desc_it: "Fu il più grande telescopio del mondo dell’Ottocento. Reso celebre anche dalle osservazioni della struttura a spirale di alcune nebulose, fra cui quella che oggi chiamiamo galassia Vortice (M51).", desc_en: "It was the largest telescope in the world in the nineteenth century. It became famous also for observations of the spiral structure of some nebulae, including the object we now call the Whirlpool Galaxy (M51)."
  },
  {
    id: "yerkes", img: "img/5.YERKES.webp", year: "1897", category: "ottici",
    meta: { it: { type: "Rifrattore", obs: "Terra", spec: "Luce visibile", dim: "Lente da 102 cm, focale di 19,3 m", inv: "Yerkes Observatory, USA" }, en: { type: "Refractor", obs: "Earth", spec: "Visible light", dim: "40-inch / 102 cm lens, focal length 19.3 m", inv: "Yerkes Observatory, USA" } },
    title_it: "Yerkes 40-inch Refractor", title_en: "Yerkes 40-inch Refractor",
    desc_it: "È ancora oggi il più grande rifrattore astronomico realmente usato con successo nella ricerca. Segna il culmine storico dell’astronomia a lenti.", desc_en: "It is still the largest astronomical refractor ever successfully used for research. It marks the historical peak of lens-based astronomy.",
    extra_it: "Curiosità: dopo Yerkes, i telescopi giganti passano definitivamente ai riflettori.", extra_en: "Did you know? After Yerkes, giant telescopes definitively moved to reflectors."
  },
  {
    id: "hooker", img: "img/6.HOOKER.webp", year: "1917", category: "ottici",
    meta: { it: { type: "Riflettore", obs: "Terra", spec: "Luce visibile", dim: "Specchio da 2,54 m", inv: "Mount Wilson Observatory, USA" }, en: { type: "Reflector", obs: "Earth", spec: "Visible light", dim: "100-inch / 2.54 m mirror", inv: "Mount Wilson Observatory, USA" } },
    title_it: "Hooker Telescope (Mount Wilson)", title_en: "Hooker Telescope (Mount Wilson)",
    desc_it: "Con il Hooker, Edwin Hubble dimostrò che Andromeda è una galassia esterna alla Via Lattea e pose le basi osservative dell’espansione dell’universo.", desc_en: "With the Hooker telescope, Edwin Hubble showed that Andromeda is a galaxy outside the Milky Way and laid the observational foundations for the expansion of the universe."
  },
  {
    id: "hale", img: "img/7.HALE.webp", year: "1949", category: "ottici",
    meta: { it: { type: "Riflettore", obs: "Terra", spec: "Visibile e vicino infrarosso", dim: "Specchio da 5,08 m", inv: "Caltech / Palomar Observatory, USA" }, en: { type: "Reflector", obs: "Earth", spec: "Mainly visible, later near-infrared", dim: "200-inch / 5.08 m mirror", inv: "Caltech / Palomar Observatory, USA" } },
    title_it: "Hale Telescope (Palomar)", title_en: "Hale Telescope (Palomar)",
    desc_it: "Per decenni è stato il telescopio simbolo della grande astronomia del Novecento. Ha spinto in avanti lo studio di galassie, quasar e struttura dell’universo.", desc_en: "For decades it was the symbolic telescope of twentieth-century big astronomy. It advanced the study of galaxies, quasars and the structure of the universe."
  },
  {
    id: "arecibo", img: "img/8.ARECIBO.webp", year: "1963", category: "radio",
    meta: { it: { type: "Radiotelescopio fisso", obs: "Terra", spec: "Radio", dim: "Piatto di 305 m", inv: "Arecibo Observatory, Porto Rico / USA" }, en: { type: "Fixed radio telescope", obs: "Earth", spec: "Radio", dim: "305 m dish", inv: "Arecibo Observatory, Puerto Rico / USA" } },
    title_it: "Arecibo Telescope", title_en: "Arecibo Telescope",
    desc_it: "Radioastronomia, radar planetario, atmosfera, pulsar. Per decenni è stato uno dei simboli assoluti dell’astronomia radio. Il grande strumento storico è però crollato nel 2020.", desc_en: "Radio astronomy, planetary radar, the atmosphere and pulsars. For decades it was one of the great icons of radio astronomy. The historic instrument collapsed in 2020."
  },
  {
    id: "hubble", img: "img/9.HUBBLE.webp", year: "1990", category: "spaziali",
    meta: { it: { type: "Telescopio spaziale", obs: "Spazio, orbita bassa", spec: "Ultravioletto, visibile, vicino infrarosso", dim: "Specchio primario da 2,4 m", inv: "NASA e ESA" }, en: { type: "Space telescope", obs: "Space, low Earth orbit", spec: "Ultraviolet, visible, near-infrared", dim: "2.4 m primary mirror", inv: "NASA and ESA" } },
    title_it: "Hubble Space Telescope", title_en: "Hubble Space Telescope",
    desc_it: "Ha rivoluzionato la cosmologia moderna, lo studio di galassie, nebulose, esopianeti e dell’espansione cosmica. È forse il telescopio più iconico mai costruito.", desc_en: "It revolutionized modern cosmology and the study of galaxies, nebulae, exoplanets and cosmic expansion. It is perhaps the most iconic telescope ever built.",
    extra_it: "Curiosità: era stato lanciato con un difetto ottico e fu riparato in orbita dagli astronauti.", extra_en: "Did you know? It was launched with an optical flaw and was repaired in orbit by astronauts."
  },
  {
    id: "keck", img: "img/10.KECK.webp", year: "1993", category: "ottici",
    meta: { it: { type: "Riflettori segmentati", obs: "Terra", spec: "Visibile e infrarosso", dim: "Due specchi primari da 10 m ciascuno", inv: "Università della California / Caltech, USA" }, en: { type: "Segmented reflectors", obs: "Earth", spec: "Visible and infrared", dim: "Two primary mirrors, each 10 m across", inv: "University of California / Caltech, USA" } },
    title_it: "W. M. Keck Observatory", title_en: "W. M. Keck Observatory",
    desc_it: "Ha reso normale il concetto di specchio segmentato gigante. È stato decisivo per esopianeti, galassie lontane, centro galattico e cosmologia osservativa.", desc_en: "It normalized the idea of a giant segmented mirror. It has been decisive for exoplanets, distant galaxies, the Galactic Centre and observational cosmology."
  },
  {
    id: "vlt", img: "img/11.VLT.webp", year: "1998", category: "ottici",
    meta: { it: { type: "Array di telescopi", obs: "Terra", spec: "Visibile e infrarosso", dim: "4 telescopi principali da 8,2 m + ausiliari", inv: "ESO, Cile/Europa" }, en: { type: "Array of telescopes", obs: "Earth", spec: "Visible and infrared", dim: "4 main telescopes of 8.2 m + auxiliary", inv: "ESO, Chile/Europe" } },
    title_it: "Very Large Telescope (VLT)", title_en: "Very Large Telescope (VLT)",
    desc_it: "Non è un singolo telescopio, ma una infrastruttura. Ha un ruolo enorme nello studio di esopianeti, buchi neri, galassie lontane e interferometria ottica.", desc_en: "It is not a single telescope, but an infrastructure. It plays a huge role in the study of exoplanets, black holes, distant galaxies and optical interferometry."
  },
  {
    id: "fast", img: "img/12.FAST.webp", year: "2016", category: "radio",
    meta: { it: { type: "Radiotelescopio", obs: "Terra", spec: "Radio", dim: "Apertura 500 m (diametro effettivo 300 m)", inv: "National Astron. Obs. of China" }, en: { type: "Radio telescope", obs: "Earth", spec: "Radio", dim: "500 m structural aperture (effective 300 m)", inv: "National Astron. Obs. of China" } },
    title_it: "FAST – Five-hundred-meter Aperture Spherical Telescope", title_en: "FAST",
    desc_it: "Oggi è il più grande radiotelescopio a singolo piatto pienamente operativo del mondo. È fortissimo su pulsar e radioastronomia di grande sensibilità.", desc_en: "It is currently the largest fully operational single-dish radio telescope in the world. It is exceptionally powerful for pulsars and high-sensitivity radio astronomy."
  },
  {
    id: "jwst", img: "img/13.WEBB.webp", year: "2022", category: "spaziali",
    meta: { it: { type: "Telescopio spaziale", obs: "Spazio, punto L2", spec: "Soprattutto infrarosso", dim: "Specchio segmentato da 6,5 m", inv: "NASA / ESA / CSA" }, en: { type: "Space telescope", obs: "Space, L2 point", spec: "Mainly infrared", dim: "6.5 m segmented mirror", inv: "NASA / ESA / CSA" } },
    title_it: "James Webb Space Telescope (JWST)", title_en: "James Webb Space Telescope (JWST)",
    desc_it: "Guarda l’universo primordiale, galassie antiche, formazione stellare, atmosfere di esopianeti. È il grande telescopio del 'guardare indietro nel tempo'.", desc_en: "It studies the early universe, ancient galaxies, star formation and exoplanet atmospheres. It is the great telescope of 'looking back in time'."
  },
  {
    id: "euclid", img: "img/14.EUCLID.webp", year: "2023", category: "spaziali",
    meta: { it: { type: "Telescopio da survey", obs: "Spazio, L2", spec: "Visibile e vicino infrarosso", dim: "Telescopio da 1,2 m", inv: "ESA e partner int." }, en: { type: "Space telescope for surveys", obs: "Space, L2", spec: "Visible and near-infrared", dim: "1.2 m telescope", inv: "ESA and int. contributors" } },
    title_it: "Euclid", title_en: "Euclid",
    desc_it: "Costruisce una mappa 3D dell’universo su scala enorme per studiare energia oscura e materia oscura.", desc_en: "It builds a huge 3D map of the universe to study dark energy and dark matter."
  },
    {
    id: "rubin", img: "img/16.VERA.webp", year: "2025", category: "ottici",
    meta: { it: { type: "Survey telescope", obs: "Terra (Cile)", spec: "Ottico", dim: "8,4 m con grande fotocamera digitale", inv: "NSF / DOE, USA" }, en: { type: "Survey telescope", obs: "Earth (Chile)", spec: "Optical", dim: "8.4 m telescope with huge digital camera", inv: "NSF / DOE, USA" } },
    title_it: "Vera C. Rubin Observatory", title_en: "Vera C. Rubin Observatory",
    desc_it: "Fotografa ripetutamente il cielo per costruire un gigantesco film nel tempo: asteroidi, supernove, transitori, struttura della Via Lattea, materia oscura.", desc_en: "It photographs the southern sky repeatedly to build a gigantic movie of the sky over time: asteroids, supernovae, transients, the structure of the Milky Way and dark matter."
  },
  {
    id: "roman", img: "img/15.ROMAN.webp", year: "2026", category: "spaziali",
    meta: { it: { type: "Telescopio spaziale", obs: "Spazio", spec: "Visibile e vicino infrarosso", dim: "Specchio da 2,4 m", inv: "NASA" }, en: { type: "Space telescope", obs: "Space", spec: "Visible and near-infrared", dim: "2.4 m mirror", inv: "NASA" } },
    title_it: "Nancy Grace Roman Space Telescope", title_en: "Nancy Grace Roman Space Telescope",
    desc_it: "Survey cosmologiche ad ampissimo campo, energia oscura, osservazione di esopianeti. Non sarà il “nuovo Hubble”, ma il telescopio che vedrà molto più cielo.", desc_en: "Very wide-field cosmological surveys, dark energy studies and exoplanet observations. It will not be the 'new Hubble', but the telescope that can see much more sky."
  },
  {
    id: "elt", img: "img/17.ELT.webp", year: "2027", category: "ottici",
    meta: { it: { type: "Riflettore gigante", obs: "Terra (Cile)", spec: "Visibile e infrarosso", dim: "Specchio principale da 39 m", inv: "ESO, Europa" }, en: { type: "Giant reflector", obs: "Earth (Chile)", spec: "Visible and infrared", dim: "39 m main mirror", inv: "ESO, Europe" } },
    title_it: "ELT – Extremely Large Telescope", title_en: "ELT - Extremely Large Telescope",
    desc_it: "Esopianeti, prime galassie, buchi neri, cosmologia e fisica fondamentale. È il grande salto della prossima generazione.", desc_en: "Exoplanets, the first galaxies, black holes, cosmology and fundamental physics. It is the great leap of the next generation."
  },
  {
    id: "gmt", img: "img/18.GMT.webp", year: "2028", category: "ottici",
    meta: { it: { type: "Riflettore gigante segment.", obs: "Terra (Cile)", spec: "Visibile e infrarosso", dim: "7 specchi da 8,4 m", inv: "Consorzio int. (USA)" }, en: { type: "Giant segmented refl.", obs: "Earth (Chile)", spec: "Visible and infrared", dim: "7 mirrors of 8.4 m", inv: "International consortium (USA)" } },
    title_it: "Giant Magellan Telescope (GMT)", title_en: "Giant Magellan Telescope (GMT)",
    desc_it: "Alta risoluzione per esopianeti, galassie, stelle, cosmologia. È uno dei tre grandi giganti ottici del futuro.", desc_en: "High-resolution observations of exoplanets, galaxies, stars and cosmology. It is one of the three giant optical telescopes of the future."
  },
  {
    id: "tmt", img: "img/19.TMT.webp", year: "2029", category: "ottici",
    meta: { it: { type: "Riflettore gigante segment.", obs: "Terra (Maunakea)", spec: "Visibile e infrarosso", dim: "30 m", inv: "Consorzio internazionale" }, en: { type: "Giant segmented refl.", obs: "Earth (Maunakea)", spec: "Visible and infrared", dim: "30 m", inv: "International consortium" } },
    title_it: "Thirty Meter Telescope (TMT)", title_en: "Thirty Meter Telescope (TMT)",
    desc_it: "Osservazioni ad altissima risoluzione di esopianeti, galassie, buchi neri, prime strutture cosmiche.", desc_en: "Very high-resolution observations of exoplanets, galaxies, black holes and the first cosmic structures."
  },
  {
    id: "ska", img: "img/20.SKA.webp", year: "2030", category: "radio",
    meta: { it: { type: "Radiotelescopio a rete", obs: "Terra", spec: "Radio", dim: "Migliaia di antenne e parabole", inv: "SKAO, consorzio int." }, en: { type: "Network radio telescope", obs: "Earth", spec: "Radio", dim: "Thousands of antennas and dishes", inv: "SKAO, international consortium" } },
    title_it: "SKA – Square Kilometre Array", title_en: "SKA - Square Kilometre Array",
    desc_it: "Universo radio profondo, galassie, magnetismo cosmico, pulsar, test di gravità, cosmologia. Non è un 'piatto unico', ma una rete distribuita.", desc_en: "The deep radio universe, galaxies, cosmic magnetism, pulsars, tests of gravity and cosmology. It is not a 'single dish', but a distributed network."
  },
  {
    id: "einstein", img: "img/21.EINSTEIN.webp", year: "2035", category: "gravitazionali",
    meta: { it: { type: "Interferometro sotterr.", obs: "Sottoterra (Europa)", spec: "Onde gravitazionali", dim: "Bracci sotterranei", inv: "Progetto Europeo in sviluppo" }, en: { type: "Underground interferom.", obs: "Underground (Europe)", spec: "Gravitational waves", dim: "Underground arms", inv: "European project in development" } },
    title_it: "Einstein Telescope", title_en: "Einstein Telescope",
    desc_it: "Ascoltare fusioni di buchi neri e stelle di neutroni molto più lontane. Non è un telescopio ottico classico, rileva le oscillazioni dello spaziotempo.", desc_en: "Detect mergers of black holes and neutron stars that are much farther away. Note: it is not a classical optical telescope.",
    extra_it: "Oltre il telescopio: quando l'universo non si guarda, ma si ascolta.", extra_en: "Beyond the telescope: when the universe is not seen, but listened to."
  }
];

const timeline = document.getElementById('timeline');
const menuList = document.getElementById('telescope-list');

function initPage() {
  telescopesData.forEach(t => {
    // 1. Griglia Principale con il taglio sci-fi e la disposizione Card (sx) -> Anno (dx)
    const row = document.createElement('section');
    row.className = 'timeline-row';
    row.setAttribute('data-category', t.category);
    row.style.setProperty('--cat-color', `var(--cat-${t.category})`);
    
    row.innerHTML = `
      <div class="timeline-card-col">
        <div class="card-wrapper" onclick="openDetail('${t.id}')">
          <div class="telescope-card">
            <div class="image-container"><img src="${t.img}" alt="${t.title_it}" loading="lazy"></div>
            <div class="card-info"><h3 class="text-it">${t.title_it}</h3></div>
          </div>
        </div>
      </div>
      <div class="timeline-year-col">
        <span class="vertical-year">${t.year}</span>
      </div>
    `;
    timeline.appendChild(row);

    // 2. Menu a Tutto Schermo
    const li = document.createElement('li');
    li.className = 'menu-list-item';
    li.style.setProperty('--cat-color', `var(--cat-${t.category})`);
    li.onclick = () => { closeMenuList(); setTimeout(() => openDetail(t.id), 400); };
    li.innerHTML = `<span class="text-it">${t.title_it}</span><span class="year">${t.year}</span>`;
    menuList.appendChild(li);
  });
}

// --- LOGICA FILTRI LATERALI ---
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.timeline-row').forEach(row => {
      if (filter === 'all' || row.getAttribute('data-category') === filter) {
        row.classList.remove('hidden');
        setTimeout(() => row.classList.remove('fade-out'), 10);
      } else {
        row.classList.add('fade-out');
        setTimeout(() => { if (row.classList.contains('fade-out')) row.classList.add('hidden'); }, 500);
      }
    });
  });
});

// --- CONTROLLO MENU SLIDE UP ---
function openMenuList() {
  document.getElementById('menu-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenuList(event) {
  if (event) event.stopPropagation();
  document.getElementById('menu-overlay').classList.remove('open');
  document.body.style.overflow = 'auto';
}

// --- MODALE SCHEDA DETTAGLIO ---
function openDetail(id) {
  const t = telescopesData.find(item => item.id === id);
  if (!t) return;
  const overlay = document.getElementById('detail-overlay');
  
  overlay.style.setProperty('--bar-color', `var(--cat-${t.category})`);
  document.getElementById('modal-img').src = t.img;
  
  // Assegna l'anno nel badge
  document.getElementById('modal-year').textContent = t.year;

  // Dati impaginati verticalmente garantendo le classi tipografiche (text-it e text-en)
  document.getElementById('modal-meta').innerHTML = `
    <div class="meta-row"><span class="meta-title">TIPO / TYPE</span><span class="meta-value"><span class="text-it">${t.meta.it.type}</span> <br> <span class="text-en">${t.meta.en.type}</span></span></div>
    <div class="meta-row"><span class="meta-title">OSSERVAZIONE / OBSERVATION</span><span class="meta-value"><span class="text-it">${t.meta.it.obs}</span> <br> <span class="text-en">${t.meta.en.obs}</span></span></div>
    <div class="meta-row"><span class="meta-title">SPETTRO / SPECTRUM</span><span class="meta-value"><span class="text-it">${t.meta.it.spec}</span> <br> <span class="text-en">${t.meta.en.spec}</span></span></div>
    <div class="meta-row"><span class="meta-title">DIMENSIONI / SIZE</span><span class="meta-value"><span class="text-it">${t.meta.it.dim}</span> <br> <span class="text-en">${t.meta.en.dim}</span></span></div>
    <div class="meta-row"><span class="meta-title">INVENTORE / INVENTOR</span><span class="meta-value"><span class="text-it">${t.meta.it.inv}</span> <br> <span class="text-en">${t.meta.en.inv}</span></span></div>
  `;

  document.getElementById('modal-title-it').textContent = t.title_it;
  document.getElementById('modal-desc-it').textContent = t.desc_it;
  const extraIt = document.getElementById('modal-extra-it');
  if(t.extra_it) { extraIt.innerHTML = `<span class="text-it">${t.extra_it}</span>`; extraIt.style.display = 'block'; } else { extraIt.style.display = 'none'; }

  document.getElementById('modal-title-en').textContent = t.title_en;
  document.getElementById('modal-desc-en').textContent = t.desc_en;
  const extraEn = document.getElementById('modal-extra-en');
  if(t.extra_en) { extraEn.innerHTML = `<span class="text-en">${t.extra_en}</span>`; extraEn.style.display = 'block'; } else { extraEn.style.display = 'none'; }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.style.overflow = 'auto';
}

// --- PARALLASSE ACCENTUATO SULLO SCROLL ---
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  // Essendo in "absolute", muovendoli in basso simuliamo la lontananza e lentezza
  document.getElementById('star-layer-1').style.transform = `translateY(${scrolled * 0.8}px)`; // Più lente (lontane)
  document.getElementById('star-layer-2').style.transform = `translateY(${scrolled * 0.5}px)`; // Medie
  document.getElementById('star-layer-3').style.transform = `translateY(${scrolled * 0.2}px)`; // Più veloci (vicine)
});


window.onload = initPage;