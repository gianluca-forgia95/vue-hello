//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.
var root = new Vue({
el: '#root',
data: {
     text: 'Forza Roma',
     img: 'img/pantheon.jpg',
     message: 'Hai caricato questa pagina il ' + new Date().toLocaleString(),
     list: [
       'Seguire la lezione',
       'Leggere la documentazione VueJs',
       'Fare prove'
         ],
    }
});
