
const cameraId = localStorage.getItem('margaux_oc'); // Création de la variable sur laquelle je récupère les éléments stocker sur le local storage

fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function(response){
    response.json().then(function(camera){ 
        let $article = document.querySelector('article');
        let $div = document.createElement('div');
        $article.appendChild($div);
       $div.innerHTML = `<img src='${camera.imageUrl}'/> 
       <h1> Camera ${camera.name} </h1> 
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
        
        var numberOrder=0;
        let basket = document.querySelector('.basket-icon');
        basket.addEventListener('click', function(){
            document.getElementById('quantity').value = ++numberOrder;
        }) ;
        

    });
    }).catch(function(error){
    alert('Erreur, la page ne répond pas, veuillez nous excuser')

    });