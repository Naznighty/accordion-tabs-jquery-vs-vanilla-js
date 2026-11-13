// Shows the size and line count of each implementation (needs http(s); fetch is blocked on file://)
[["jq", "js/jquery-version.js"], ["js", "js/vanilla-version.js"]].forEach(([k, file]) => {
  fetch(file)
    .then(r => r.text())
    .then(src => {
      const t = src.trim();
      document.getElementById(k + "-pre").textContent = t;
      document.getElementById(k + "-b").textContent = new TextEncoder().encode(t).length.toLocaleString("fa-IR") + " بایت";
      document.getElementById(k + "-l").textContent = t.split("\n").length.toLocaleString("fa-IR");
    })
    .catch(() => {});
});
