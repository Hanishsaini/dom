// const playground =document.getElementById('playground');

 //const magicalorb = document.createElement('div');
//magicalorb.textContent ='orb';
//playground.append(magicalorb);





////////
//const scrollofwisdom =document.createElement('p');
//playground.append(scrollofwisdom);

//scrollofwisdom.innerText ='ancient wisdom lies within';
//console.log(scrollofwisdom,innerText);
////////





//console.log(playground.innerText);
//console.log(playground.textContent);



//working with html content
//const spellbook =document.createElement('div');
//spellbook.innerHTML ='hi my name io daddy';
//playground.append(spellbook);


//const userinput ='y are hacked';
//playground.innerHTML =userinput;




//removing elements
//const fixedelement =document.createElement('p');
//fixedelement.textContent ="now u see me ";
//playground.append(fixedelement);

//fixedelement.remove();
//playground.removeChild(fixedelement);




// const fruitbasket = document.createElement('div');
// //below the string is in diff paras
// fruitbasket.innerHTML = 'apple bannna fraps '
// playground.append(fruitbasket);

// while(fruitbasket) {
//     fruitbasket.removeChild(fruitbasket);
// }


// //set the attributes 
// const magicwand =document.createElement('div');
// magicwand.setAttribute('id','wand1');
// magicwand.setAttribute('class','magical-item wand');
// magicwand.textContent ="magic wand";
// playground.append(magicwand);
// //get the attributes 
// console.log(magicwand.getAttribute('id'));
// console.log(playground.getAttribute('id'));
// console.log(magicwand.getAttribute('class'));
// //oooooooooooorrrrrrrrrrrrrrrrrr
// console.log(magicwand.id);
// console.log(magicwand.className);
// //or we can se attributes like this 
// magicwand.id ="wand3";
// console.log(magicwand.id);




//data attributes
// const setscroll =document.createElement('div');
// //setting data attributes 
// setscroll.id ='setscroll';
// setscroll.dataset.set ='invisiblity';
// setscroll.dataset.components ='monlight,shadow essence';
// setscroll.innerText ="ancient spell scroll";

// playground.append(setscroll);

// //getting data atributes
// console.log("spell type:", setscroll.dataset.spell);
// console.log("components:", setscroll.dataset.components.split(','));






// //manipulating classes
// const shapeshifters =document.createElement('div');
// shapeshifters.textContent ="shapefiters ";
// playground.append(shapeshifters);
// //adding a classname 
// shapeshifters.classList.add('magical','creature');
// console.log("intial classes",shapeshifters.className);
// //removing or adding a classname 
// shapeshifters.classList.remove('creature');
// shapeshifters.classList.add('humanoid');
// //updating the class on the console
// console.log("updated classes:", shapeshifters.className);
// //toggle effect or adding an element on the existing class or by double writing it remove it 
//  shapeshifters.classList.toggle('invisible');
//  shapeshifters.classList.toggle('invisible');
//  console.log(shapeshifters.classList.contains('invisible'));
    





// //inline styles
// const hanish =document.createElement('div');
// hanish.textContent =('fuckkkk');
// hanish.Style.fontsize = '70px';
// hanish.style.transition ='all 2s';
// playground.append(hanish);






//event handlig
// const magicbutton =document.createElement('button');
// magicbutton.textContent ='cast spell';
// playground.append(magicbutton);
// //implement the pop up of event 
// magicbutton.addEventListener('click', () =>{
//     alert('magic sparkles fill the air');
// } );

// //color hover effect on the buton
// magicbutton.addEventListener('mouseover', (Event) => {
//     Event.target.style.backgroundColor ='purple';
// });

// magicbutton.addEventListener('mouseout', (Event) => {
//     Event.target.style.backgroundColor ='';
// });
//2nd way of doing it (pop uo message)
// function spellcast (){
//     alert ('fuck off');
// };

// magicbutton.addEventListener('click',spellcast);
// //if we want to remove event 
// magicbutton.removeEventListener('click',spellcast);



// //adding and removing elements dynamically
// const spellList = document.createElement('ul');
// playground.append(spellList);

// function addspell(spellName) {
//     const spell = document.createElement('li');
//     spell.textContent = spellName;  // ✅ Fixed here

//     const removebutton = document.createElement('button');
//     removebutton.textContent = 'remove'; // ✅ use textContent instead of text

//     removebutton.addEventListener('click', () => spell.remove());

//     spell.append(removebutton);
//     spellList.append(spell);
// }

// addspell('chut');
// addspell('boobs');



// //travesing the dom
// const parentelement =document.createElement('div');
// const childelement1 =document.createElement('p');
// const childelement2 =document.createElement('span');
// parentelement.append(childelement1,childelement2);
// playground.append(parentelement);

// //parent node at the console 
// console.log(parentelement.firstChild);
// console.log(parentelement.lastChild);
// console.log(childelement1.nextSibling);
// console.log(childelement2.previousSibling);
// console.log(childelement1.parentNode);







// //creating document fragments
// const fragment =document.createDocumentFragment();

// for( let i=0; i<5; i++){
//     const magicalitem =document.createElement('li');
//     magicalitem.textContent ='magical item ';
//     fragment.append(magicalitem);
// }   

// const spellList =document.createElement('ul');
// playground.append(spellList);

// spellList.append(fragment);





//using templates
// const template = document.getElementById('wizard-template');


// // function createWizard(name, sponge) {
// //     const wizardelement = template.content.cloneNode(true);
// //     wizardelement.querySelector('.wizard-name').textContent = name;
// //     wizardelement.querySelector('.wizard-sponge').textContent = sponge;
// //     playground.append(wizardelement);
// //   }

// //   // Now call the function correctly
// //   createWizard('Merlin', 'Time Magic');
// //   createWizard('Boobs', 'Ass');