localStorage
> persistent Storage
> save wrt to browser

localStorage.setItem('token','4554vw55')
undefined
localStorage.getItem('token')
"4554vw55"
localStorage.removeItem('token')
localStorage.setItem('ltk','_ltk8998')
undefined
localStorage.setItem('token','4554vw55')
undefined
PWA 


sessionStorage
> non persistent Storage 
> save wrt to tab

sessionStorage.setItem('_rtk__','98n988hu')
undefined
sessionStorage.getItem('_rtk__')
"98n988hu"
sessionStorage.removeItem('_rtk__')

cookies
> save wrt to website 
> expire in time 

document.cookie
"_ga=GA1.2.1880173027.1602255983; location=45.33; _gid=GA1.2.1511909836.1603291921; _gat_gtag_UA_131256843_1=1"
document.cookie="origin=delhi"
"origin=delhi"

document.cookie="place=mumbai;expires=Sat, 24 Oct 2020 01:00:00 UTC;"