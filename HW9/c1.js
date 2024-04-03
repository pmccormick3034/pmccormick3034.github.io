"use strict";



let b3 = document.querySelector('#b3');
let t1 = document.querySelector('#d1');
let g1 = null; //table 
let R = null;
async function loadp1() {
    let url = `https://juxinglong.github.io/static/HW/hw6/Students.json
`;
    let r = await fetch(url);
    let rj = await r.json();

    if (g1 != null) {
        g1.destroy();
    };
    t1.innerHTML = ``;
    let opts = {
        data: rj,
        pagination: { limit: 10, },
        sort: true,
        search: true,

    };
    g1 = new gridjs.Grid(opts);
    g1.render(t1);

    R = rj;
    console.log(R);

}
b3.addEventListener('click', loadp1);

let b4 = document.querySelector('#b4');

async function loadp2() {
    let url = `https://juxinglong.github.io/static/HW/hw6/Courses.json
`;
    let r = await fetch(url);
    let rj = await r.json();

    if (g1 != null) {
        g1.destroy();
    };
    t1.innerHTML = ``;
    let opts = {
        data: rj,
        pagination: { limit: 10, },
        sort: true,
        search: true,

    };
    g1 = new gridjs.Grid(opts);
    g1.render(t1);

    R = rj;
    console.log(R);

}


b4.addEventListener('click', loadp2)


let b5 = document.querySelector('#b5');

async function loadp3() {
    let url = `https://juxinglong.github.io/static/HW/hw6/Enrollments.json


`;
    let r = await fetch(url);
    let rj = await r.json();

    if (g1 != null) {
        g1.destroy();
    };
    t1.innerHTML = ``;
    let opts = {
        data: rj,
        pagination: { limit: 10, },
        sort: true,
        search: true,

    };
    g1 = new gridjs.Grid(opts);
    g1.render(t1);

    R = rj;
    console.log(R);

};
b5.addEventListener('click', loadp3);

