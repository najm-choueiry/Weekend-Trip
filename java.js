// changing language
function change_language () {
    if (option == "EN") {
       fetch(index.html);
;
    }
    else if (option == "AR") {
        fetch(arabic.html);;
;
    }
}


// 
let total_output = []

const password = document.getElementById("password");
const form1 = document.getElementById("form1");
const form3 = document.getElementById("form3");
const date_of_birth = document.getElementById("date_of_birth");


const prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] ; 

const current_year = 2023;
const current_age = current_year - date_of_birth.value[2]
console.log(current_age)

form1.addEventListener("submit", function(e) {
    e.preventDefault()

    // prime number
    for (let i=0 ; i<date_of_birth.value[2].length ; i ++) {
        for (let j=0; j<prime_numbers.length ; j ++) {
            if (i == j ) {
                alert("Your age is a prime number")
            }
            else {
                alert("Your age is not a prime number")
            }
        }
    }

    // 
})


// id 10 prompt
const numbers = document.getElementById("numbers_id");
numbers.addEventListener("click", function (){
    var result = prompt('Please type your 10 digit number:');
    numbers.textContent = result
})

// password


const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const upperCase = /[A-Z]/;


form3.addEventListener("submit", function(){
    if (password.value == " " || password.value == null || password.value.length <8 || !specialChar.test(password.value)
    || !upperCase.test(password.value)) {
    alert('wrong  password format!');

    }}) 




// alert shown (c)
const targetHeight = 800; // The height at which to trigger the alert
let alert_shown = false;
window.addEventListener('scroll', function() {
    if (window.scrollY >= targetHeight && alert_shown == false) {
    alert('Are you sure you want to continue?');
    alert_shown = true;
    }
    
});  



// my ip
const my_ip = document.getElementsByClassName("my_ip")

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // use the IP address
    console.log(data.ip);
  })
  .catch(error => {
    console.error(error);
   my_ip.innerHTML = error 
});