var x = true;

function subMenu(){
	var subL = document.getElementById('sublist');
	
	if(x){
		subL.classList.toggle('appearing', x);
		x = false;
		
	}
	else if(!(x)){
		subL.classList.toggle('appearing', x);
		x = true;
	} 

}
