let R = null;
let pg2 = null;
let b10 = document.querySelector('#b10');
let sd = document.querySelector('#sd');
async function loadpb3() {
    let url = `https://juxinglong.github.io/static/HW/hw6/MIS3013.json
`;
    let r = await fetch(url);
    let rj = await r.json();

    if (pg2 != null) {
        pg2.destroy();
    };
    sd.innerHTML = ``;
    let opts = {
        data: rj,
        pagination: { limit: 10, },
        sort: true,
        search: true,

    };
    pg2 = new gridjs.Grid(opts);
    pg2.render(sd);

    R = rj;
    console.log(R);

}
b10.addEventListener('click', loadpb3);