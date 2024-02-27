let button = document.getElementById("button");

const changeCards = async () => {
    let numAleatoire = Math.ceil(Math.random() * 29) + 1;

    let requestString = `https://hp-api.lainocs.fr/characters/${numAleatoire}`;

    let data = await fetch(requestString)
    console.log(data);
    
    let response = await data.json();
    console.log(response);
};

button.addEventListener("click", changeCards)