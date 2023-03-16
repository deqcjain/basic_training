// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    let larg=-1,secLarg=-1;
    for(let i=0;i<array.length;i++){
      if(array[i]>larg){
        secLarg=larg;
        larg=array[i];
      }
      else if(array[i]>secLarg && array[i]!=larg){
        secLarg=array[i]
      }
    }
    return secLarg;
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
        const freq = Array(26).fill(0);
      for (let i = 0; i < string.length; i++) {
          const c = string.charAt(i);
  
          if (c >= 'a' && c <= 'z') {
              freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
          }
      }
  
        let res=[];
          for (let j = 0; j < string.length; j++) {
          const c = string.charAt(j);
          const n = freq[c.charCodeAt(0) - 'a'.charCodeAt(0)];
          if (n > 0) {
              res[c]=n
          }
      }
        return res;
    }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(obj) {
      // Write your code here
      let result={}
       for(let key in obj){
            if(typeof obj[key] === 'object'){
              for(let j in obj[key]){
                  result[key+'.'+j]=obj[key][j]
              }
            }
           else {
                result[key] = obj[key];
            }
        }
        return result;
    }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
    let result = {};
      for (let i in flatObject) {
        let keys = i.split(".");
        keys.reduce((acc, value, index) => {
          return (
            acc[value] ||
            (acc[value] = isNaN(Number(keys[index + 1]))
              ? keys.length - 1 === index
                ? flatObject[i]
                : {}
              : [])
          );
        }, result);
      }
      return result;
  }
  