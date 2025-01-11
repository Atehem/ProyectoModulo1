fetch('menu.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        console.log(xmlDoc);
});
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const lang = localStorage.getItem('lang') || 'es';

    // Configurar el idioma inicial en el selector
    languageSwitcher.value = lang;

    // Cargar las traducciones al cargar la página
    fetch('json/translations.json')
        .then(response => response.json())
        .then(translations => {
            updateContent(translations[lang]);
        });

    // Cambiar idioma al seleccionar otro
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('lang', selectedLang);

        fetch('json/translations.json')
            .then(response => response.json())
            .then(translations => {
                updateContent(translations[selectedLang]);
            });
    });

    // Función para actualizar el contenido dinámico
    function updateContent(translations) {
        document.getElementById('title').textContent = translations.title;
        document.getElementById('start').textContent = translations.start;
        document.getElementById('event').textContent = translations.event;
        document.getElementById('location').textContent = translations.location;
        document.getElementById('contacts').textContent = translations.contacts;
        document.getElementById('mensajeinicial').textContent = translations.mensajeinicial;
        document.getElementById('mensj').textContent = translations.mensj;
        document.getElementById('mensajeinicial1').textContent = translations.mensajeinicial1;
        document.getElementById('mensj1').textContent = translations.mensj1;
        document.getElementById('a1').textContent = translations.a1;
        document.getElementById('a2').textContent = translations.a2;
        document.getElementById('a3').textContent = translations.a3;
        document.getElementById('a4').textContent = translations.a4;
        document.getElementById('a5').textContent = translations.a5;
        document.getElementById('a6').textContent = translations.a6;
        document.getElementById('b1').textContent = translations.b1;
        document.getElementById('b2').textContent = translations.b2;
        document.getElementById('b3').textContent = translations.b3;
        document.getElementById('b4').textContent = translations.b4;
        document.getElementById('b5').textContent = translations.b5;
        document.getElementById('b6').textContent = translations.b6;
        document.getElementById('c').textContent = translations.c;
        document.getElementById('c0').textContent = translations.c0;
        document.getElementById('c1').textContent = translations.c1;
        document.getElementById('c2').textContent = translations.c2;
        document.getElementById('c3').textContent = translations.c3;
        document.getElementById('c4').textContent = translations.c4;
        document.getElementById('c5').textContent = translations.c5;
        document.getElementById('c6').textContent = translations.c6;
        document.getElementById('c7').textContent = translations.c7;
        document.getElementById('d').textContent = translations.d;
        document.getElementById('d0').textContent = translations.d0;
        document.getElementById('d1').textContent = translations.d1;
        document.getElementById('d2').textContent = translations.d2;
        document.getElementById('d3').textContent = translations.d3;
        document.getElementById('d4').textContent = translations.d4;
        document.getElementById('d5').textContent = translations.d5;
        document.getElementById('d6').textContent = translations.d6;
        document.getElementById('d7').textContent = translations.d7;
        document.getElementById('d8').textContent = translations.d8;
        document.getElementById('e').textContent = translations.e;
        document.getElementById('e0').textContent = translations.e0;
        document.getElementById('e1').textContent = translations.e1;
        document.getElementById('e2').textContent = translations.e2;
        document.getElementById('e3').textContent = translations.e3;
        document.getElementById('e4').textContent = translations.e4;
        document.getElementById('f').textContent = translations.f;
        document.getElementById('f0').textContent = translations.f0;
        document.getElementById('f1').textContent = translations.f1;
        document.getElementById('f2').textContent = translations.f2;
        document.getElementById('f3').textContent = translations.f3;
        document.getElementById('f4').textContent = translations.f4;
        document.getElementById('f5').textContent = translations.f5;
        document.getElementById('f6').textContent = translations.f6;
        document.getElementById('f7').textContent = translations.f7;
        document.getElementById('f8').textContent = translations.f8;
        document.getElementById('f9').textContent = translations.f9;
        document.getElementById('f10').textContent = translations.f10;
        document.getElementById('f11').textContent = translations.f11;
        document.getElementById('f12').textContent = translations.f12;
        document.getElementById('f13').textContent = translations.f13;
        document.getElementById('g').textContent = translations.g;
        document.getElementById('g1').textContent = translations.g1;
        document.getElementById('g2').textContent = translations.g2;
        document.getElementById('g3').textContent = translations.g3;
        document.getElementById('g4').textContent = translations.g4;
        document.getElementById('g5').textContent = translations.g5;
        document.getElementById('g6').textContent = translations.g6;
        document.getElementById('g7').textContent = translations.g7;
        document.getElementById('g8').textContent = translations.g8;
        document.getElementById('g9').textContent = translations.g9;
        document.getElementById('g10').textContent = translations.g10;
        document.getElementById('g11').textContent = translations.g11;
        document.getElementById('g12').textContent = translations.g12;
        document.getElementById('g13').textContent = translations.g13;
        document.getElementById('g14').textContent = translations.g14;
        document.getElementById('g15').textContent = translations.g15;
    }
});