function talk(){
    var know = {
        "Hoe gaat het?" : "Goed :))",
        "Aanmelden" : " Ga naar https://www.techniekcollegerotterdam.nl/aanmelden om je te aanmelden :)",
        "Wat voor school is TCR?" : "Wij zijn Techniek College Rotterdam. De grootste mbo-school voor technisch beroepsonderwijs in Rotterdam-Rijnmond. Bij ons vind je technische mbo-opleidingen, cursussen en trainingen voor jongeren én volwassenen. ",
        "Locatie" : "PRINS ALEXANDERLAAN 55 + 3067 GB ROTTERDAM",
        "Wanneer is de open dag?" : " Kom langs op 26 januari van 15.00 tot 20.00 uur of op 27 januari van 10.00 tot 14.00 uur",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry, ik begrijp je vraag niet :( <br>";
    }
}