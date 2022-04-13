const rawData = [
    {"sid": "temprature", "value": .1},
    {"sid": "humidity", "value": .9},
    {"sid": "cool", "value": .2},
    {"sid": "coolness", "value": .8},
    {"sid": "coolness1", "value": .7},
    {"sid": "coolness2", "value": .3},
    {"sid": "coolness3", "value": .6},
    {"sid": "coolness4", "value": 1},
    {"sid": "coolness5", "value": .0},
]




rawData.forEach(function(num){
    // console.log(num);
    let gaugeTemplate = `
        
            <div class="gauge__body">
                <div class="gauge__fill"></div>
                <div class="gauge__cover">
                    <span class="dial"><span>${num.value}</span></span>
                </div>
            </div>

            <div class="label">
                <span class="label-text">Some text</span>
            </div>
        
    `;



    gaugesEl = document.querySelector("#gauges");
    let newEl = document.createElement('div')
    newEl.setAttribute("class", "gauge");
    newEl.setAttribute("id", num.sid);
    newEl.innerHTML = gaugeTemplate;
    gaugesEl.appendChild(newEl);
    newEl.querySelector(".label-text").innerHTML = num.sid.replace(/^\w/, (c) => c.toUpperCase());


    const value = num.value;
    updateGauge(newEl, value);
    
});

function updateGauge(el,value){
    el.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    el.querySelector(".gauge__cover .dial span").textContent = `${Math.round(value * 100)}%`;

    let valueDegrees = Math.round(mapRange(value, 1, 100, 1, 120));
    // el.querySelector(".gauge__fill").style.filter = `hue-rotate(${valueDegrees}deg)`;

    const bgColor = v => `hsl(${( (1-v) * 120)}, 80%, 25%)`;
    el.querySelector(".gauge__fill").style.backgroundColor = bgColor(value);
    console.log(`${valueDegrees} -> ${value}  ${bgColor(value)}`);
}




 function mapRange(x, a = 1.0, b = 100.0, c = 1.0, d = 360.0){
    x = x * 100;
    let out = (x - a) / (b - a) * (d - c) + 1
    return Math.round(out);
 }

const coolness = document.getElementById('coolness');
// setInterval(updateGauge(coolness, 0.9), 2000);
setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(coolness, r), 2000);
    },2000);

setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(humidity, r), 2000);
    },2000);

    setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(temprature, r), 2000);
    },2000);