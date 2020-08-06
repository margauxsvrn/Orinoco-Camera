
const cameraId = localStorage.getItem('margaux_oc'); // Création de la variable sur laquelle je récupère les éléments stocker sur le local storage

fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function(response){
    response.json().then(function(camera){ 
        let $article = document.querySelector('article');
        let $div = document.createElement('div');
        $article.appendChild($div);
        
       $div.innerHTML = `<img src='${camera.imageUrl}'/> 
       <h1 class="nom-camera"> Camera ${camera.name} </h1> 
       <p> ${camera.description} </p> 
       <div> <span>Prix</span> : ${camera.price} € </div>
       <br> 
       <div> <span><label for="lenses-select">Lentilles</span> :</label>
       <select name="lenses" id="lenses-select">
        <option value="">Choisissez une taille de lentilles</option>
        <option value="${camera.lenses[0]}">${camera.lenses[0]}</option>
        <option value="${camera.lenses[1]}">${camera.lenses[1]}</option>
        <option value="${camera.lenses[2]}">${camera.lenses[2]}</option></div>
        </select>
        <br>
        <div class="basket-icon"> <i class="fas fa-shopping-basket"></i> </div> 
        <span class="order-input">Quantité</span> : 
        <input type="text" id="quantity" value="0"></input>
        <div><button>Commander</button></div>`;
        
        // Je crée l'objet a mettre dans le local storage
        class cameraChoose {
            constructor(image, name, price, id, order){
                this.image = image;
                this.name = name;
                this.price = price;
                this.id = id;
                this.order = order;
            }
        }

        // J'incrémente le nombre au clic sur l'icone basket
        var numberOrder=0;
        let basket = document.querySelector('.basket-icon');
        basket.addEventListener('click', function(){
            document.getElementById('quantity').value = ++numberOrder;
        })
        
        let $button = document.querySelector('button');
        $button.addEventListener('click', function(){
            var order = new cameraChoose (camera.imageUrl, camera.name, camera.price, camera._id, numberOrder);
            localStorage.setItem('margaux_oc', JSON.stringify(order)) // Mettre dans le local storage l'objet contenant nom, prix, et quantité 
            location.href = '../order.html'
            
        })

    });
}).catch(function(error){
    alert('Erreur, la page ne répond pas, veuillez nous excuser')

});