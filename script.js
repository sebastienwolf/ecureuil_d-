const plateau = document.getElementById("jeu");

// 1 :20
// 1 : 12
// 2/8
// 3/6
// 2/4
// 2 vide
// 1 plein
const arrayNoix = [20, 12, 8, 8, 6, 6, 6, 4, 4, "vide", "vide", "noix"];

document.getElementById("reset").addEventListener("click", (event) => {
  event.preventDefault();
  let copy = Object.values(arrayNoix);

  for (let index = 0; index < arrayNoix.length; index++) {
    let key = Math.floor(Math.random() * copy.length);
    let dee = document.createElement("article");
    let description = document.createElement("h2");
    description.innerText = "Dé " + copy[key];

    let lancerDeDee = document.createElement("button");
    lancerDeDee.value = copy[key];
    lancerDeDee.innerText = "Lancer";
    lancerDeDee.className = "throw";

    dee.appendChild(description);
    dee.appendChild(lancerDeDee);
    plateau.appendChild(dee);

    let noix = document.createElement("img");
    noix.src = "./image/noix.png";
    noix.alt = "veuillez recharger la page";
    plateau.appendChild(noix);
    copy.splice(key, 1);
  }
});

const buttonDé = document.getElementsByClassName("throw");

for (let buttonChoice of buttonDé) {
  buttonChoice.addEventListener("click", (e) => {
    e.preventDefault();
    debugger;
    let a = 1;
  });
}
