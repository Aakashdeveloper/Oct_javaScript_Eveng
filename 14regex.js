RegExp
Regular Expression 

^$

var a = "hi"
undefined
a.match("^([a-z])$")
null
var a = "h"
undefined
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

//exact 2
var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

//range(2 to 5)
var a = "hi"
a.match("^([a-z]{2,5})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

///any length(+)
var a = "hi"
a.match("^([a-z]+)$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

var a = "hi"
a.match("^([a-zA-H0-9]+)$")

var phone = 989889
phone.match("^([0-9]{10})$")
VM1440:2 Uncaught TypeError: phone.match is not a function

var phone = 989889
phone.toString().match("^([0-9]{10})$")
null

var phone = 9898899834
undefined
phone.toString().match("^([0-9]{10})$")
(2) ["9898899834", "9898899834", index: 0, input: "9898899834", groups: undefined]


//alphanumeric

var email = "a@a.com";

"^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$"

var email = "a@a.com";
undefined
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "@a.com";
undefined
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null