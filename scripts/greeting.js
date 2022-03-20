var date = new Date();
var hour = date.getHours();
var greeting;

if(hour < 12){
    greeting = 'Good Morning🌅';
}

if(hour >=12 && hour <=18)
{
    greeting = 'Good Afternoon☀️';
}

if(hour >=18 && hour <=24)
{
    greeting = 'Good Evening🌙';
}

document.getElementById('greeting').innerHTML = greeting;