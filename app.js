const removeButton= document.querySelectorAll(".remove")
removeButton.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.parentElement.style.display="none"
        item.parentElement.nextElementSibling.querySelector("p>span").innerHTML = 0
        updateTotal()
    })
})

const totalPrice=document.querySelectorAll(".countedTotal")
const totalPriceUpdating = function() {
    totalPrice.forEach((item) => {
        const parent = item.parentNode.parentNode.parentNode.parentNode

        const unitPrice = parent.querySelector(".price").innerHTML

        const quantity = parent.querySelector(".quantity").innerHTML
console.log(quantity)        
        item.innerHTML = (unitPrice * quantity).toFixed(2)
    })
}

const decreaseButton = document.querySelectorAll(".decrease")

decreaseButton.forEach( item => {
    const result = item.nextElementSibling

    item.addEventListener("click", ()=>{
        if(result.innerHTML > 1){
            result.innerHTML--
        
        totalPriceUpdating()
        updateTotal()}
    })
})

const increaseButton = document.querySelectorAll(".increase")

increaseButton.forEach(item => {
    const result = item.previousElementSibling
    item.addEventListener("click", ()=> {
        result.innerHTML++
        totalPriceUpdating()
        updateTotal()
    })
})

const total = document.querySelector("#total")

const subtotal = document.querySelector("#subtotal")

const tax = document.querySelector("#tax")

const updateTotal = function() {
    let endTotal = 0

    totalPrice.forEach(item => {
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

