const kanjiCards = [
    { kanji: "あ", audio: "audio/あ.mp3" },
    { kanji: "い", audio: "audio/い.mp3" },
    { kanji: "う", audio: "audio/う.mp3" },
    { kanji: "え", audio: "audio/え.mp3" },
    { kanji: "お", audio: "audio/お.mp3" },
    { kanji: "か", audio: "audio/か.mp3" },
    { kanji: "き", audio: "audio/き.mp3" },
    { kanji: "く", audio: "audio/く.mp3" },
    { kanji: "け", audio: "audio/け.mp3" },
    { kanji: "こ", audio: "audio/こ.mp3" },
    { kanji: "さ", audio: "audio/さ.mp3" },
    { kanji: "し", audio: "audio/し.mp3" },
    { kanji: "す", audio: "audio/す.mp3" },
    { kanji: "せ", audio: "audio/せ.mp3" },
    { kanji: "そ", audio: "audio/そ.mp3" },
    { kanji: "た", audio: "audio/た.mp3" },
    { kanji: "ち", audio: "audio/ち.mp3" },
    { kanji: "つ", audio: "audio/つ.mp3" },
    { kanji: "て", audio: "audio/て.mp3" },
    { kanji: "と", audio: "audio/と.mp3" },
    { kanji: "な", audio: "audio/な.mp3" },
    { kanji: "に", audio: "audio/に.mp3" },
    { kanji: "ぬ", audio: "audio/ぬ.mp3" },
    { kanji: "ね", audio: "audio/ね.mp3" },
    { kanji: "の", audio: "audio/の.mp3" },
    { kanji: "は", audio: "audio/は.mp3" },
    { kanji: "ひ", audio: "audio/ひ.mp3" },
    { kanji: "ふ", audio: "audio/ふ.mp3" },
    { kanji: "へ", audio: "audio/へ.mp3" },
    { kanji: "ほ", audio: "audio/ほ.mp3" },
    { kanji: "ま", audio: "audio/ま.mp3" },
    { kanji: "み", audio: "audio/み.mp3" },
    { kanji: "む", audio: "audio/む.mp3" },
    { kanji: "め", audio: "audio/め.mp3" },
    { kanji: "も", audio: "audio/も.mp3" },
    { kanji: "や", audio: "audio/や.mp3" },
    { kanji: "ゆ", audio: "audio/ゆ.mp3" },
    { kanji: "よ", audio: "audio/よ.mp3" },
    { kanji: "ら", audio: "audio/ら.mp3" },
    { kanji: "り", audio: "audio/り.mp3" },
    { kanji: "る", audio: "audio/る.mp3" },
    { kanji: "れ", audio: "audio/れ.mp3" },
    { kanji: "ろ", audio: "audio/ろ.mp3" },
    { kanji: "わ", audio: "audio/わ.mp3" }
];

let remainingCards = [...kanjiCards];
let currentCard = null;
let audioPlayer = new Audio();
let remainingCardsText = document.getElementById("remainingCardsText");

document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("deal").addEventListener("click", dealCard);
document.getElementById("stop").addEventListener("click", stopGame);
document.getElementById("repeat").addEventListener("click", repeatAudio);;
document.getElementById("stop").style.display = "none";
document.getElementById("repeat").style.display = "none";


function newGame() {
    remainingCards = [...kanjiCards];
    document.getElementById("textBox").textContent = "";
    document.getElementById("deal").style.display = "inline-block";
    document.getElementById("repeat").style.display = "none";
    document.getElementById("stop").style.display = "none";
    remainingCardsText.innerText = `残り${remainingCards.length}枚のかるた`;
}

function dealCard() {
    if (remainingCards.length === 0) {
        alert("Game over! Start a new game.");
        return;
    }
    
    const index = Math.floor(Math.random() * remainingCards.length);
    
    currentCard = remainingCards.splice(index, 1)[0];
    
    audioPlayer.src = currentCard.audio;
    audioPlayer.play();
    
    document.getElementById("textBox").textContent = "";
    document.getElementById("deal").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
    document.getElementById("repeat").style.display = "inline-block";
    if (remainingCards.length === 1) {
        remainingCardsText.innerText = "残り一枚のかるた";
    } else if (remainingCards.length === 0) { 
        remainingCardsText.innerText = "もはや無し";
    } else {
        remainingCardsText.innerText = `残り${remainingCards.length}枚のかるた`;
    }

}

function stopGame() {
    if (currentCard) {
        audioPlayer.pause();
        document.getElementById("textBox").textContent = currentCard.kanji;
        document.getElementById("stop").style.display = "none";
        document.getElementById("repeat").style.display = "none";
    }
    if (remainingCards.length === 0) {
        document.getElementById("deal").style.display = "none";
        remainingCardsText.innerText = "再び遊ばん";
    } else {
        document.getElementById("deal").style.display = "inline-block";
    }
}

function repeatAudio() {
    if (currentCard) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    }
}
