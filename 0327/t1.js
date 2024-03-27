"use strict";


let R = null; 
//Type script is javascript with more rules

let t1 = document.querySelector('#t1');

let b1 = document.querySelector('#b1');
let g1 = null; //table 

b1.addEventListener("click", loads);

async function loads() {
    // fetch();
    //Swal.fire("Data Loaded");
    let url = `https://juxinglong.github.io/static/data/states.json`;
    let r = await fetch(url);


    let rj = await r.json();

    if (g1 != null) {
        g1.destroy();
    };


    t1.innerHTML = ``;
    let opts = {
        data: rj,
        width: 500,
        pagination: { limit: 10, },
        sort: true,
        search: true,
        columns: [{ id: "st", name: "state" }, { id : "p", name: "Population" }],
    };

    g1 = new gridjs.Grid(opts);
    g1.render(t1);

    R = rj;
    console.log(rj);
};




