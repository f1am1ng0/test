function palindrom(str){
    for (let i=0; i<str.length; i++) {
    if (str[i] !== str[str.lenght-i-1]){
    return false
    }
    }
    return true }
    // ან
    // function checkPalindrome(string) {
    //  const len = string.length;
    //  for (let i = 0; i < len / 2; i++) {
    //  if (string[i] !== string[len - 1 - i]) {
    //  return 'It is not a palindrome';
    //  }
    //  }
    //  return 'It is a palindrome';
    // }
    // const string = prompt('Enter a string: ');
    // const value = checkPalindrome(string);
    // console.log(value);