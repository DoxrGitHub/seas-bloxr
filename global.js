/* sitedata.json */

let object = window.siteData;

/* ***************** */

let post = window.location.pathname.split("/")[2];
console.log(object)
object = object[post]
console.log(object, object.title)
document.title = object.title