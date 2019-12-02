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

// const reminderClick = document.getElementById("reminderRow")

// reminderClick.addEventListener('click', function(evt){
// 	alert(evt.target)
// 	alert(reminderClick.attributes)
// });
const reminderClick = document.querySelectorAll(".reminderRow")

reminderClick.forEach(function (reminder){
	reminder.addEventListener('click', function(evt){
		const nameEl = document.getElementById("nameTextBox");
		nameEl.value = reminder.children[0].textContent

		const dateEl = document.getElementById("dateBox");
		
		dateFormat =new Date(reminder.children[1].textContent)
		
		dateEl.value = dateFormat.getFullYear().toString() + "-" +
		(dateFormat.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + dateFormat.getDate().toString().padStart(2, 0);
		
		const daysEl = document.getElementById("daysTextBox");
		daysEl.value = reminder.children[2].textContent
		
		// alert(reminder.children[2].textContent)
})

})


		





// function myFunction() {
//   console.log("Hello World");
// }