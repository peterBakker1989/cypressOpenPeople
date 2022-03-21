document.getElementById('weerdata').addEventListener('click', getWeerData);
const woonplaatsField = document.getElementById('woonplaats');

function getWeerData() {
    let wooonplaats = woonplaatsField.value;
    console.log(wooonplaats)
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://weerlive.nl/api/json-data-10min.php?key=demo&locatie=${wooonplaats}`)
    xhr.send('authorization', '49d3b923aa');
    console.log(xhr.response)
}

