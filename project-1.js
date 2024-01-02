let button=document.querySelector('#New-Quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

let quotes=[{
    quote:`Life is what happens when you're busy making other plans."`,person:`John Lennon`},
{
    quote:` "Get busy living or get busy dying."`,person:`Stephen King`},
{
    quote:`"You only live once, but if you do it right, once is enough."`,person:` Mae West`},
{   
    quote:` "Many of life's failures are people who did not realize how close they were to success when they gave up."`,person:`Thomas A. Edison`
},
{
    quote:` "If you want to live a happy life, tie it to a goal, not to people or things."`,person:` Albert Einstein`
}
];

button.addEventListener('click',function(){
    random = Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})