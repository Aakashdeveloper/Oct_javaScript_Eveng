function human(name){
    this.name = name;
    this.city="London"
}

function robot(name){
    this.name = name;
    this.legs=2
    this.color="Red"
}

var john = new human('John')
var pepper = new robot('Pepper')

human.prototype = new robot()
var alvin = new human('alvin')

alvin.legs
2

alvin.color
"Red"