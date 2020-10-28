/*
function add(){
   return  "Hi To Us"
}

console.log(add())
*/


(function(){
   console.log ("Hi To Us")
}())

///Generator////
function loop(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

loop(5)
0
1
2
3
4

function * loop(userinput){
    for(i=0;i<userinput;i++){
        yield i
    }
}

var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}