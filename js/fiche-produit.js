(function () {
    "use strict";

    const myLocalStorage = JSON.parse(localStorage.getItem('margaux_oc'))

    const cameraId = myLocalStorage.selectedCameraId // Création de la variable sur laquelle je récupère l'Id des cameras stocker sur le local storage

    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (response) {
        response.json().then(function (camera) {
            let $article = document.querySelector('article');
            let $div = document.createElement('div');
            $article.appendChild($div);

            let content = `<img src='${camera.imageUrl}'/> 
       <h1 class="nom-camera"> Camera ${camera.name} </h1> 
       <p> ${camera.description} </p> 
       <div> <span>Prix</span> : ${camera.price} € </div>
       <br> 
       <div> <span><label for="lenses-select">Lentilles</span> :</label>
       <select name="lenses" id="lenses-select">
        <option value="">Choisissez une taille de lentilles</option>`;
            // Je crée une boucle pour afficher les lentilles
            for (const lense of camera.lenses) {
                content += `<option value="${lense}">${lense}</option>`;
            }

            content += `</select>
        </div>
        <br>
        <div class="basket-icon"> <i class="fas fa-shopping-basket"></i> </div> 
        <span class="order-input">Quantité</span> : 
        <input type="text" id="quantity" value="0"></input>
        <div><button>Commander</button></div>`;

            $div.innerHTML = content;

            // J'incrémente le nombre au clic sur l'icone basket
            var numberOrder = 0;
            let basket = document.querySelector('.basket-icon');
            basket.addEventListener('click', function () {
                document.getElementById('quantity').value = ++numberOrder;
            })

            // Je crée l'objet a mettre dans le local storage
            class CameraChoose {
                constructor(image, name, price, id, quantity) {
                    this.image = image;
                    this.name = name;
                    this.price = price;
                    this.id = id;
                    this.quantity = quantity;
                }
            }

            // Je sélectionne le bouton "commander" et je lui ajoute une action au clic
            let $button = document.querySelector('button');
            $button.addEventListener('click', function () {
                var order = new CameraChoose(camera.imageUrl, camera.name, camera.price, camera._id, numberOrder);
                var existingIndex = myLocalStorage.products.findIndex(element => camera._id == element.id)
                if (existingIndex == -1) {
                    myLocalStorage.products.push(order)
                } else {
                    myLocalStorage.products[existingIndex].quantity = order.quantity
                }
                localStorage.setItem('margaux_oc', JSON.stringify(myLocalStorage)) // Mettre dans le local storage l'objet
                location.href = './order.html'
            })
        });
    }).catch(function (error) {
        alert('Erreur, la page ne répond pas, veuillez nous excuser')
    });

})();