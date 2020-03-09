const checkPalindrome = str =>
  str ===
  str
    .split('')
    .reverse()
    .join('');

console.log(checkPalindrome('ibu ratna antar ubi'));
console.log(checkPalindrome('kasur ini rusak'));
console.log(checkPalindrome('A nut for a jar of tuna.'));
console.log(checkPalindrome('Borrow or rob?'));
console.log(checkPalindrome('Was it a car or a cat I saw?'));
console.log(checkPalindrome('Yo, banana boy!'));
console.log(checkPalindrome('A man, a plan, a canal. Panama.'));
