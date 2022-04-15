const rawData = [
    {"sid": "temprature", "value": .1},
    {"sid": "humidity", "value": .9},
    {"sid": "cool", "value": .2},
    {"sid": "Hot Hot", "value": .8},
    {"sid": "Roasting", "value": .7},
    {"sid": "cChilli", "value": .3},
    {"sid": "Balmy", "value": .6},
    {"sid": "Unity", "value": 1},
    {"sid": "Zero", "value": .0},
]




rawData.forEach(function(num){
    // console.log(num);
    let gaugeTemplate = `
        <div class="gauge__wrapper">
            <div class="gauge__body">
                <div class="gauge__fill"></div>
                <div class="gauge__cover">
                    <span class="dial"><span>${num.value}</span></span>
                </div>
            </div>
            <div class="label">
                <span class="label-text">Some text</span>
            </div>
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
    el.querySelector(".gauge__cover .dial span").textContent = `${Math.round(value * 100)}`;

    let valueDegrees = Math.round(mapRange(value, 1, 100, 10, 110));
    // el.querySelector(".gauge__fill").style.filter = `hue-rotate(${valueDegrees}deg)`;

    const bgColor = v => `hsl(${( (1-v) * 200)}, 90%, 35%)`;
    el.querySelector(".gauge__fill").style.backgroundColor = bgColor(value);
    // console.log(`${valueDegrees} -> ${value}  ${bgColor(value)}`);
}




 function mapRange(x, a = 1.0, b = 100.0, c = 1.0, d = 360.0){
    x = x * 100;
    let out = (x - a) / (b - a) * (d - c) + 1
    return Math.round(out);
 }

// const coolness = document.getElementById('coolness');
// // setInterval(updateGauge(coolness, 0.9), 2000);
setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(cool, r), 3000);
    },3000);

setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(humidity, r), 3000);
    },3000);

    setInterval(
    function(){
        let r = Math.random();
        setInterval(updateGauge(temprature, r), 3000);
    },3000);