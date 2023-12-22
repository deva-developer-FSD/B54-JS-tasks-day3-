//1) programs in anonymous function & IIFE

// a).Print odd numbers in an array

// anonymous function

var array=[1,2,3,4,5,6,7,8,9,];
var a = function (array){
    for (var i=0; i<array.length;i++){
        if(array[i]%2!=0){
        console.log(array[i]);
    }

    }
}(array);


// IIFE

var devaArr=[1,2,3,4,5,6,7,8,9];
 (function (devaArr)
 {
    for(var i=0; i<devaArr.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(devaArr[i]);
      }
    }
 })(devaArr);

// -----------------------------------------------------//

// b.Convert all the strings to title caps in a string array

// anonymous function

var Deva= ["iam ","deva","iam","mernstack","developer"];

let titleArr = Deva.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleArr);

// IIFE

var Arrdev = ["iam ","learn","mernstack","course"];

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
})(Arrdev);

console.log(Arrdev);

// -----------------------------------------------------//

// c) Sum of all numbers in an array

//  anonymous function

var deva=[1,2,3,4,5,6,7,8,9];
var sum=0;
let anony=function (deva)
{
   for(let i=0; i<deva.length; i++)
   {
     sum=sum+deva[i];
   }
   return sum;
}
anony(deva);

// IIFE

var numbers = [1, 2, 3, 4, 5,6,7,8,9];

var sum = (function(arr) {
  var deva = 0;
  for (var i = 0; i < arr.length; i++) {
    deva += arr[i];
  }
  return deva;
})(numbers);

console.log(sum); 

// ---------------------------------------------------//

// d)Return all the prime numbers in an array

//  anonymous function
let n=34;
let prime=function (n)
{
   for(let i=2; i<=n; i++)
   {
      let a=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            a=1;
            break;
         }
      }
      if(a==0)
      {
         console.log(i);
      }
   }
}
prime(n);

// IIFE

let m=34;
(function (m)
{
   for(let i=2; i<=m; i++)
   {
      let deva=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            deva=1;
            break;
         }
      }
      if(deva==0)
      {
         console.log(i);
      }
   }
})(m);

// --------------------------------------------------------//

// e) Return all the palindromes in an array

 //  anonymous function

var words = ["level", "hello", "ramar","kevin", "world", "civic"];

var isPalindrome = function(a) {
  var b = a.split("").reverse().join("");
  return a === b;
};

var palindromeWords = words.filter(function(a) {
  return isPalindrome(a);
});

console.log("Palindromes:", palindromeWords);


// IIFE

var words = ["level", "hello", "racecar", "javaj", "world", "deed"];

var palindromes = (function(arr) {
  return arr.filter(function(word) {
    var lov = word.split('').reverse().join('');
    return word === lov;
  });
})(words);

console.log("Palindromes:", palindromes);

// -----------------------------------------------------//

// f) Return median of two sorted arrays of the same size.

 //  anonymous function

 var findMedian = (arr1, arr2) => {
    var devArr = [...arr1, ...arr2].sort((a, b) => a - b);
    var length = devArr.length;
  
    return length % 2 === 0
      ? (devArr[length / 2 - 1] + devArr[length / 2]) / 2
      :devArr[Math.floor(length / 2)];
  };
  
  var arr1 = [1, 3, 5];
  var arr2 = [2, 4, 6];
  
  var devmedian = findMedian(arr1, arr2);
  console.log(devmedian);

//   IIFE

var Median = (function() {
 
    function MedianSortedArray(arr) {
        var n = arr.length;
        if (n % 2 === 0) {
           var mid1 = arr[n / 2 - 1];
            var mid2 = arr[n / 2];
            return (mid1 + mid2) / 2;
        } else {
            return arr[Math.floor(n / 2)];
        }
    }

   
       return function(arr1, arr2) {
      var combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
       return MedianSortedArray(combinedArray);
    };
})();

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
var devmedian = Median(arr1, arr2);
console.log(devmedian); 

// --------------------------------------------//

//g) Remove duplicates from an array.

// anonymous function

var array = [1, 2, 6,7,3, 4, 2, 5, 6, 1,2,3,4,5,7,8,9,];

var devArr = array.filter(function(item, index, self) {
    
    return index === self.indexOf(item);
});

console.log(devArr);

// IIFE
var arr = [ 4, 4, 5, 6, 6, 7,1,2,3,4,5,6,7,8,9,];

(function () {
    arr = [...new Set(arr)];
})();

console.log(arr);

// -------------------------------------------------//

// h) Rotate an array by k times

// anonymous function

let rotateDevArr = function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
  };
  
  let myArray = [1, 2, 3, 4, 5,7,8,9,2,4];
  let rotations = 2;
  
  let rotateArr = rotateDevArr(myArray, rotations);
  console.log("suthuuuu",rotateArr);

//   IIFE

(function () {
    
    var array = [1, 2, 3, 4, 5,6,7,8,9,];
    var k = 2;

    var suthalARR = (function(arr, rotations) {
      rotations = rotations % arr.length; 
      return arr.slice(rotations).concat(arr.slice(0, rotations));
    })(array, k);
  
    console.log("Original Array:", array);
    console.log("Suthuuuu Array:", suthalARR);
  })();


  
//   _______________________________________________________________________________________//


//   (2) programs in arrow functions.

// a) Print odd numbers in an array

// Arrow Function 

var y=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

var odd=(array)=>{
   var arr=[];
   for(var i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

// ------------------------------------------------//

// B).Convert all the strings to title caps in a string array

// Arrow Function

var str="iam devendhran , iam mernstack developer";
var dev = (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(dev (str));

// ----------------------------------------------------//

// c) Sum of all numbers in an array

// Arrow Function

var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var sum=0;
var dev =(a)=>
{
   for(var i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(dev(a));

// -----------------------------------------------------//


// D.Return all the prime numbers in an array

// Arrow Function

var p =40;
var l=(p)=>
{
   for(let i=2; i<=p; i++)
   {
      var flag=0;
      for(var j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(p));

// ----------------------------------------------------//

// Return all the palindromes in an array

// Arrow Function

var isPalindrome = (str) => {
   var reversedStr = str.split('').reverse().join('');
   return str === reversedStr;
 };
 
 var findPalindromes = (arr) => {
   var palindromes = [];
 
   for (let i = 0; i < arr.length; i++) {
     if (isPalindrome(arr[i])) {
       palindromes.push(arr[i]);
     }
   }
 
   return palindromes;
 };
 
 var normalArray = ['level', 'hello', 'world', 'madam','ayya','amma','appa'];
 var palindromesInArray = findPalindromes(normalArray);
 
 console.log("Normal Array:", normalArray);
 console.log("Palindromes in NorArray:", palindromesInArray);

//  --------------------------------------------------//
 









