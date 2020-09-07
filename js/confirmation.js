const myLocalStorage = localStorage.getItem('margaux_oc');
const myLocalStorageObject = JSON.parse(myLocalStorage);

let $h1 = document.querySelector('h1');
let $p = document.createElement('p');
$h1.appendChild($p);

$p.innerHTML = `Merci de votre commande ${myLocalStorageObject.firstName}! <br> Votre commande n°<span class="nom-camera">${myLocalStorageObject.orderId}</span>, a bien été validée pour un montant de <span class="nom-camera">${myLocalStorageObject.totalPrice}€</span>.`