let form = document.querySelector("#login-form")

let data;
function loadData() {
    let savedData = JSON.parse(localStorage.getItem('data'));
    if (savedData) {
        data = savedData
    }
}
function handleFormSubmit(event) {
    event.preventDefault()
    let targetElement = event.target

    let email = targetElement[0].value;
    let password = targetElement[1].value;

    let narr = data.filter(function (ele, i) {

        return (ele.email === email) && (ele.password === password)
    })

    if (narr.length > 0) {

        localStorage.setItem('loggedStatus', JSON.stringify({ status: true, username: narr[0].user }))

        alert('logged in successful')
        window.location.href = "home.html"
    }

    else {
        alert('wrong credentials')

    }
}

form.addEventListener('submit', function (event) {
    handleFormSubmit(event)
})

loadData()