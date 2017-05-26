var menucollaspe = document.getElementById("menu-primary");
			
function showmenu(){
				
	if (menucollaspe.style.display === 'none' || menucollaspe.getAttribute("style")==null) {
				
		menucollaspe.style.visibility = 'visible';
		menucollaspe.style.display = 'block';
		
	}else{
					
		menucollaspe.style.visibility = 'hidden';
		menucollaspe.style.display = 'none';
					
	}
}

// adjust the style on resize window
			
window.addEventListener('resize', function(event){ // resize event listner
			
	var screenwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
				
	//console.log(screenwidth);
				
	if (screenwidth > "767"){
				
		menucollaspe.style.visibility = 'visible';
		menucollaspe.style.display = 'block';
				
	}else{
					
		menucollaspe.style.visibility = 'hidden';
		menucollaspe.style.display = 'none';
					
	}
});