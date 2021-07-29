/*
Write a range function that takes two arguments, start and end , and returns
an array containing all the numbers from start up to (and including) end .
*/


let arayOfNumbersInRange= [];
function nRange(start, end){
	for(let count=start; count<=end; count++){
    	arayOfNumbersInRange.push(count);
    }
  return arayOfNumbersInRange;
}





/*
write a sum function that takes an array of numbers and returns the
sum of these numbers*/

let sum=0;
function sumArray(anArray){
  
for(let count of anArray){
	sum+=count;
}
  return sum
}
/* Run the example program and see whether it does
indeed return 55.*/


console.log(nRange(1, 10));
//>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sumArray(arayOfNumbersInRange));
 //>55


 /*
 As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior.
*/


function nRange(start, end, step){
	if(step==undefined){
 		for(let count=start; count<=end; count++){
    	arayOfNumbersInRange.push(count);}
    }
    else{
    	let count=Math.min(start, end);
        let stop=Math.max(start, end);
        while(count<=stop){
            arayOfNumbersInRange.push(count);
            count += step;
        }
    }
    return arayOfNumbersInRange;

}

