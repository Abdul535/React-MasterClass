let arr = ["a","b","c","d"];

//implerative Style : saying what to do
for(let i=0 ; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("--------")

//Declarative : saying whom to do
for (const key in arr) {
    console.log(arr[key]);
    console.log(key);
}
console.log("--------")

for (const key of arr) {
    console.log(key);
}