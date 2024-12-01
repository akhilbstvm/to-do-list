const form=document.getElementById("form")
form.addEventListener('submit',(event) => {

    event.preventDefault()
    const username=form.username.value 
    const email=form.email.value 
    const password=form.password.value
    const conformpassword=form.conformpassword.value
    const emailRegex='.*?@?[^@]*\.+.*'
const passwordRegex='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'


console.log(emailRegex)
let isvalid=true;
if(username.trim().length<3){
    document.getElementById("usernameError").innerText="Minimum Three Charactors Required"
    isvalid=false
    
}

if(!email.match(emailRegex)){
    document.getElementById("emailError").innerText="Enter a valid Email address"
    isvalid=false
    
}

if(!password.match(passwordRegex)){
    document.getElementById("passwordError").innerText="Password Must be atleast six characters legnth,contain atleast one symbol, lower, uppercase,number"
    isvalid=false
    

}
if(conformpassword !== password){
document.getElementById("conformpasswordError").innerText="password doesnot match"
isvalid=false

}
if(isvalid){

    form.submit()
    form.reset()
}

}) 

