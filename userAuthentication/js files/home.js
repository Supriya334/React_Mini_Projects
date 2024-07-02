let login = document.querySelector("#login")
let signup = document.querySelector("#signUp")

let myData = JSON.parse(localStorage.getItem('loggedStatus'))

if (myData) {
    login.innerHTML = `${myData.username}`
}

login.addEventListener('click', function () {
    window.location.href = "login.html"
})

signup.addEventListener('click', function () {
    window.location.href = "sign.html"
})
