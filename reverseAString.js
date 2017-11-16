function reverseString(str) {
  var strArray = [];
  strArray=str.split("");
  //console.log("splitting the string:");
  //console.log("strArray");
  strArray.reverse();
  //console.log("after reverse");
  //console.log("strArray");
  var reverseStr = strArray.join("");
  console.log('after join');
  console.log(reverseStr);
  
  return str;
}

reverseString("Hello");


//Upgraded Code -- shrunk down to two lines
function reverseString(str) {
  return str.split("").reverse().join("");
}