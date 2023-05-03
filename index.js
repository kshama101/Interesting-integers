/*Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
*/ 

const countNumber = (low, high)=>{
    let count = 0;
    for(let i = low; i<=high; i++){
        if(i%2!=0){
        count+=1
        }
    }
    return count;
}
 




/*Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits
 it has (also known as the Hamming weight).

 Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/

 
 var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((total,item)=>item == 1 ? total + 1 : total, 0)
};






/*Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/
 

var subtractProductAndSum = function(n){
    var arr = String(n).split("").map((n)=>{return Number(n)});
   var product = 1;
   var sum = 0;
    for(var i =0; i< arr.length; i++){
       
            product*=arr[i];
            sum+=arr[i]
       
    }
    return product - sum
};



