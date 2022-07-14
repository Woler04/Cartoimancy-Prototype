let cardContainer = document.getElementById("card-container");
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♠", "♥", "♣", "♦"];
function CreateRow() {
    let row = document.createElement("div");
    row.classList.add("row", "justify-content-between");
    //col-sm-2 px-0 my-3
    for (let i = 0; i < 7; i++) {
        row.append(CreateColumn2());
    }
    
    row.append(CreateColumn1());
    row.append(CreateColumn2());
    row.append(CreateColumn1());
    row.append(CreateColumn2());
    row.append(CreateColumn1());
    row.append(CreateColumn2());
    return row;
}

function CreateColumn2() {
    let col2 = document.createElement("div");
    let card = null;
    col2.classList.add("col-sm-2", "px-0", "my-3");
    col2.append(CreateImage(false));
    col2.addEventListener('click', function handleClick(event) {
        if (card === null)
        {
            card = Cart();
        }
        window.alert(card, event);
    });
    return col2;
}

function CreateColumn1() {
    let col1 = document.createElement("div");
    col1.classList.add("col-sm-1", "px-0", "my-3");
    let card = null;
    col1.append(CreateImage(true));
    col1.addEventListener('click', function handleClick(event) {
        if (card === null)
        {
            card = Cart();
        }
        window.alert(card, event);
    });
    return col1;
}

function Cart() {
    let card = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
    let n = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    let a = cards[card] + " " + suit[n];
    return a;
}


function CreateImage(mdoe) {
    let img = document.createElement("img");
    if (mdoe) {
        img.classList.add("w-100", "m-auto", "d-block");
    }
    else {
        img.classList.add("w-50", "m-auto", "d-block");
    }

    img.src = "https://i.pinimg.com/originals/40/66/44/40664440b9dcbf61bbd896b919c6b703.png";
    img.alt = "card_back";
    return img;
}

cardContainer.append(CreateRow());
cardContainer.append(CreateRow());

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        cardContainer.append(CreateRow());
        cardContainer.append(CreateRow());
        cardContainer.append(CreateRow());
        cardContainer.append(CreateRow());
    }
};

