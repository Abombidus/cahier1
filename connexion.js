// Variable  du formulaire
const userPhone = document.getElementById("phone")
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")

// Variable pour des boutons
const BtnConnexion = document.getElementById("seConnecter")
const BtnInscription = document.getElementById("inscription")
const BtnCommander = document.getElementById("commander")

let nom = ""
let email = ""
let numero = ""

BtnInscription.addEventListener("click", () => {
    if (userName.value === "" || userEmail.value === "" || userPhone === "") {
        userEmail.style.border = "2px solid red"
        userEmail.style.transition = "80ms ease"

        userName.style.border = "2px solid red"
        userName.style.transition = "80ms ease"

        userPhone.style.border = "2px solid red"
        userPhone.style.transition = "80ms ease"
    }

    else {
        nom += userName.value
        email += userEmail.value
        numero += userPhone.value

        console.log(JSON.stringify(`{name:${nom},
                        email:${email},
                    phone:${numero}}`))
    }

    let afterName = userName.value = ""
    let afteremail = userEmail.value = ""
    let afterphone = userPhone.value = ""
}
)



// const one = document.getElementById("one")
// const send = document.getElementById("send")

// send.addEventListener('click', () => {
//     let chiffre = one.value
//     console.log(chiffre)
// })