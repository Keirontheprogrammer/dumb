let names = ["Big OJ", "Pac", "Butcher", "Ivan"];
let places = ["LA", "NYC", "CHI"];
let events = ["Killing", "Rapping", "Dipping"];
let body = document.body

document.querySelector('.switch input').addEventListener("change", function(){
    if (this.checked){
        body.style.backgroundColor = '#121212';
        body.style.color = '#ffffff';
        document.getElementById('story').style.background = '#1e1e1e';
        document.getElementById('story').style.color = '#ffffff';
    } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#000000';
        document.getElementById('story').style.background = 'goldenrod';
        document.getElementById('story').style.color = '#000';
    }
    });

document.getElementById("myBtn").addEventListener("click",()=>{
    
let checks = document.querySelector('input[name="country"]:checked')
let temp = checks && checks.value ==="USA" ? "100°F" : "38°C";

let random_names_index = Math.floor(Math.random()* names.length);
const random_name = names[random_names_index];

let random_places_index = Math.floor(Math.random()* places.length);
const random_places = places[random_places_index];

let random_event_index =Math.floor(Math.random() * events.length);
const random_event = events[random_event_index];

let dzina = document.getElementById("name");

let divstory=document.getElementById("story");

    divstory.innerHTML +=
        `so the guy named <strong>${dzina.value}</strong> went out into the ${temp} woods in the city of <strong>${random_places}</strong>.<br><br> 
        He met a guy who went by the name <strong>${random_name }</strong>, and together they started <strong>${random_event}</strong> in the city.`;

    divstory.style.display = 'block';
    divstory.scrollIntoView({behavior: "smooth"});
});
