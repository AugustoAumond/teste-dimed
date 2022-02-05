let phrase = document.querySelector('#phrase');
let rotation = document.querySelector('#rotation');
let divCifra = document.querySelector('#cifra')
let phraseCripto = document.querySelector('#frasecifrada');



function Encriptar(){
    
    const alphabet =   ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y','Z'];

    let position = 0;

    phraseArray = phrase.value.split('');

    phraseArray.forEach( (e, index) => {

            if (e == ' '){

                return true;

            }
            else {
                alphabet.forEach((element, index) => {

                    if (element !== e.toUpperCase()){

                        return true;

                    } 

                    else {
                        position = index + parseInt(rotation.value);

                        return position, false;
                    } 
                });

                if (e == e.toUpperCase()){

                    phraseArray.splice(index, 1, alphabet[position]);

                } else {

                    phraseArray.splice(index, 1, alphabet[position].toLowerCase());

                }
            }                                          
        })
        divCifra.style.display = 'none';
        phraseCripto.innerHTML = `<h1> ${phraseArray.join('')} </h1>`
    }; 
