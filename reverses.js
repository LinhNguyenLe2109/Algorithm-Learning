// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.


function reverse(str){
    let char = '';
    if(str.length === 0){
        return char;
    }
    char = str[str.length - 1];
    return char  + reverse(str.slice(0, -1));
    // add whatever parameters you deem necessary - good luck!
  }
  
  console.log(reverse('awesome')); // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'