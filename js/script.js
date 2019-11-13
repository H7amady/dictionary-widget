
let inputValue = document.getElementById('myInput').value;


// let searchBtn = document.querySelector('#search');




function keyup(e) {

    inputValue = e.target.value;
    console.log(inputValue)
}



const myKey = '6c263ed5-a23b-4e4f-a126-79a400ce4dd1';

const url = `https://dictionaryapi.com/api/v3/references/sd4/json/${inputValue}?key=${myKey}`;





fetch(url)
.then((resp) => resp.json())
.then((data) => {
    
    document.getElementById('span').innerHTML = `
        <i class="fa fa-volume-up fa_custom"><audio id="audio" src=""'></audio></i>
    `
    document.getElementById('word').innerText = data[0].hwi.hw;
    document.getElementById('spell').innerText = `/${data[0].hwi.prs[0].mw}/`;

    const ol = document.createElement('ol');
    document.getElementById('noun').appendChild(ol)
    ol.innerText = data[0].fl;

    
    let shortDeff = data[0].shortdef;

    shortDeff.map(function(deff) {
        ol.appendChild(document.createElement('li')).innerText = deff
    })
    console.log(shortDeff)
})
.catch((error) =>{
    console.error();

});





