const plateau = document.getElementById("jeu");

// 1 :20
// 1 : 12
// 2/8
// 3/6
// 2/4
// 2 vide
// 1 plein
const arrayNoix = [20, 12, 8, 8, 6, 6, 6, 4, 4, "vide", "vide", "noix"];

// document.getElementById("reset").addEventListener("click", (event) => {
//   event.preventDefault();
let copy = Object.values(arrayNoix);

for (let index = 0; index < arrayNoix.length; index++) {
  let key = Math.floor(Math.random() * copy.length);
  let dee = document.createElement("article");
  dee.id = "select" + index;

  let description = document.createElement("h2");
  description.innerText = "Dé " + copy[key];
  dee.appendChild(description);

  if (copy[key] !== "vide" && copy[key] !== "noix") {
    let lancerDeDee = document.createElement("button");
    lancerDeDee.value = copy[key];
    lancerDeDee.innerText = "Lancer";
    lancerDeDee.className = "throw";
    lancerDeDee.dataset.id = copy[key];
    lancerDeDee.dataset.select = index;
    dee.appendChild(lancerDeDee);
  }

  plateau.appendChild(dee);

  let noix = document.createElement("img");
  noix.src = "./image/noix.png";
  noix.alt = "veuillez recharger la page";
  plateau.appendChild(noix);
  copy.splice(key, 1);
}
let buttonDé = document.getElementsByClassName("throw");

//});

let buttonChoice;
for (buttonChoice of buttonDé) {
  buttonChoice.addEventListener("click", (e) => {
    let nombreDeFace = e.target.dataset.id;
    let position = e.target.dataset.select;

    if (nombreDeFace !== "") {
      debugger;
      let result = Math.floor(Math.random() * (nombreDeFace - 1)) + 1;
      let createResult = document.createElement("p");
      let addResult = document.getElementById("select" + position);

      createResult.innerText = "le résultat : " + result;
      addResult.appendChild(createResult);
    }
  });
}
