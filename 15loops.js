for
while loop
do while loop
for of 
for in > objects
/////////
for(var i=0;i<5;i++){
    console.log(i)
}

var city = ["London", "Paris", "Insburg", "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(i=0;i<city.length;i++){
    console.log(`My City is ${city[i]}`)
}
My City is London
My City is Paris
My City is Insburg
My City is Mumbai
My City is Venice
My City is Amsterdam
My City is Delhi

var city = ["London", "Paris", "Innsburg",['red','yellow','green'], "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(i=0;i<city.length;i++){
    console.log(city[i])
}

London
VM68:3 Paris
VM68:3 Innsburg
VM68:3 (3) ["red", "yellow", "green"]
VM68:3 Mumbai
VM68:3 Venice
VM68:3 Amsterdam


var a = "10"
Array.isArray(a)
false
var b = [20,35,34,26,67,21,19,32]
Array.isArray(b)
true

var city = ["London", "Paris", "Innsburg",['red','yellow','green'], "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

//////
while
//////

var i = 10;
while(i<5){
    console.log(i);
    i++
}

//////
Do while
//////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

/////for of/////
var city = ["London", "Paris", "Innsburg", "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Paris", "Innsburg",['red','yellow','green'], "Mumbai", "Venice", "Amsterdam", "Delhi"];

for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
          console.log(color)  
        }
    }else{
        console.log(mycity)
    }
}