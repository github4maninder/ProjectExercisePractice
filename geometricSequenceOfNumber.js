/* How to count a number as a geometric sequence/progression
output will be :  "1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096..."
input of n will be "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13...".
geometricSequence is the function with recursion
*/

function geometricSequence(n) {
       if(n===0){
              return 1;
       }else{
              return 2 * (geometricSequence(n-1));
       };
};
console.log(geometricSequence(8));