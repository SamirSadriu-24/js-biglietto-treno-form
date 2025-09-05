const bodySite = document.querySelector(`body`);
bodySite.style.backgroundColor = "#A0C3E3";


const cardContainer = document.getElementById(`title_container`);
const cardContainerStyle = document.querySelector(`#title_container`);
cardContainerStyle.style.display = "flex";
cardContainerStyle.style.alignItems = "center";
cardContainerStyle.style.justifyContent = "center";
cardContainerStyle.style.marginTop = "40vh";
cardContainerStyle.style.color = "#0C3C8C";

const appContainer = document.getElementById(`app_container`);
const appContainerStyle = document.querySelector(`#app_container`);
appContainerStyle.style.display = "flex";
appContainerStyle.style.flexDirection = "row";
appContainerStyle.style.gap = "10px";
appContainerStyle.style.justifyContent = "center";
appContainerStyle.style.alignItems = "center";
appContainerStyle.style.height = "10vh"
appContainerStyle.style.color = "white"


//creiamo il titolo del nostro sito.
const Title = document.createElement("h1")
Title.innerText= "Benvenuto su SamOnTrain, inserisci i tuoi dati per poter accedere al biglietto: ";
cardContainer.appendChild(Title);
//creiamo i vari input all'interno del sito. con i vari nomi:

// nome
const nameText = document.createElement("p");
nameText.innerText = "Nome";
nameText.setAttribute("id", "name_text")
appContainer.appendChild(nameText);

const nameTextStyle = document.querySelector(`#name_text`);
nameText.style.fontSize = "25px";

const nameInput= document.createElement("input");
nameInput.setAttribute("id", "name_input")
appContainer.appendChild(nameInput);

const nameInputStyle = document.querySelector(`#name_input`);
nameInput.style.height = "40px";
nameInputStyle.style.fontSize = "20px"
nameInputStyle.style.textAlign= "center"
// cognome
const surnameText = document.createElement("p");
surnameText.innerText = "Cognome";
surnameText.setAttribute("id", "surname_text")
appContainer.appendChild(surnameText);

const surnameTextStyle = document.querySelector(`#surname_text`);
surnameText.style.fontSize = "25px";

const surnameInput= document.createElement("input");
surnameInput.setAttribute("id", "surname_input");
appContainer.appendChild(surnameInput);

const surnameInputStyle = document.querySelector(`#surname_input`);
surnameInputStyle.style.height = "40px";
surnameInputStyle.style.fontSize = "20px"
surnameInputStyle.style.textAlign= "center"

// età
const ageText = document.createElement("p");
ageText.innerText = "Età";
ageText.setAttribute("id", "age_text");
appContainer.appendChild(ageText);

const ageTextStyle = document.querySelector(`#age_text`);
ageText.style.fontSize = "25px";

const ageInput= document.createElement("input");
ageInput.setAttribute("id", "age_input")
appContainer.appendChild(ageInput);

const ageInputStyle = document.querySelector(`#age_input`);
ageInputStyle.style.height = "40px";
ageInputStyle.style.fontSize = "20px"
ageInputStyle.style.textAlign= "center"

//creiamo il bottone per inviare i file
const NewButton = document.createElement("button");
NewButton.setAttribute("id","bottone_invio");
NewButton.innerText = "Ricevi il tuo biglietto";
appContainer.appendChild(NewButton);

const NewButtonStyle = document.querySelector(`#bottone_invio`);
NewButtonStyle.style.backgroundColor = "#2EB68B";
NewButtonStyle.style.color = "white";
NewButtonStyle.style.fontSize = "20px";
NewButtonStyle.style.padding = "10px";

NewButton.addEventListener("click", () =>{
    const name = nameInput.value;
    console.log(name);
    const surname = surnameInput.value;
    console.log(surname);
    const age = ageInput.value;
    console.log(age);

    function ageVerificator(name, surname, age){
        kmForHour
    }
})



