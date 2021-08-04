const searchInput = document.getElementById("searchInput");
const serachBtn = document.getElementById("serach-btn");
const autoCompArea = document.getElementById("auto-comp-div");
const resutlsList = document.getElementById("suggestions-result");

let demo = [
  "Aberdeen",
  "Abilene",
  "Akron",
  "Albany",
  "Albuquerque",
  "Alexandria",
  "Allentown",
  "Amarillo",
  "Anaheim",
  "Anchorage",
  "Ann Arbor",
  "Antioch",
  "Apple Valley",
  "Appleton",
  "Arlington",
  "Arvada",
  "Asheville",
  "Athens",
  "Atlanta",
  "Atlantic City",
  "Augusta",
  "Aurora",
  "Austin",
  "Bakersfield",
  "Baltimore",
  "Barnstable",
  "Baton Rouge",
  "Beaumont",
  "Bel Air",
  "Bellevue",
  "Berkeley",
  "Bethlehem",
  "Billings",
  "Birmingham",
  "Bloomington",
  "Boise",
  "Boise City",
  "Bonita Springs",
  "Boston",
  "Boulder",
  "Bradenton",
  "Bremerton",
  "Bridgeport",
  "Brighton",
  "Brownsville",
  "Bryan",
  "Buffalo",
  "Burbank",
  "Burlington",
  "Cambridge",
  "Canton",
  "Cape Coral",
  "Carrollton",
  "Cary",
  "Cathedral City",
  "Cedar Rapids",
  "Champaign",
  "Chandler",
];

searchInput.onkeyup = () => {
  let demo1 = [];

  let searchValue = searchInput.value;
  console.log("searchValue", searchValue);
  if (searchValue) {
    autoCompArea.classList.remove("hidden");
    /******************************************************/
    for (let i = 0; i < demo.length; i++) {
        console.log("demo[i]", demo[i]);
        console.log("demo[i].startsWith(searchValue)", demo[i].startsWith(searchValue));
        if (demo[i].startsWith(searchValue) && demo1.length <= 5) {
          demo1.push(demo[i]);
        }}
    /******************************************************/

        for (let x = 0; x < demo1.length; x++) {
            let li = document.createElement("li");
             li.classList.add("auto-comp-res1");
            li.textContent = demo1[x];
            resutlsList.appendChild(li);
          }

      } else {
    autoCompArea.classList.add("hidden");
  }
};





/*

function limitSuggestions() {
  for (let i = 0; i < demo.length; i++) {
    if (demo[i].startsWith(searchValue) && demo1.length <= 5) {
      demo1.push(demo[i]);
    }
  }
}

function showSuggestions() {
  let demo1 = [];
  for (let i = 0; i < demo1.length; i++) {
    let li = document.createElement("li");
    li.classList.add("line_option");
    li.textContent = demo1[i];
    menuLines.appendChild(li);
  }
}

function deleteSuggestions() {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
*/