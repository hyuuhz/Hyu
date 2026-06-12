// =====================
// MÚSICA
// =====================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {
        music.play();
        musicBtn.innerHTML = "❚❚";
        playing = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "♫";
        playing = false;
    }

});

// =====================
// BALÕES
// =====================

const balloonsContainer = document.getElementById("balloons");

const messages = [

    "Você trouxe paz ❤️",
    "Você trouxe leveza ❤️",
    "Você trouxe felicidade ❤️",
    "Você trouxe sorrisos ❤️",
    "Você trouxe algo que eu não esperava... ❤️"

];

messages.forEach(text => {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.innerHTML = "🎈";

    balloon.addEventListener("click", () => {

        balloon.innerHTML = text;

        balloon.style.fontSize = "14px";

        balloon.style.padding = "10px";

        setTimeout(() => {

            balloon.style.transform = "scale(0)";

            setTimeout(() => {

                balloon.remove();

            }, 300);

        }, 2500);

    });

    balloonsContainer.appendChild(balloon);

});

// =====================
// CARTA
// =====================

const openLetter = document.getElementById("openLetter");

const letter = document.querySelector(".letter");

const typewriter = document.getElementById("typewriter");

const text = `
Bárbara,

Talvez eu nunca encontre palavras suficientes
para explicar tudo o que sinto.

Mas existe algo que quero que você saiba.

Você transformou dias comuns em dias especiais.

Você trouxe leveza para momentos difíceis.

Seu sorriso se tornou um dos meus lugares favoritos.

E independentemente do que aconteça,
você sempre terá um espaço muito especial
na minha história.

Obrigado por existir.

Com carinho,

Hyu ❤️
`;

let index = 0;

function writeLetter() {

    if (index < text.length) {

        typewriter.innerHTML += text.charAt(index);

        index++;

        setTimeout(writeLetter, 40);

    }

}

openLetter.addEventListener("click", () => {

    letter.style.display = "block";

    if (index === 0) {

        writeLetter();

    }

});

// =====================
// SCROLL ANIMATION
// =====================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
".card, .timeline-item, .letter, .final-content"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";

    observer.observe(el);

});

// =====================
// ÚLTIMA MENSAGEM
// =====================

const finalBtn = document.getElementById("finalBtn");

const lastMessage = document.querySelector(".last-message");

lastMessage.style.display = "none";

finalBtn.addEventListener("click", () => {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    setTimeout(() => {

        lastMessage.style.display = "flex";

    }, 1200);

});

// =====================
// CORAÇÕES FLUTUANDO
// =====================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 100;

    const interval = setInterval(() => {

        pos--;

        heart.style.top = pos + "vh";

        heart.style.opacity = pos / 100;

        if (pos <= -10) {

            clearInterval(interval);

            heart.remove();

        }

    }, 30);

}

setInterval(createHeart, 1500);

// =====================
// NOME BÁRBARA BRILHANDO
// =====================

const barbara = document.querySelector(".barbara");

setInterval(() => {

    barbara.style.transform = "scale(1.03)";

    setTimeout(() => {

        barbara.style.transform = "scale(1)";

    }, 1000);

}, 3000);
