const sentence = ['sense.','make','all','will','This'];


function reverseArray(Array){
  let n = Array.length;
  let newArray = [];
  for(i=0;i<n;i++){
    let newElement = Array.shift();
    newArray.unshift(newElement);
  }
  return newArray;  
}
//everseArray(sentence);

console.log(reverseArray(sentence));
//ok IT WORKS

