var checkboxes = document.querySelectorAll(".checkbox");

// Add a clickListener to EVERY element in your "querySelectorAll" List
for (i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('click', function(i) {
		
		if(this.firstChild.checked == true) {
			this.firstChild.checked = false;
		}
		else {
			this.firstChild.checked = true;
		}
		
	});
}

