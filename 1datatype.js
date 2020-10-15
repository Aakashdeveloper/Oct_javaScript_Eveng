String
Number
Boolean

string = "hdbhj" 'dvdv' '34324' "4325" 'true' "false"
number = 656 77678678 76.76576 .767
Boolean = true / false 
null
undefined

/////////
Es5 > Ecma Script 5
Es6 > Ecma Script 6
///////

////es5////
var a = "hi"
var b = 10
var c = true

typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"

var d = 85.464
typeof(d)
"number"
var e = "85.464"
typeof(e)
"string"
var e = '3ed34'
typeof(e)
"string"

///////

var a = 10
var b = 5
undefined
a+b
15 (add)
a-b
5
a*b
50
a/b
2
4%2
0
3%2
1

4%2
0
4%3
1

2%4
2
3%4
3
100%200
100
>>>>> modules of smaller to higher is always smaller

/////////
var a = "Hi"
undefined
var b = "javaScript"
undefined
a+b  (concat)
"HijavaScript"
a-b
NaN > not a number
a*b
NaN
a/b
NaN

a+c
"Hi10"
c+a
"10Hi"

string + string = string
string + number = string
number + string = string
number + number = number

10+"20"+30
> "1020"+30
> "102030"

"10"+20+30
>"1020"+30
> "102030"

10+20+"30"
>30+"30"
> "3030"

10+"20"+30-1
> 102029
"10"+20+30-1
> 102029
10+20+"30"-1
> 3029