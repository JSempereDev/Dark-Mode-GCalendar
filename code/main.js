const site = window.location.hostname;

function spam() {
  document.querySelector(".erDb5d").innerHTML = '<a class="PTIB6e" target="_blank" href="https://github.com/JSempereDev" tabindex="-1">GitHub</a> – <a class="PTIB6e" target="_blank" href="https://www.linkedin.com/in/jose-sempere/" tabindex="-1">JSempereDev</a></div>'
}

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

if (site.includes("calendar.google.com")) {
  // Background
  Add_Custom_Style(`
    :root {
      --surface: #282828 !important;
      --on-surface: #fff !important;
      --on-surface-variant: #fff !important;
      --dimmed: #a8a8a8 !important;
      --fab: #121212 !important;
      --textfield-surface: #3f3f3f !important;
    }
  `);

  // Create --fab
  Add_Custom_Style(`.b0mxw {color: #717171 !important}`);
  Add_Custom_Style(`.mr0WL {color: #717171 !important}`);

  // Header
  Add_Custom_Style(`
    .gb_Oa.gb_fb.gb_Td.gb_md.gb_Zc.NkK3Fc {
      background-color: #21242a !important;
    }
    .NkK3Fc span[role=heading] {
      color: #fcfcfc !important;
    }
  `);

  // SVGs
  Add_Custom_Style(`.NMm5M {color: #fcfcfc !important;}`);
  Add_Custom_Style(`.d29e1c {color: #fcfcfc !important;}`);
  Add_Custom_Style(`.pdqVLc .meh4fc {color: #fcfcfc !important;}`)
  Add_Custom_Style(`[jsname="KzBUhd"] {color: #fcfcfc !important}`);
  Add_Custom_Style(`[jsname="OCpkoe"] {color: #fcfcfc !important}`);
  Add_Custom_Style(`[jsname="VfNHU"] {color: #fcfcfc !important}`);
  Add_Custom_Style(`.j9Fkxf {color: #fcfcfc !important}`);
  Add_Custom_Style(`.gb_Oa svg {color: #fcfcfc !important}`);
  Add_Custom_Style(`.jZasib {color: #fcfcfc !important}`);
  Add_Custom_Style(`.qmMNRc {color: #fcfcfc !important}`);
  
  
  // Buscar a gente
  Add_Custom_Style(`[jsname="vhZMvf"] {background-color: #3f3f3f !important}`);
  Add_Custom_Style(`[jsname="YPqjbf"] {color: #fcfcfc !important}`);

  // (Día / Semana / Mes) Desplegable
  Add_Custom_Style(`
    .VfPpkd-vQzf8d {
      color: #fcfcfc !important;
    }
  `);

  // Past text
  Add_Custom_Style(`.Jmftzc.EiZ8Dd.UflSff, .Jmftzc.YkxAAf.UflSff {color: #000 !important}`);

  // Adding task
  Add_Custom_Style(`
    .hqBSCb:not(.VfPpkd-O1htCb-OWXEXe-OWB6Me) .VfPpkd-TkwUic {
      background-color: #3f3f3f !important;
    }
    
    .VfPpkd-uusGie-fmcmS {
      color: #fcfcfc !important;
    }
    
    .VfPpkd-V67aGc {
      color: #fcfcfc !important;
    }
    
    .INBYpd {
      background-color: #3f3f3f !important;
    }

    .ncFHed {
      background-color: #3f3f3f !important;
    }

    .ncFHed .MocG8c.KKjvXb {
      background-color: #121212 !important;
    }
  `)


  spam();
}


