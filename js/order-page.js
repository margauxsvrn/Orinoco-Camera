const order = localStorage.getItem('margaux_oc');
const orderDetail = JSON.parse(order)

let $h1 = document.querySelector('h1')
let $div = document.createElement('div')

$h1.appendChild($div);


fetch(`http://localhost:3000/api/cameras`).then(function(response){
    response.json().then(function(camera){
        let totalPrice = (orderDetail.price * orderDetail
        .order)
    $div.innerHTML = `<img src="${orderDetail.image}"/> 
    <h1 class="nom-camera">Camera ${orderDetail.name} </h1>
    <p> <span>Prix</span> : ${orderDetail.price} € </p> <p><span>Quantité</span> : ${orderDetail.order} </p>
    <p><span>Référence</span> : ${orderDetail.id} </p>
    <p><span>Prix total</span> : <span class="nom-camera">${totalPrice} €</span> </p>`
    
    })

})