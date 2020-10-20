var city = "amsterdam"
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"


var city = "lOnDOn";
"London"


var city = "amsterdam"
undefined
city.length
9
city[0]
"a"
city[1]
"m"


var name="   Aakash  "
undefined
name.length
11
name.trim()
"Aakash"

var name="   Aakash .  "
undefined
name.trim()
"Aakash ."


var a = "John"
var b = "john"
var a = "John"
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true


var a = "John"
undefined
a.charAt(0)
"J"
a.slice(0)
"John"
a.slice(1)
"ohn"
a.slice(2)
"hn"
var city = "amsterdam"
undefined
city.slice(2,5)
"ste"


var city = "lOnDOn";
var city = "lOnDOn";
undefined
city.charAt(0).toUpperCase();
"L"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var city = "amsterdam"
undefined
city.slice(2,5)
"ste"
city.substring(2,5)
"ste"
city.substr(2,5)
"sterd"

slice(start,end)
substring(start,end)
substr(start,length)


var city = "amsterdam"


city.slice(-1)
"m"
city.substring(-1)
"amsterdam"
city.slice(-1,-3)
""
city.substring(-1,-3)
""
city.slice(-3,-1)
"da"
city.substring(-3,-1)
""
city.slice(-2)
"am"

var city = "amsterdam"
undefined
city.slice(2,-1)
"sterda"
city.substring(2,-1)
"am"
city.substring(2,-5)
"am"
city.slice(-1,2)
""
city.substring(-1,2)
"am"

var data ="i am learning JavaScript"
undefined
data.replace('JavaScript','JS')
"i am learning JS"
var data ="JavaScript i am learning JavaScript"
undefined
data.replace('JavaScript','JS')
"JS i am learning JavaScript"
data.replace(/JavaScript/g,'JS')
"JS i am learning JS"

var name="   Aakash .  "
undefined
name.replace(/ /g,'')
"Aakash."

var url="https://github.com/Aakashdeveloper/Angular5-Seed"
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Angular5-Seed"]

var data ="i am learning JavaScript"
undefined
data.split(' ')
(4) ["i", "am", "learning", "JavaScript"]

var a = "JavaScript"
undefined
a.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
var out = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
out.toString()
"J,a,v,a,S,c,r,i,p,t"
out.toString().replace(/,/g,'')
"JavaScript"