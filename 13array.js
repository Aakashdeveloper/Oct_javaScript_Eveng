array is a collection of homogenious datatype
var a = [1,35,46,57,64];
var b = ['a','errg','egrghr']
var c = [true,false,false,true]

array is a collection of homogenious as well as hetrogenious;
var a = [1,2,"Dv","fb",true,53,3,"dge","geg",true]

var city = ["London","Paris","Newyork","Amsterdam"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[city.length-1]
"Amsterdam"
typeof(city[0])
"string"

var city = ["London","Paris","Newyork","Amsterdam"]
undefined
city.push('Delhi')
5
city
(5) ["London", "Paris", "Newyork", "Amsterdam", "Delhi"]
city.push('Helsinki')
6
city
(6) ["London", "Paris", "Newyork", "Amsterdam", "Delhi", "Helsinki"]
city.pop()
"Helsinki"
city
(5) ["London", "Paris", "Newyork", "Amsterdam", "Delhi"]


var city = ["London","Paris","Newyork","Amsterdam","Delhi"]
undefined
city.pop(2)
"Delhi"
city
(4) ["London", "Paris", "Newyork", "Amsterdam"]
city.pop(200000)
"Amsterdam"

var city = ["London","Paris","Newyork","Amsterdam","Delhi"]
undefined
city.shift()
"London"
city.unshift('Nice')
5
city
(5) ["Nice", "Paris", "Newyork", "Amsterdam", "Delhi"]


push > add value always at the end of array
unshift > add value always at the begining of array
pop > remove always last value
shift > remove always first value

slice
splice 

var city = ["London","Paris","Newyork","Amsterdam","Delhi"]
undefined
city.slice(1)
(4) ["Paris", "Newyork", "Amsterdam", "Delhi"]
city
(5) ["London", "Paris", "Newyork", "Amsterdam", "Delhi"]
city.slice(2,4)
(2) ["Newyork", "Amsterdam"]

var city = ["London","Paris","Newyork","Amsterdam","Delhi"]
undefined
city.splice(2,1)
["Newyork"]
city
(4) ["London", "Paris", "Amsterdam", "Delhi"]
city.splice(2,0,"Insburg","Mumbai","Venice")
[]
city
(7) ["London", "Paris", "Insburg", "Mumbai", "Venice", "Amsterdam", "Delhi"]
city.splice(3,2,"Nice")
(2) ["Mumbai", "Venice"]
city
(6) ["London", "Paris", "Insburg", "Nice", "Amsterdam", "Delhi"]

var a = ['a','b','c',1];
var b = [5,'iu',9,true]
undefined
a+b
"a,b,c,15,iu,9,true"
var a = ['a','b','c',1]
var b = [5,'iu',9,true]
undefined
a+b
"a,b,c,15,iu,9,true"
a.concat(b)
(8) ["a", "b", "c", 1, 5, "iu", 9, true]
var c = ['i',34]
undefined
c.concat(a,b)
(10) ["i", 34, "a", "b", "c", 1, 5, "iu", 9, true]

var colors = ["Red","Yellow","Purple"];
var [a,b,c] = colors
a
"Red"
b
"Yellow"
c
"Purple"

var myarr = ["Delhi","Mumbai",["Audi","Bmw",[1,2,6],'Merc','AM'],'Paris','Amsterdam']
undefined
myarr.length
5
myarr[1]
"Mumbai"
myarr[2]
(5) ["Audi", "Bmw", Array(3), "Merc", "AM"]
myarr[2][0]
"Audi"
myarr[2][2]
(3) [1, 2, 6]
myarr[2][2][1]
2

var myarr = ["Delhi","Mumbai",["Audi","Bmw",[1,2,6],'Merc','AM'],'Paris','Amsterdam']
undefined
myarr.flat()
(9) ["Delhi", "Mumbai", "Audi", "Bmw", Array(3), "Merc", "AM", "Paris", "Amsterdam"]
myarr.flat(2)
(11) ["Delhi", "Mumbai", "Audi", "Bmw", 1, 2, 6, "Merc", "AM", "Paris", "Amsterdam"]
var a = ["Delhi", "Mumbai", "Audi", "Bmw", 1, 2, 6, "Merc", "AM", "Paris", "Amsterdam"]
undefined
a.sort()
(11) [1, 2, 6, "AM", "Amsterdam", "Audi", "Bmw", "Delhi", "Merc", "Mumbai", "Paris"]
a.reverse()
(11) ["Paris", "Mumbai", "Merc", "Delhi", "Bmw", "Audi", "Amsterdam", "AM", 6, 2, 1]

var a = ["Paris", "Mumbai",false,5, "Merc", "Delhi", "Bmw",true, "Audi", "Amsterdam", "AM", 6, 2, 1]
undefined
a.sort()
(14) [1, 2, 5, 6, "AM", "Amsterdam", "Audi", "Bmw", "Delhi", "Merc", "Mumbai", "Paris", false, true]