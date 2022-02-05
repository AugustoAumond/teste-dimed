let bob = document.querySelector('#stepBob');
let rex = document.querySelector('#stepRex');
let steps = document.querySelector('#steps');
let divWinner = document.querySelector('#vencedor');


function openRex(){

    document.querySelector('#divRex').style.display = 'block';

}

function openOli(){

    document.querySelector('#divOli').style.display = 'block';

}

function showTela (value){

    steps.remove();

    divWinner.innerHTML = `<h1> ${value} </h1>`
}

function Persecution(){

    let winner = ' '

    if (bob.value > rex.value){

        winner = 'Bob pegou Oli! \u{1F436}';

        showTela(winner);
    }

    else {
        if (rex.value > bob.value){

        winner = 'Rex pegou Oli! \u{1F436}';

        showTela(winner);
    }

        else {
            winner = 'Oli escapou! \u{1F639}' ;

            showTela(winner);

        }    

    }

}


