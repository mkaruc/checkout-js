const removeButton= document.getElementById("remove")
 removeButton.addEventListener("click", disableProduct())
function disableProduct(){
    document.getElementById("product").style.display= "none"
}
