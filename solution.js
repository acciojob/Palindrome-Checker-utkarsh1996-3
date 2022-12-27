// c// complete the given function

function palindrome(str){
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, '');
  let backward = str.split('');
  backward = backward.reverse().join('').toString();
  return backward == str;

}
// console.log(palindrome("hello"));
// console.log(palindrome("race car"));
module.exports = palindrome
