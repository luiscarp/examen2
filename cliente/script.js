var data
var dataselec

function Conex(){
    const api =" http://localhost:3000/"
    fetch(api, {
        method: "GET",
        headers: {"authorization":"A1C2E3"}
    }).then(response => response.json()).then(json => {
        data = json
        classSel = document.getElementById("classSelection")
        json.map((elem) => {
            opt = document.createElement("option")
            opt.innerHTML = elem["clase"]
            classSel.appendChild(opt)

        }

        )
        

    })



}



function updateWeapons() {
    var classSelection = document.getElementById("classSelection").value;
    var weaponSelection = document.getElementById("weaponSelection");
    var weaponLabel = document.getElementById("weaponLabel");
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = ""

    var weaponOptions = {

    };
    data.forEach( (dato) => {

        weaponOptions[dato["clase"]] = dato["Armas"]
    })
    
    weaponSelection.innerHTML = "";
    if (classSelection) {
        weaponLabel.style.display = "block";
        weaponSelection.disabled = false;
        weaponOptions[classSelection].forEach(function(item) {
            var option = document.createElement("option");
            option.value = item;
            option.text = item;
            weaponSelection.add(option);
        });
    } else {
        weaponLabel.style.display = "none";
        weaponSelection.disabled = true;
    }
}

function showSelections() {
    var classSelection = document.getElementById("classSelection").value;
    var weaponSelection = document.getElementById("weaponSelection").value;
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = ""
    var resultS = document.createElement("p")
    var resultA = document.createElement("p")
    var resultH = document.createElement("p")


    resultS.innerHTML = "Tu seleccion es: " + classSelection

   

    resultA.innerHTML ="Tu arma seleccionada es: " + weaponSelection

    

 

    resultDiv.appendChild(resultS)

    resultDiv.appendChild(resultA)
    data.forEach((elem) => {
        if (classSelection == elem["clase"]){
            resultH.innerHTML ="Tus habilidades son..." 
            + "<br/>"

            + "fuerza: "
            + elem["atributos"]["fuerza"]
            + "<br/>"
            + "destreza: "
            + elem["atributos"]["destreza"]
            + "<br/>"
            + "inteligencia: "
            + elem["atributos"]["inteligenia"]
            + "<br/>"
            + "carisma: "
            + elem["atributos"]["carisma"]
            + "<br/>"
            + "suerte: "
            + elem["atributos"]["suerte"]


            resultDiv.appendChild(resultH)

        }
    })


    
}