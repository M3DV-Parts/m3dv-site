// /settings.js
(function () {
  const qs = new URLSearchParams(window.location.search);

  // ---- lingua
  const lang = (qs.get("lang") || localStorage.getItem("lang") || "it").toLowerCase();
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);

  // ---- tema (light/dark)
  const theme = (qs.get("theme") || localStorage.getItem("theme") || "light").toLowerCase();
  document.documentElement.dataset.theme = theme; // usa [data-theme="dark"] nei CSS
  localStorage.setItem("theme", theme);

  // ---- pagina da aprire (home / wallart / personalizza / riproduci / inventiamo)
  const page = qs.get("p");
  if (page) {
    const map = {
      home: "/",
      wallart: "/pages/wallart.html",
      personalizza: "/pages/personalizza.html",
      riproduci: "/pages/riproduci.html",
      inventiamo: "/pages/inventiamo.html",
    };
    if (map[page]) {
      // rimuove i parametri dalla barra e va alla pagina
      const url = map[page];
      window.location.replace(url);
    }
  }
})();
