const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const loginBtn = document.querySelector(".login");
const errorMsg = document.querySelectorAll(".errormsg");
const borRed = document.querySelectorAll(".error-input");
let loginPage = document.querySelector(".login-sucessfull");

loginBtn.addEventListener("click",()=>{
    let userVal = userName.value;
    if(userName.value.length == 0 && passWord.value.length ==0){
        for(i=0;i<errorMsg.length && i<borRed.length; i++){
            errorMsg[i].classList.add("error-msg-show");
            borRed[i].classList.add("bor-red");

        }
    }else if(passWord.value.length == 0){
        errorMsg[0].classList.remove("error-msg-show");
        borRed[0].classList.remove("bor-red");
        errorMsg[1].classList.add("error-msg-show");
        borRed[1].classList.add("bor-red");
    }
    else if(userName.value.length == 0){
        errorMsg[0].classList.add("error-msg-show");
        borRed[0].classList.add("bor-red");
        errorMsg[1].classList.remove("error-msg-show");
        borRed[1].classList.remove("bor-red");

    }else{
        if(userName.value.length>0 && passWord.value.length>0){
            for(i=0; i<errorMsg.length && i<borRed.length; i++){
                errorMsg[i].classList.remove("error-msg-show")
                borRed[i].classList.remove("bor-red");
            }
        }
    }
    setTimeout(()=>{
        for( i=0 ; i<errorMsg.length && i<borRed.length; i++){
            errorMsg[i].classList.remove("error-msg-show");
            borRed[i].classList.remove("bor-red");
        }
    },2000)
    
    if(userName.value.length>0 && userName.value == userVal && passWord.value == "123"){
        loginPage.classList.add('after-login');
        document.getElementById("yourname").innerText = userVal;
        userName.value = "";
        passWord.value = "";
    }else if(userName.value.length>0 && passWord.value.length>0 && passWord.value !== "123" ){
        document.querySelector(".correct-details").innerText = "Incorrect Password";
        passWord.value = "";
        setTimeout(()=>{
            document.querySelector(".correct-details").innerText = "";
        },1500)
    }
    document.getElementById("logout").addEventListener("click",()=>{
        loginPage.classList.remove('after-login');
    })
    


})