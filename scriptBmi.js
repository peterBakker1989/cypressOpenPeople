//fields and Buttons
const bmiLengte = document.getElementById('BMILengte');
const bmiGewicht = document.getElementById('BMIGewicht');
const bmiBereken = document.getElementById('berekenBMI');
const bmiResultaat = document.getElementById('jouwBMI');
const bmiStatus = document.getElementById('statusBMI');

//eventListners
bmiBereken.addEventListener("click", berekenBMI);


//logic


//BMI Calculator

function berekenBMI() {
    const resultaat = berekenBMICalculation();
    pasPaginaAanVoorBMI(resultaat);
}

function berekenBMICalculation() {
    let lengte = bmiLengte.value;
    if (lengte.length === 2) {
        lengte /= 10
    } else if (lengte.length === 3) {
        lengte /= 100;
    }
    console.log(lengte)
    const gewicht = bmiGewicht.value;
    let resultaat = gewicht / (lengte * lengte);
    //round to 2 decimals
    resultaat = Math.round(resultaat * 10) / 10
    return resultaat;
}

function pasPaginaAanVoorBMI(resultaat) {
    const bmiResultaatString = 'Jouw BMI is: ';
    const bmiUitlegString = 'Jij bent: '
    bmiResultaat.innerHTML = `${bmiResultaatString} ${resultaat}`;
    if (resultaat < 18.5) {
        bmiStatus.innerHTML = `${bmiUitlegString}te licht`
        bmiStatus.style.color = "red";
    } else if (resultaat >= 18.5 && resultaat < 25) {
        bmiStatus.innerHTML = `${bmiUitlegString} gezond`
        bmiStatus.style.color = "green";
    }
    else if (resultaat >= 25 && resultaat < 30) {
        bmiStatus.innerHTML = `${bmiUitlegString} te zwaar`
        bmiStatus.style.color = "orange";
    }
    else if (resultaat > 30) {
        bmiStatus.innerHTML = `${bmiUitlegString} veel te zwaar`
        bmiStatus.style.color = "red";
    }
}