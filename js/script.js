// Récupération de l'API
const URLApi = "http://localhost:3000/api/cameras";
var $ul = document.querySelector(".product-list");


// Requête pour récupérer les données de l'API cameras
fetch(URLApi).then(function (response) {
    response.json().then(function (cameras) {
        for (const camera of cameras) {
            var $li = document.createElement('li'); // Je crée l'élément li 
            $ul.appendChild($li); // J'ajoute li dans le bloc ul

            $li.innerHTML = `<img src="${camera.imageUrl}"/> <div> <span>Référence</span> : ${camera._id} </div> <div> <span>Nom</span> : ${camera.name} </div> <div> <span>Prix</span> : ${camera.price} € </div> <div>${camera.description} </div>`; // J'intègre chaque éléments de ma requête

            // Dès que l'on clique sur le block li 
            $li.addEventListener('click', function () {
                let data = localStorage.getItem('margaux_oc')
                if (!data) {
                    data = {
                        selectedCameraId: "",
                        products: []
                    }
                } else {
                    data = JSON.parse(data)
                }

                data.selectedCameraId = camera._id
                localStorage.setItem('margaux_oc', JSON.stringify(data))
                location.href = './camera.html' // J'indique la page sur laquelle je veux faire suivre les info
            })

        }
    })
}).catch(function (error) {
    alert('Erreur, la page ne répond pas, veuillez nous excuser');

})






