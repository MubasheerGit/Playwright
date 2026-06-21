let ar =  [1, 2, 3, 4];

l = ar.length;
console.log(ar.length);
ar.push(6)
console.log("push : "+ar)
//ar.pop(2)
console.log("pop : "+ar)
ar.splice(1, 0,99, 56);
console.log("slice  :"+ar)
ar.shift();
console.log("Shift : "+ar)
ar.unshift(100);
console.log("unshift :"+ar)
