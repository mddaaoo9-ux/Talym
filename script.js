const shortcuts = {
  word: [
    { name: "نسخ", keys: "Ctrl + C" },
    { name: "قص", keys: "Ctrl + X" },
    { name: "لصق", keys: "Ctrl + V" },
    { name: "تراجع", keys: "Ctrl + Z" },
    { name: "حفظ", keys: "Ctrl + S" }
  ],
  excel: [
    { name: "نسخ", keys: "Ctrl + C" },
    { name: "لصق", keys: "Ctrl + V" },
    { name: "جمع تلقائي", keys: "Alt + =" },
    { name: "فتح ملف جديد", keys: "Ctrl + N" },
    { name: "تنسيق الخلايا", keys: "Ctrl + 1" }
  ]
};
const params = new URLSearchParams(window.location.search);
const type = params.get("type") || "word";
const listContainer = document.getElementById("shortcuts-list");
const searchInput = document.getElementById("search");
if (listContainer) {
  displayShortcuts(shortcuts[type]);
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = shortcuts[type].filter(
      s => s.name.toLowerCase().includes(value) || s.keys.toLowerCase().includes(value)
    );
    displayShortcuts(filtered);
  });
}
function displayShortcuts(list) {
  listContainer.innerHTML = list.map(
    s => `<div class="shortcut"><h3>${s.name}</h3><p>${s.keys}</p></div>`
  ).join("");
}