var moviename = "Avenger";
var movierating = 4.5;
var movielang = "Eng";

var moviename1 = "Jab We met";
var movierating1 = 4.5;
var movielang1= "Hindi";


///liternal Notation
var movies = {
    name:'Death Race',
    rating:3,
    lang:'Eng'
}
typeof(movies)
"object"
movies.name
"Death Race"
movies.rating
3
movies.lang
"Eng"
movies.ind="Hollywood"
"Hollywood"
movies.rating=3.5
3.5
movies
{name: "Death Race", rating: 3.5, lang: "Eng", ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Death Race", rating: 3.5, ind: "Hollywood"}

movies['name']


/////////
var calc = {
    sum:function(a,b) {return a+b},
    sub:(a,b) => {return a-b}
}
undefined
calc.sum(3,6)
9
calc.sub(9,6)
3

var dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values (${data.name},${data.city})`}
}

dbQuery.find('Emp')
"Select * from Emp"

dbQuery.insert('Student',{name:'John',city:'Delhi'})
"Insert into Student name,city values (John,Delhi)"