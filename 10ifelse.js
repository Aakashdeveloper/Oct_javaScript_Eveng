if(condition){
    //do something
}else{
    //do something
}

var a = 87897
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 87897 is odd;


var name = "Bhumika";
if(name=="John"){
    console.log("You are admin")
}else if(name == 'Bhumika'){
    console.log("You are Super Admin")
}else if(name == 'Aakash'){
    console.log("You are User")
}else{
    console.log("I dont know")
}

"You are admin"

var role="Admin"
var name = "John";

if(role=="Admin"){
    if(name=="John"){
        console.log("You are system admin")
    }else if(name=="Jamie"){
        console.log("You are product admin")
    }else{
        console.log("You are admin") 
    }
}else if(role=="User"){
    if(name=="Anthony"){
        console.log("You are system user")
    }else if(name=="Brain"){
        console.log("You are product user")
    }else{
        console.log("You are user") 
    }
}else{
    console.log("I dont know")
}

/////////
var a = -1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}

var a = 1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Hii"

var a = 0
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Bie"

///////////
ternary (single line if else condition)
///////
var a = 10
a>10?"Hiii":"Biee"
"Biee"
var a = 10
a==10?"Hiii":"Biee"
"Hiii"


var a = 10
a==10?a+1:a-1
11
var a = 10
a>(10*2)?a+1:a-1
9

////////wrong////////
var a = 10
a==10?a+1:a-1?"hiii":"bie"
11
var a = 9
a==10?a+1:a-1?"hiii":"bie"
"hiii"
////////wrong////////

