
const reminderClick = document.querySelectorAll(".reminderRow")
const sizeClick = document.querySelectorAll(".sizeRow")
let sizeBtn

reminderClick.forEach(function (reminder){
	reminder.addEventListener('click', function(evt){

		const idEl = document.getElementById("idTextBox");
		idEl.value = reminder.attributes.value.value

		const nameEl = document.getElementById("nameTextBox");
		nameEl.value = reminder.children[0].textContent

		const dateEl = document.getElementById("dateBox");
		
		dateFormat =new Date(reminder.children[1].textContent)
		
		dateEl.value = dateFormat.getFullYear().toString() + "-" +
		(dateFormat.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + dateFormat.getDate().toString().padStart(2, 0);
		
		const daysEl = document.getElementById("daysTextBox");
		daysEl.value = reminder.children[2].textContent

		sizeBtn = document.getElementById("btnAdd");
		sizeBtn.innerHTML = "Update"

		//change the form action to PUT
		document.getElementById("form-save-update").action =`/reminders/${ reminder.attributes.value.value }?_method=PUT`;

	
})

})

sizeClick.forEach(function (size){
	size.addEventListener('click', function(evt){

		const sidEl = document.getElementById("idSize");
		sidEl.value = size.attributes.value.value

		const snameEl = document.getElementById("nameSize");
		snameEl.value = size.children[0].textContent

		const ssizeEl = document.getElementById("sizeSize");
		ssizeEl.value = size.children[1].textContent

		const sbrandEl = document.getElementById("brandSize");
		sbrandEl.value = size.children[2].textContent
		
		const sdescriptionEl = document.getElementById("descriptionSize");
		sdescriptionEl.value = size.children[3].textContent

		sizeBtn = document.getElementById("btnAdd");
		sizeBtn.innerHTML = "Update"
		//change the form action to PUT
		document.getElementById("form-save-update").action =`/sizes/${ size.attributes.value.value }?_method=PUT`;

})

})