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
let total_output = []; 

const password = document.getElementById("password");
const form1 = document.getElementById("form1");
const date_of_birth = document.getElementById("date_of_birth");
const reverse = document.getElementById("reverse");
const str = document.getElementById('something');
const ay=document.getElementById('ay');

const prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] ; 

const current_year = 2023;
const current_age = current_year - date_of_birth.value


const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const upperCase = /[A-Z]/;

const reversed_list = []
const reversed_numbers = [];

form1.addEventListener("submit", function(e) {
    e.preventDefault()

    // prime number
    for (let i=0 ; i<current_age.length ; i ++) {
        for (let j=0; j<prime_numbers.length ; j ++) {
            if (i == j ) {
                alert("Your age is a prime number");
            }
            else {
                alert("Your age is not a prime number");
            }
        }
        return current_age
        total_output.items.push(current_age)
    }

    // password
    for (let i=0; i<password.value.length ; i++ ) {
        if (password.value == " " || password.value == null || password.value.length <8 || !specialChar.test(password.value)
        || !upperCase.test(password.value)) {
            alert('wrong  password format!');
            return null 
            total_output.items.push(password.value)
        }
    }
    

    // reverse the numbers


    // palindrome
    something.addEventListener('submit', function() {
    if (isPalindrome(str) == true) {
        alert("it is a palindrome");
        console.log(isPalindrome(str));
    }
    else if (isPalindrome(str == false)) {
        alert("it is not a palindrome");
        console.log(isPalindrome(str));
    }
    })

    // adding ay to the word
    ay.addEventListener('submit', function(){
        const ay_reversed = ay.value; 
        const reversed = str.split("").reverse().join("") 
        const reversed_and_ayy = reversed +"ayy" 
        total_output.items.push(reversed_and_ayy)
        })
    
    
})





// id 10 prompt
const numbers = document.getElementById("numbers_id");
numbers.addEventListener("click", function (){
    var numbers_10_digits = prompt('Please type your 10 digit number:');
    const sortedArray = mergeSort(numbers_10_digits);
    total_output.items.push(sortedArray)
})



// alert shown (c)
const targetHeight = 800; // The height at which to trigger the alert
let alert_shown = false;

window.addEventListener('scroll', function() {
    if (window.scrollY >= targetHeight && alert_shown == false) {
    alert('Are you sure you want to continue?');
    alert_shown = true;
    }
    
});  


console.log(JSON.parse(total_output));




// from chaptgpt: 

function mergeSort(array) {
    // Base case
    if (array.length <= 1) {
      return array;
    }
  
    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    // Recursively call mergeSort on the left and right halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    // Merge the sorted left and right halves
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }




  function isPalindrome(str) {
    // Base case
    if (str.length <= 1) {
      return true;
    }
  
    // Compare first and last characters
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
      return false;
    }
  
    // Recursively call isPalindrome on substring without first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
  }


// try and catch
// Check if total_output is already an object
if (typeof total_output === 'object') {
    console.log(total_output);
  } else {
    // Parse total_output if it is a JSON string
    try {
      const outputObj = JSON.parse(total_output);
      console.log(outputObj);
    } catch (error) {
      console.error(`Error parsing JSON: ${error.message}`);
    }
  }

// my ip address

  const sum = 0;

  const hostname = window.location.hostname;
  fetch(`https://api.ipify.org/?format=json&hostname=${hostname}`)
    .then(response => response.json())
    .then(data => console.log(data.ip))
    .catch(error => console.error(error));

  for (let i=0 ; i<data.ip.length ; i ++) {
    if (i % 2 == 0) {
        sum += i
    }
  }
console.log(sum);

// location
const my_ip = document.getElementById("my_ip")

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    my_ip.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`
  }