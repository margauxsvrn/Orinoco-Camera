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
    <p><span>Prix total</span> : <span class="nom-camera">${totalPrice} €</span> </p>`
    
    // Je crée l'objet a mettre dans le local storage
    class customerFrame {
        constructor(totalPrice, id, clientName, clientEmail, clientAddress, clientCity, clientPostCode){
            this.totalPrice = totalPrice;
            this.id = id;
            this.clientName = clientName;
            this.clientEmail = clientEmail;
            this.clientAddress = clientAddress;
            this.clientCity = clientCity;
            this.clientPostCode = clientPostCode;
        }
    }

    // Je crée l'objet avec le prix et l'id
    class finalInformation {
        constructor(finalPrice, id){
            this.finalPrice = finalPrice;
            this.id = id;
        }
    }

    let $button = document.querySelector('button');
        $button.addEventListener('click', function(){
            var customer = new finalInformation (totalPrice, orderDetail.id);
            localStorage.setItem('margaux_oc', JSON.stringify(customer)) // Mettre dans le local storage l'objet contenant le prix et l'id 
            location.href = '../confirmation.html'
            
            
        })

    })

})




