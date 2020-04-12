let messages = [
    "oscar",
    "daniel",
    "juan",
    "jose",
    "luis",
    "raul",
    "diego",
    "felipe"
];
let randomMessages = () => {
    let mensaje = messages[Math.floor(Math.random() * messages.length)];
    console.log(mensaje);
}

module.exports = { randomMessages };