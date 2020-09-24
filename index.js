console.log("This is a test"); 

//Signle Element
const form  = document.getElementById('my-form'); 
console.log(form);  
console.log(document.querySelector('h1')); 

// Multiple Elements
/*
console.log(document.querySelectorAll('.item')); 
const items = document.querySelectorAll('.item'); 

items.forEach((item)=> {
	console.log(item); 
}); 

const ul = document.querySelector('.items');
//ul.remove(); 
ul.firstElementChild.textContent = "HELLO"; 
ul.children[1].innerText		 = "Maria"; 
ul.lastElementChild.innerHTML	 = "<h1>Hello f </h1>"; 


const btn  			 = document.querySelector('.btn'); 
btn.style.background = "red"; 
btn.addEventListener('click', (e)=>{
	e.preventDefault();
	//console.log(e.target.type);
	//console.log(e.target.className); 
	//console.log(e.target.value); 
}); 
// btn.addEventListener('mouseover', 
//
*/
const myForm 	 = document.querySelector('#my-form'); 
const nameInput  = document.querySelector('#name'); 
const emailInput = document.querySelector('#email'); 
const msg    	 = document.querySelector('.msg'); 
const userList 	 = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();
	if(nameInput.value === '' || emailInput.value == ''){
		//alert ('Please enter all the fields ')
		msg.classList.add('error'); 
		msg.innerHTML	= "Please Enter all the fields";
		setTimeout(()=>{msg.remove()}, 3000); 
	} else{
		const li = document.createElement('li'); 
		li.appendChild(document.createTextNode(
			`${nameInput.value}: ${emailInput.value}`)
		); 
		userList.appendChild(li); 
		console.log("success");
		//Clear Fields
		nameInput.value 	= ''; 
		emailInput.value	= ''; 
	} 
}