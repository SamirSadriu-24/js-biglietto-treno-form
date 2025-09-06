const bodySite = document.querySelector(`body`);
bodySite.style.backgroundColor = "#A0C3E3";


const cardContainer = document.getElementById(`title_container`);
const cardContainerStyle = document.querySelector(`#title_container`);
cardContainerStyle.style.display = "flex";
cardContainerStyle.style.alignItems = "center";
cardContainerStyle.style.justifyContent = "center";
cardContainerStyle.style.marginTop = "10vh";
cardContainerStyle.style.color = "#0C3C8C";

const appContainer = document.getElementById(`app_container`);
const appContainerStyle = document.querySelector(`#app_container`);
appContainerStyle.style.display = "flex";
appContainerStyle.style.flexDirection = "column";
appContainerStyle.style.justifyContent = "center";
appContainerStyle.style.alignItems = "center";
appContainerStyle.style.minHeight = "10vh"
appContainerStyle.style.color = "white"

const nomeCognomeContainer = document.getElementById(`nome_cognome_container`);
const nomeCognomeContainerStyle = document.querySelector(`#nome_cognome_container`);
nomeCognomeContainerStyle.style.display = "flex";
nomeCognomeContainerStyle.style.justifyContent = "center";
nomeCognomeContainerStyle.style.alignItems = "center";
nomeCognomeContainerStyle.style.gap = "10px";


const chiolemtriEtaContainer = document.getElementById(`chilometri_eta_container`);
const chilometriEtaStyle = document.querySelector(`#chilometri_eta_container`);
chilometriEtaStyle.style.display = "flex";
chilometriEtaStyle.style.justifyContent = "center";
chilometriEtaStyle.style.alignItems = "center";
chilometriEtaStyle.style.gap = "10px";

const buttonContainer = document.getElementById(`button_container`);


//creiamo il titolo del nostro sito.
const Title = document.createElement("h1")
Title.innerText = "Benvenuto su SamOnTrain, inserisci i tuoi dati per poter accedere al biglietto: ";
cardContainer.appendChild(Title);
//creiamo i vari input all'interno del sito. con i vari nomi:

// nome
const nameText = document.createElement("p");
nameText.innerText = "Nome";
nameText.setAttribute("id", "name_text")
nomeCognomeContainer.appendChild(nameText);

const nameTextStyle = document.querySelector(`#name_text`);
nameText.style.fontSize = "25px";

const nameInput = document.createElement("input");
nameInput.setAttribute("id", "name_input")
nomeCognomeContainer.appendChild(nameInput);

const nameInputStyle = document.querySelector(`#name_input`);
nameInput.style.height = "40px";
nameInputStyle.style.fontSize = "20px"
nameInputStyle.style.textAlign = "center"

// cognome
const surnameText = document.createElement("p");
surnameText.innerText = "Cognome";
surnameText.setAttribute("id", "surname_text")
nomeCognomeContainer.appendChild(surnameText);

const surnameTextStyle = document.querySelector(`#surname_text`);
surnameText.style.fontSize = "25px";

const surnameInput = document.createElement("input");
surnameInput.setAttribute("id", "surname_input");
nomeCognomeContainer.appendChild(surnameInput);

const surnameInputStyle = document.querySelector(`#surname_input`);
surnameInputStyle.style.height = "40px";
surnameInputStyle.style.fontSize = "20px"
surnameInputStyle.style.textAlign = "center"


//km

const kmText = document.createElement("p");
kmText.innerText = "Chilometri";
kmText.setAttribute("id", "km_text")
chiolemtriEtaContainer.appendChild(kmText);

const kmTextStyle = document.querySelector(`#km_text`);
kmTextStyle.style.fontSize = "25px";

const kmInput = document.createElement("input");
kmInput.setAttribute("id", "km_input");
chiolemtriEtaContainer.appendChild(kmInput);

const kmInputStyle = document.querySelector(`#km_input`);
kmInputStyle.style.height = "40px";
kmInputStyle.style.fontSize = "20px"
kmInputStyle.style.textAlign = "center"


// età
const ageText = document.createElement("p");
ageText.innerText = "Età";
ageText.setAttribute("id", "age_text");
chiolemtriEtaContainer.appendChild(ageText);

const ageTextStyle = document.querySelector(`#age_text`);
ageText.style.fontSize = "25px";

const ageInput = document.createElement("input");
ageInput.setAttribute("id", "age_input")
chiolemtriEtaContainer.appendChild(ageInput);

const ageInputStyle = document.querySelector(`#age_input`);
ageInputStyle.style.height = "40px";
ageInputStyle.style.fontSize = "20px"
ageInputStyle.style.textAlign = "center"

//creiamo il bottone per inviare i file
const NewButton = document.createElement("button");
NewButton.setAttribute("id", "bottone_invio");
NewButton.innerText = "Ricevi il tuo biglietto";
buttonContainer.appendChild(NewButton);

const NewButtonStyle = document.querySelector(`#bottone_invio`);
NewButtonStyle.style.backgroundColor = "#2EB68B";
NewButtonStyle.style.color = "white";
NewButtonStyle.style.fontSize = "20px";
NewButtonStyle.style.padding = "10px";
NewButtonStyle.style.marginTop = "70px";


//creiamo il bottone per svuotare i campi

