//multiple condition and multiple output use (IF ELSE)
//one condition and multiple output use (switch)
//one condition one output (ternory)

var name = "Eva"
switch(name){
    case 'Aakash':
        console.log("You are user")
        break;
    case 'Eva':
        console.log("You are admin");
        break;
    default:
        console.log("I don't know")
}

VM452:7 You are admin


var a = 10
switch(a%2){
    case 0:
        console.log(`${a} is even`)
        break;
    case 1:
        console.log(`${a} is odd`)
        break;
    default:
        console.log("I don't know")
}


switch(new Date().getDay()){
    case 0:
        console.log("Its Sunday")
        break;
    case 1:
        console.log("Its Monday")
        break;
    case 5:
        console.log("Its Friday")
        break;
    default:
        console.log("Wrong Input")
}

var out = new Date().getDay()
if(out==0){
    console.log("Its Sunday") 
}else if(out==1){
    console.log("Its Monday") 
}