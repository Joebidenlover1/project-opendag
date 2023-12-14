var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Goede Morgen';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Goede Middag';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Fijne Avond';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';