const clearButton = document.createElement("button");
clearButton.setAttribute("id", "bottone_cancella");
clearButton.innerText = "Svuota i Campi";
buttonContainer.appendChild(clearButton);

const clearButtonStyle = document.querySelector(`#bottone_cancella`);
clearButtonStyle.style.backgroundColor = "#2EB68B";
clearButtonStyle.style.color = "white";
clearButtonStyle.style.fontSize = "20px";
clearButtonStyle.style.padding = "10px";
clearButtonStyle.style.marginTop = "70px";


//facciamo in modo che il primo tasto generi il biglietto.

NewButton.addEventListener("click", () => {
    const name = nameInput.value;
    console.log(name);
    const surname = surnameInput.value;
    console.log(surname);
    const age = parseInt(ageInput.value);
    console.log(age);
    const km = parseInt(kmInput.value);
    console.log(km);

    function ageVerificator(age) {
        const priceForKm = 0.21;
        const normalPrice = km * priceForKm;
        const minorDiscount = normalPrice * 0.20;
        const minorPrice = normalPrice - minorDiscount;
        const oldDiscount = normalPrice * 0.40;
        const oldPrice = normalPrice - oldDiscount;

        if (age < 18) {
            return { price: parseFloat(minorPrice.toFixed(2)), offerta: "Sconto Young" };

        } else if (age >= 65) {

            return { price: parseFloat(oldPrice.toFixed(2)), offerta: "Sconto Senior" };

        } else {
            let price = (normalPrice.toFixed(2));
            return { price: parseFloat(normalPrice.toFixed(2)), offerta: "Tariffa normale" };
        }

    }

    const risultato = ageVerificator(age, km);

    const outsideTicketTitle = document.getElementById(`ticket_title_container`);

    const passenger = document.getElementById(`ticket_passenger`);
    const info = document.getElementById(`ticket_info`);


    const ticketContainerStyle = document.querySelector(`#ticket_container`);
    ticketContainerStyle.style.display = "flex";
    ticketContainerStyle.style.flexDirection = "column"
    ticketContainerStyle.style.justifyContent = "center";
    ticketContainerStyle.style.alignItems = "center";
    ticketContainerStyle.style.backgroundColor = "#2EB68B";
    ticketContainerStyle.style.color = "white";
    ticketContainerStyle.style.fontSize = "25px";
    ticketContainerStyle.style.marginTop = "30px";
    ticketContainerStyle.style.minWidth = "600px";


    const ticketTrainStyle = document.querySelector(`#ticket_train`); ticketTrainStyle.style.display = "flex";
    ticketTrainStyle.style.flexDirection = "column"
    ticketTrainStyle.style.justifyContent = "center";
    ticketTrainStyle.style.alignItems = "center";
    ticketTrainStyle.style.backgroundColor = "#166c51ff";
    ticketTrainStyle.style.color = "white";
    ticketTrainStyle.style.fontSize = "25px";
    ticketTrainStyle.style.padding = "30px";
    ticketTrainStyle.style.margin = "5px";

    const passengerStyle = document.querySelector(`#ticket_passenger`);
    passengerStyle.style.backgroundColor = "#7faadcff";
    passengerStyle.style.padding = "18px";
    passengerStyle.style.display = "flex";
    passengerStyle.style.justifyContent = "flex-start";
    passengerStyle.style.alignItems = "center";
    passengerStyle.style.gap = "5px";
    passengerStyle.style.minWidth = "430px";
    passengerStyle.style.fontSize = "15px";

    const infoStyle = document.querySelector(`#ticket_info`);
    infoStyle.style.backgroundColor = "#7faadcff";
    infoStyle.style.padding = "18px";
    infoStyle.style.display = "flex";
    infoStyle.style.justifyContent = "center";
    infoStyle.style.alignItems = "center";
    infoStyle.style.fontSize = "15px";
    infoStyle.style.gap = "5px";
    infoStyle.style.maxWidth = "430px";


    const ticketTitle = document.createElement("h5");
    ticketTitle.setAttribute("id", "titolo_biglietto");
    ticketTitle.innerText = "Questo è il tuo biglietto: ";
    outsideTicketTitle.appendChild(ticketTitle);

    const passengerInfo = document.createElement("p");
    passengerInfo.innerText = "Utente:";
    passenger.appendChild(passengerInfo);

    const nameSurname = document.createElement("p");
    nameSurname.setAttribute("id", "nome_cognome");
    nameSurname.innerText = name.toUpperCase() + " " + surname.toUpperCase();
    passenger.appendChild(nameSurname);

    const generateCarrozza = document.createElement("p");
    generateCarrozza.innerText = "Codice Biglietto: " + Math.floor(Math.random() * 1000) + 1;
    info.appendChild(generateCarrozza);

    const infoTicket = document.createElement("p")
    infoTicket.innerText = "Tipo di biglietto: " + risultato.offerta;
    info.appendChild(infoTicket);
    infoTicket.style.textAlign = "center";

    const priceTicket = document.createElement("p")
    priceTicket.innerText = "Costo del biglietto: " + risultato.price + " €";
    info.appendChild(priceTicket);


});


//ora facciamo in modo che il secondo tasto invece resetti il form.
clearButton.addEventListener("click", () => {
    nameInput.value = "";
    surnameInput.value = "";
    kmInput.value = "";
    ageInput.value = "";

});
