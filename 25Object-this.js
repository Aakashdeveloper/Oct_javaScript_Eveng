var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}


//Say Hi to Michal Peter
/*var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}
Say Hi to Zoe lisa
*/
console.log(sayHi.greet())


/////constructor/////
var bob = new Object();
bob.age = 10
bob.city = "Newyork"
bob.setAge = function(newAge){
    this.age = newAge
}

var tony = new Object();
tony.age = 10
tony.city = "Newyork"
tony.setAge = function(newAge){
    this.age = newAge
}


///////
var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10
bob.city = "Newyork"
bob.setAge = createAge

var tony = new Object();
tony.age = 10
tony.city = "Newyork"
tony.setAge = createAge