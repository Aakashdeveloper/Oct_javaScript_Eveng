var a = [4,5,3,8,9,34,56,78]
a.map((data) => {console.log(data)})
a.map((data) => {return data*2})
[8, 10, 6, 16, 18, 68, 112, 156]

> map is use to iterarte over the Array
> it always  return same length of output as input array
> it is use to apply the logics like(sum,mul ) bind with html

a.map((data) => {return `<p>${data}</p>`})


var b = [20,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[35, 34, 26, 67, 32]

b.map((abc) => {return abc>25})
[false, true, true, true, true, false, false, true]

> filter is use to filter out the value from array
> it may or may not return same length of input array
> it only return those value for which out/condition is true

var a = [0,1,2,3]
a.map((data) => {return data*2})
 [0, 2, 4, 6]

a.filter((data) => {return data*2})
[1, 2, 3]