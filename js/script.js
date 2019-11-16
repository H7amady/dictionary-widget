let inputValue ;

let searchBtn = document.querySelector('#search');

const input = document.querySelector('input');

const myKey = '6c263ed5-a23b-4e4f-a126-79a400ce4dd1';

let url;

input.addEventListener('keyup', (e) => {
    url = `https://dictionaryapi.com/api/v3/references/sd4/json/${e.target.value}?key=${myKey}`;
})

searchBtn.addEventListener('click', () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        document.getElementById('span').innerHTML = `
            <i class="fa fa-volume-up fa_custom"><audio id="audio" src=""'></audio></i>
        `
        document.getElementById('word').innerText = data[0].hwi.hw;
        document.getElementById('spell').innerText = `/${data[0].hwi.prs[0].mw}/`;


        

        document.getElementById('noun').innerHTML = '';
        let ol = document.createElement('ol');
        document.getElementById('noun').appendChild(ol).innerText = data[0].fl;
    
        
        let nounShortDeff = data[0].shortdef;

        nounShortDeff.map(function(deff) {
            
            ol.appendChild(document.createElement('li')).innerText = deff;

        })

        
        
        
    })
    .catch((error) =>{
        console.error();

    });
})

