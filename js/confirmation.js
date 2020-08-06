const confirmation = localStorage.getItem('margaux_oc');
const confirmationDetail = JSON.parse(confirmation);

let $h1 = document.querySelector('h1');
let $p = document.createElement('p');
$h1.appendChild($p);

$p.innerHTML = `Votre commande référence <span class="nom-camera">${confirmationDetail.id}</span> , pour un montant de <span class="nom-camera">${confirmationDetail.finalPrice}€</span> a bien été validée. <br><br> Nous vous remercions de votre commande.`
