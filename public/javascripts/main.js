window.onload = function () {
  
	var error = Snap.select("#error" ),
      hole = Snap.select("#svg-hole" ),
      hand = Snap.select("#svg-hand" ),
      mask = Snap.select("#svg-mask" );


	function onSVGLoaded( ){
    
		function animOn(){
			hand.animate({
				transform: "t10,-300, r0"
			}, 4500, mina.easeinout, animOut);

			mask.animate({
				transform: "t-10,300, r0"
			}, 4500, mina.easeinout);
		}

		function animOut() {
			hand.animate({
				transform: "t-10,-305, r0"
			}, 4500, mina.easeinout, animOn);

			mask.animate({
				transform: "t10,305, r0"
			}, 4500, mina.easeinout);
		};
    
    function open() {
			clearTimeout(timer);
			hand.animate({
				transform: "t0,-300"
			}, 800, mina.backout, animOn);

			mask.animate({
				transform: "t0,300"
			}, 800, mina.backout);

		}
		timer = setTimeout(open, 1000);

		hand.attr({
			mask: mask
		});
	}
  
  onSVGLoaded();

};


const reminderClick = document.querySelectorAll(".reminderRow")
const sizeClick = document.querySelectorAll(".sizeRow")


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

		//change the form action to PUT
		document.getElementById("form-save-update").action =`/sizes/${ size.attributes.value.value }?_method=PUT`;

})

})

		




