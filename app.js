const removeButton= document.getElementById("remove")
removeButton.forEach(item => {
    item.addEventListenter("click", () => {
        item.parentElement.parentElement.parentElement.parentElement.style.display="none"
        item.parentElement.nextElementSibling.querySelector("p>span").innerHTML = 0
        updateTotal()
    })
})

const totalPrice=document.getElementById("productTotal")
const totalPriceUpdating = function() {
    totalPrice.forEach((item) => {
        const parent = item.parentNode.parentNode.parentNode.parentNode

        const unitPrice = parent.getElementById("price").innerHTML

        const quantity = parent.getElementById("quantity").innerHTML

        item.innerHTML = (unitPrice * quantity).toFixed(2)
    })
}

const decreaseButton = document.getElementById("decrease")

decreaseButton.forEach( item => {
    const result = item.nextElementSibling

    item.addEventListener("click", ()=>{
        if(result.innerHTML > 1){
            result.innerHTML--
        }
        totalPriceUpdating()
        updateTotal()
    })
})

const increaseButton = document.getElementById("increase")

increaseButton.forEach(item => {
    const result = item.previousElementSibling
    item.addEventListener("click", ()=> {
        result.innerHTML++
        totalPriceUpdating()
        updateTotal()
    })
})

const total = document.getElementById("total")

const subtotal = document.getElementById("subtotal")

const tax = document.getElementById("tax")

const updateTotal = function() {
    let endTotal = 0

    total.forEach(item => {
        endTotal += +item.innerHTML
    })

    subtotal.innerHTML = endTotal.toFixed(2)

    tax.innerHTML = (endTotal * 18 / 100).toFixed(2)

    if(subtotal.innerHTML !== "0.00"){
        total.innerHTML = (endTotal + (endTotal * 18 / 100) + 15).toFixed(2)
    }else{
        total.innerHTML = subtotal.innerHTML
    }
}

updateTotal()