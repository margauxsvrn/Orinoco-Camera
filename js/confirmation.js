const confirmation = localStorage.getItem('margaux_oc');
const confirmationDetail = JSON.parse(confirmation);

let $h1 = document.querySelector('h1');
let $p = document.createElement('p');
$h1.appendChild($p);

$p.innerHTML = `Merci de votre commande ${confirmationDetail.firstName}! <br> Votre commande n°<span class="nom-camera">${confirmationDetail.orderId}</span>, a bien été validée pour un montant de <span class="nom-camera">${confirmationDetail.totalPrice}€</span>.`