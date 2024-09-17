// Qui cerchiamo e otteniamo gli elementi del contatore dal DOM
const displayContatore = document.querySelector('[data-contatore]');
const bottoneIncremento = document.querySelector('[data-incremento]');
const bottoneDecremento = document.querySelector('[data-decremento]');
const bottoneReset = document.querySelector('[data-reset]'); 

let risultato = 0;  // Qui memorizziamo nella variabile il valore iniziale del contatore, che sarà ovviamente a 0

// Qui gestiamo l'incremento del pulsante "+"
bottoneIncremento.addEventListener('click', function() {
    risultato++; 
    displayContatore.innerText = risultato;  // Aggiorniamo il display dopo l'incremento della variabile "risultato"
    colore();
});

// Qui gestiamo il decremento del pulsante "-"
bottoneDecremento.addEventListener('click', function() {
    risultato--;
    displayContatore.innerText = risultato;  // Aggiorniamo il display dopo il decremento della variabile "risultato"
    colore();
});

// Qui gestiamo il reset dei valori immessi in precedenza con il tasto "reset"
bottoneReset.addEventListener('click', function() {
    risultato = 0;  // Reimpostiamo il valore del contatore a 0
    displayContatore.innerText = risultato;  // Aggiorniamo il display dopo il reset, ossia la variabile "risultato" prende il valore 0
    colore();
});

function colore(){
    displayContatore.innerText = risultato; // prendiamo il valore nel display aggiornato

    // cambiamo colore se il numero è positivo o negativo, invece se è uguale a 0 rimane invariato
    if(risultato > 0){
        displayContatore.style.color = '#2fa142';
    } else if (risultato < 0) {
        displayContatore.style.color = '#d63131';
    } else {
        displayContatore.style.color = '';
    }
}