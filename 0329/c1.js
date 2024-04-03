"use strict";

let R = null;
let b1 = document.querySelector('#b1');
let chart1 = null; // for the chart to be shown in c1 canvas



async function  loadd() {

    //fetch async

    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url);

    let rj = await r.json();// async turn r into json format


    let c1 = document.querySelector('#c1');
    if (chart1 != null) {
        chart1.destroy();// if a chart exists, delete it 

    };
    c1.innerHTML = ``;// clean the canvas to show another chart

    let opts = {

        type: 'pie',
        
        data: {
            labels: rj.map(x => x.st),
            datasets: [
                {data:rj.map(x=>x.p),},
            ],
            
        },


    };
    chart1 = new Chart(c1, opts);// parameters: canvas, object

    R = rj; 

    console.log(R);

    Swal.fire("load data");
}


b1.addEventListener('click', loadd);


let b2 = document.querySelector('#b2');


let P = null;
let chart2= null; 
async function loadg() {


    let url2 = `https://juxinglong.github.io/static/HW/hw6/MIS3033.json`;

    let r = await fetch(url2);
    let rj = await r.json();
    P = rj; 
    console.log(P);

    let c2 = document.querySelector('#c2');
    if (chart2 != null) {
        chart2.destroy();
    };
    c2.innerHTML = ``;


   let c2opts = {
        type: 'pie',
       data: {
            labels: P.map(x=>x.lg),
            datasets: [
                {data: P.map(x=>x.n), label:'Number',},

            ],
        }

    }
    chart2 = new Chart(c2, c2opts);

    //fetch
    let aopts = {
        targets: [c2,],
            rotate: {value:60, duration: 3000},
      
};
    anime(aopts);
}
b2.addEventListener('click',loadg)