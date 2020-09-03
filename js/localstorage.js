class Storage {
    constructor(){
        if (!localStorage.margaux_oc){
            const data = { 
                selectedCameraId:"", 
                productsSelected : []
            }
        localStorage.margaux_oc = JSON.stringify(data)
        }
    }

    setSelectedId(value){
        const data = JSON.parse(localStorage.margaux_oc)
        data.selectedCameraId = 
    }
}