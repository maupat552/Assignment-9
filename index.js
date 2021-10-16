// Piano card
let container = document.querySelector('div.cards'); 
let newCard = document.createElement('div');
newCard.className = ('instrument 1');
let heading = document.createElement('h2');
heading.textContent = ('Piano');
let avatar = document.createElement('img');
avatar.src = 'Piano.jpg';
let about = document.createElement('p');
about.textContent = ('A piano has buttons that when pressed produce sound');

 newCard.appendChild(heading);
 newCard.appendChild(avatar);
 newCard.appendChild(about);
 
 container.appendChild(newCard);
 
//  Guitar card
let contain = document.querySelector('div.cards'); 
var guitar=document.createElement('div');
guitar.className= ('instrument 2');
var head = document.createElement('h2');
head.textContent=('Guitar');
let image = document.createElement('img');
image.src = 'Guitar.jpg';
var info = document.createElement('p');
info.textContent=('A guitar has 6 strings plucked to produce sound.');
guitar.appendChild(head);
guitar.appendChild(image);
guitar.appendChild(info);
contain.appendChild(guitar);



