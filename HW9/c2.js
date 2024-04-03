let R = null;
let pg2 = null;

let chart1 = null;
let chart2 = null;
let chart3 = null;
var g;
{
    let b10 = document.querySelector('#b10');
    let b11 = document.querySelector('#b11');
    let b12 = document.querySelector('#b12');
    let sd = document.querySelector('#sd');


    async function loadt(name) {
        let url = "";
        if (name == "3013") {
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3013.json";
        }
        else if (name == "3033") {
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3033.json";
        }
        else if (name=="3533"){
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3353.json";
        };
        
   
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
            columns: [{ id: 'lg', name: "Letter Grade" }, {id: 'n', name: 'Number of Students'}]
        };
        pg2 = new gridjs.Grid(opts);
        pg2.render(sd);




        R = rj;
        console.log(R);



    }

    async function loadchart(name) {
        let url = "";
        if (name == "3013") {
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3013.json";
        }
        else if (name == "3033") {
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3033.json";
        }
        else if (name == "3533") {
            url = "https://juxinglong.github.io/static/HW/hw6/MIS3353.json";
        };


        let r = await fetch(url);
        let rj = await r.json();

        g = rj;
        let c1 = document.querySelector('#c1');
        if (chart1 != null) {
            chart1.destroy();
        }
        c1.innerHTML = ``;
        let opts1 = {
            type: 'pie',
            data: {
                labels: rj.map(x => x.lg),
                datasets: [
                    { data: rj.map(x => x.n), },
                ],

            },
        }


        chart1 = new Chart(c1, opts1);

        let c2 = document.querySelector('#c2');
        if (chart2 != null) {
            chart2.destroy();
        }
        c2.innerHTML = ``;
        let opts2 = {
            type: 'bar',
            data: {
                labels: rj.map(x => x.lg),
                datasets: [

                    {
                        label: "MIS" + name,

                        data: rj.map(x => x.n),
                    }
                ],
            }
        }


        chart2 = new Chart(c2, opts2);
        
        let c3 = document.querySelector('#c3');
        if (chart3 != null) {
            chart3.destroy();
        }
        c3.innerHTML = ``;

        let opts3 = {
            type: 'line',
            data: {
                labels: rj.map(x => x.lg),
                datasets: [
                    {
                        label: 'MIS' + name,
                        data: rj.map(x => x.n),
                    }

                ]
}
            
        };
        chart3 = new Chart(c3, opts3);






    };
    b10.addEventListener('click', async () => {


        loadt("3013");
        loadchart("3013");
        Swal.fire({
        title: 'Get MIS3013',
        })
    });


    b11.addEventListener('click', async () => {

        loadt("3033");
        loadchart("3033");

        Swal.fire({
            title: 'Get MIS3033',
        })
    })            ;


    b12.addEventListener('click', async () => {
        loadt("3533");
        loadchart("3533");

        Swal.fire({ title: 'Get MIS3533', })
    });

}