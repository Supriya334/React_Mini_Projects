let form = document.querySelector("form");
let data = [];
function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
}
function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
        data = savedData;
    }
}
function handleFormSubmit(e) {
    e.preventDefault()
    // console.log(e)
    let targetElement = e.target
    // console.log( targetElement)
    let username = targetElement[0].value
    let email = targetElement[1].value
    let password = targetElement[2].value
    let confirm = targetElement[3].value

    if (password == confirm){
        let narr = data.filter(function(ele,i){
            return ele.user === username
        })
        console.log(narr)
        
        if(narr.length>0){
            alert("username is already taken")
        }
        else{
      
        let obj={
            user : username,
            email : email,
            password : password
            
        }
        data.push(obj)
        saveData()
        console.log(data)
        alert("registration successful")
        window.location.href="login.html"
    }
   
    }
    else{
        alert("password not match")
}
    
    
}
form.addEventListener("submit", function(event){
    handleFormSubmit(event)
});
loadData();