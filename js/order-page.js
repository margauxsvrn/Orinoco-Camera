const save = localStorage.getItem('margaux_oc');
const saveObject = JSON.parse(save)

let $h1 = document.querySelector('h1')
let $div = document.createElement('div')

$h1.appendChild($div);

var products = saveObject.products
var finalPrice = 0 ;

for (let product of products){

    let totalPrice = (product.price * product.quantity)
    finalPrice += totalPrice // Calcul du prix final
    $div.innerHTML += `<img src="${product.image}"/> 
    <h1 class="nom-camera">Camera ${product.name} </h1>
    <p><span>Prix</span> : ${product.price} € </p> <p><span>Quantité</span> : ${product.quantity} </p>
    <p><span>Prix total</span> : <span class="nom-camera">${totalPrice} €</span> </p><br>`
}
$div.innerHTML += `<hr><p><span class="nom-camera">Prix final :</span> <strong>${finalPrice} € </strong></p>`







// Je crée la requête d'envoi du formulaire

const sentForm = async function (data){
    let response = await fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    let responseData = response.json()
    return responseData;
}

// Je selectionne les informations rentrées dans le formulaire

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    let lastName = document.getElementById('nom').value
    let firstName = document.getElementById('prenom').value
    let email = document.getElementById('email').value
    let address = document.getElementById('adresse').value
    let city = document.getElementById('ville').value

    // J'utilise la fonction qui permets d'envoyer les informations

// Je crée une boucle pour afficher un par un les ID
let ids = []
    for (product of products){
        ids.push(product.id) 
    }

   sentForm({
        contact: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            email: email
        },
        products : ids
    }).then(function(result){
        // J'ajoute les nouvelles propriétés à mon local Storage
        var orderId = result.orderId;
        saveObject.totalPrice = finalPrice;
        saveObject.orderId = orderId;
        saveObject.firstName = firstName;

        // Je met dans le local storage la sauvegarde mise à jour
        localStorage.setItem('margaux_oc', JSON.stringify(saveObject))

        // Quand tout le formulaire a bien été rempli et enregistré, ouvrir la page de confirmation
        window.location.href = './confirmation.html'
    })
})

