console.log("Sharon Roja");
var a= 100;
a=200;
console.log(a);

var num = [2,4,6,8,10];
console.log(num[3]);

const books = {
    Author:"x",
    title:"abc",
    Published:"20-1-2000",

}
console.log(books.title);


const savings = 3000;
var cart = 0;
const Items = {
    dress : 900,
    snacks : 500,
    watch : 300,
    books : 400,
};
for(var shopping = 1; cart<=savings; shopping++)
{
    cart += Items.watch;
    console.log(shopping); 
}