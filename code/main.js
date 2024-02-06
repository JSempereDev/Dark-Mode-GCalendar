const site = window.location.hostname

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

if (site.includes("calendar.google.com")) {
  Add_Custom_Style(`
    :root {
      --surface: #000000 !important;
    }
  `)
}