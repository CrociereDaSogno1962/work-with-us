function inviaForm() {
    if(document.querySelector("form").checkValidity()){
        document.getElementById("invioForm").classList.remove("d-none")
    }
}