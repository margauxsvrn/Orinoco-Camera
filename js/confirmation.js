const save = localStorage.getItem('margaux_oc');
const saveObject = JSON.parse(save);

let $h1 = document.querySelector('h1');
let $p = document.createElement('p');
$h1.appendChild($p);

$p.innerHTML = `Merci de votre commande ${saveObject.firstName}! <br> Votre commande n°<span class="nom-camera">${saveObject.orderId}</span>, a bien été validée pour un montant de <span class="nom-camera">${saveObject.totalPrice}€</span>.`