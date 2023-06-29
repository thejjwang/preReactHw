function returnSum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
returnSum([1, 2, 3, 4, 5, 6]);

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
isPalindrome("racecar");

function randomQuote(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
randomQuote(["I", "like", "javascript", "I", "love", "javascript"]);