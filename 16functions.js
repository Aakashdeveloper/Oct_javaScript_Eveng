function
method
arrow function
IFFI
Generator
///////////\\\\\\\
var a = 10
var b = 20
a+b
30;

/////////////
function
//////

function add(a,b){
    return a+b
}
undefined

var sum = add(4,5)

add(2,4)
6
add(9,33)
42
add('a','b')
"ab"

/////
function isEven(userinput){
    var out;
    if(userinput%2==0){
        out=`Number ${userinput} is even`
    }else{
        out=`Number ${userinput} is odd`
    }
    return out
}

isEven(4)
"Number 4 is even"
isEven(5)
"Number 5 is odd"


function myfunc(a,b){
    return a,b
}
undefined
myfunc(3,5)
5
myfunc(3,5,4)
5
function myfunc(a,b){
    return b,a
}
undefined
myfunc(3,5)
3


function myfunc(a,b){
    var output = [a,b]
    return output
}
undefined
myfunc(4,5)
(2) [4, 5]


//////method/////
> when function assign to one variable it become method
//////
var add = function(a,b){
    return a+b
}

add(1,2)
3

/////////
Es6 >>>> arrow function
///////

var add = (a,b) => {return a+b}
add(1,2)
3

var add = (a,b) => {
    var out
    if(1){
        out = "Hi"
        return out
    }else{
        return out
    }
    
}