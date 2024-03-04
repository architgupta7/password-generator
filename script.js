let inputSlider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervlaue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbol = document.getElementById("Symbol");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");

// showing input slider value
slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    slidervalue.textContent = inputSlider.value;
});

genbtn.addEventListener('click' , ()=>{
    passbox.value = generatePassword();
});
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allsymbol = "!@#$%^&*()_+"
// function to generate password

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerchars : "";
    allChars += Uppercase.checked ? upperChars : "";
    allChars += Numbers.checked ? allNumbers : "";
    allChars += Symbol.checked ? allsymbol : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value){    
 genPassword +=allChars.charAt( Math.floor(Math.random() * allChars.length));
 i++;
}
 return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passbox.value != "" || passbox.value.length>=1){
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText ="check";
    copyIcon.title="Ek Paaword yad nahi rakh sakta"

    setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title=""
    },5000)
}
})