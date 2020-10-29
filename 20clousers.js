//enclose something
//local scope
//global scope

/*
var a = 10
function add(){
    var b = 20
    return a+b
}

console.log("sum>>>",add())

console.log("a>>>",a);

console.log("b>>>",b)
*/

var a = 10;
for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>",a);
console.log("b>>>",b)

///variable that can be access outside the curly bracket and inside is in global scope
///variable that can be access only in the curly bracket local scope


/////////
mul(3)(4)(5)

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(3)(4)(5)
60


function mul(a,b,c){
    return a*b*c
}