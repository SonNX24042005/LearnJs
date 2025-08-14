var nums=[1,34,5,6,7,6]
var iter=nums[Symbol.iterator]()
console.log(iter.next())


function customIterator(chars) {
         // To track index
         let n = 0;
         return {
            // next() method
            next() {
               if (n < chars.length) {
                  return {
                     value: chars[n++],
                     done: false
                  }
               }
               return {
                  done: true
               }
            }
         }
      }
const chars = ['A', 'C', 'E'];
const iter2 = customIterator(chars);


       // Empty object
       oddNum = {};
       // Add iterator 
       oddNum[Symbol.iterator] = function () {
          let p = -1;
          done = false;
          return {
             next() {
                p += 2;
                if (p == 9) return { done: true }
                return { value: p, done: done };
             }
          };
       }
       for (const odd in oddNum) {
        console.log(odd)
       }