let jugarDeNuevo = "si";

while (jugarDeNuevo === "si") {

    let jugador = prompt("Elegí: Piedra, Papel o Tijera");

    let opciones = ["Piedra", "Papel", "Tijera"];
    let computadora = opciones[Math.floor(Math.random() * 3)];

    alert("La computadora eligió: " + computadora);

    if (jugador === computadora) {
        alert("¡Empate!");
    } else if (
        (jugador === "Piedra" && computadora === "Tijera") ||
        (jugador === "Papel" && computadora === "Piedra") ||
        (jugador === "Tijera" && computadora === "Papel")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("¡Ganó la computadora!");
    }

    jugarDeNuevo = prompt("¿Querés volver a jugar? Escribí 'si' o 'no'.");
}
