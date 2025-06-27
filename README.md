<h1>Counter Javascript</h1>
<p>Questo è il 2° progetto eseguito per il Master in Sviluppo web di Start2impact.</p>

<h2>🤔 Di cosa si tratta?</h2>
<p>Si tratta di un semplice contatore reso interattivo grazie a JavaScript. L'utente può incrementare, decrementare o resettare il contatore con i relativi bottoni.</p>

<h2>💡 Funzionalità</h2>
<ul>
  <li><strong>Incremento:</strong> Aumenta il valore del contatore di 1.</li>
  <li><strong>Decremento:</strong> Riduce il valore del contatore di 1.</li>
  <li><strong>Reset:</strong> Riporta il valore del contatore a 0.</li>
  <li><strong>Cambio di colore:</strong> Il colore del numero cambia in base al valore del contatore.</li>
</ul>

<h2>⚒️ Struttura del codice</h2>

<p><strong>La struttura può essere suddivisa in 4 parti principali:</strong></p>

<ol>

  <li>Ricerca e ottenimento del contenitore del display del contatore e quello dedicato ai pulsanti.</li>
    <ul><li>Creazione della variabile che gestirà il valore dinamico del display.</li></ul>
  <li>Creazione dei bottoni dinamici da appendere al contenitore dei pulsanti.</li>
  <li>Gestione eventi del contatore con <code>.addEventListener()</code> per l’incremento, decremento e reset dei valori.</li>
  <li>Creazione funzione <code>colore()</code> per rendere il colore dei valori condizionali.</li>
    <ul><li>Verde: se il numero è positivo.</li></ul>
    <ul><li>Rosso: se il numero è negativo.</li></ul>
    <ul><li>Se uguale a 0 il colore non subirà cambiamenti.</li></ul>

</ol>

<h2>👨🏻‍💻 Testa il progetto</h2>
<p>Non ti resta che provare tu stesso, basta che clicchi il link qui in basso:</p>
<a href="https://dgmichele.github.io/counter/" rel="noopener" target="_blank"><strong>Counter JS ↗️</strong></a>
