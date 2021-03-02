var i=0;
var p=[0,0];
var ply="x";
var tent=0;
var val1="";
var val2="";
var val3="";
var val4="";
var val5="";
var val6="";
var val7="";
var val8="";
var val9="";
function change(obj){
	var btn=document.getElementsByClassName('d');
	var point=document.getElementsByClassName('point');
	var capt=document.getElementById('head');
	var ply=document.getElementById('ply');
	val1= document.getElementById('d1').getAttribute("value");
	val2= document.getElementById('d2').getAttribute("value");
	val3= document.getElementById('d3').getAttribute("value");
	val4= document.getElementById('d4').getAttribute("value");
	val5= document.getElementById('d5').getAttribute("value");
	val6= document.getElementById('d6').getAttribute("value");
	val7= document.getElementById('d7').getAttribute("value");
	val8= document.getElementById('d8').getAttribute("value");
	val9= document.getElementById('d9').getAttribute("value");
	var val= document.getElementById(obj);
	if(i%2){
		val.setAttribute("value","o");
		val.innerHTML="o";
		val.style.backgroundColor="orange";
		val.style.pointerEvents="none";
	}
	else{
		val.setAttribute("value","x");
		val.innerHTML="x";
		val.style.backgroundColor="lightgreen";
		val.style.pointerEvents="none";

	}
	i++;

	switch(obj){
		case "d1": val1=val.getAttribute("value"); break;
		case "d2": val2=val.getAttribute("value"); break;
		case "d3": val3=val.getAttribute("value"); break;
		case "d4": val4=val.getAttribute("value"); break;
		case "d5": val5=val.getAttribute("value"); break;
		case "d6": val6=val.getAttribute("value"); break;
		case "d7": val7=val.getAttribute("value"); break;
		case "d8": val8=val.getAttribute("value"); break;
		case "d9": val9=val.getAttribute("value"); break;
	}
	if(((val1==val2)&&(val1==val3))||((val1==val4)&&(val1==val7))||((val1==val5)&&(val1==val9))||((val9==val6)&&(val9==val3))||((val9==val8)&&(val9==val7))||((val6==val5)&&(val6==val4))||((val2==val5)&&(val2==val8))||((val3==val5)&&(val3==val7))){
		var t=setTimeout(function(){
			play();
		},3000);
		if((val1==val2)&&(val1==val3)){
			for(var j=0;j<3;j++){
				if(val1=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else  {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}

		}
		if((val1==val4)&&(val1==val7)){
			for(var j=0;j<7;j+=3){
				if(val1=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else   {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val1==val5)&&(val1==val9)){
			for(var j=0;j<9;j+=4){
				if(val1=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else  {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val9==val6)&&(val9==val3)){
			for(var j=2;j<9;j+=3){
				if(val3=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else  {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val9==val8)&&(val9==val7)){
			for(var j=6;j<9;j++){
				if(val7=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else   {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val6==val5)&&(val6==val4)){
			for(var j=3;j<6;j++){
				if(val4=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else  {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val2==val5)&&(val2==val8)){
			for(var j=1;j<9;j+=3){
				if(val2=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else  {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		if((val3==val5)&&(val3==val7)){
			for(var j=2;j<7;j+=2){
				if(val3=="o"){
					ply="o";
					document.getElementsByClassName('d')[j].style.backgroundColor="red";
				}
				else   {
					ply="x";
					document.getElementsByClassName('d')[j].style.backgroundColor="green";
				}
			}
		}
		for(var j=0;j<10;j++){
			btn[j].style.pointerEvents="none";
			capt.innerHTML=ply+" gagne.";

			if(ply=="x"){
				i=0;
				if(j==0)
					p[1]++;
				point[1].innerHTML="x: "+p[1];
				capt.style.backgroundColor="green";
			}
			else{
				i=1;
				if(j==0)
					p[0]++;
				point[0].innerHTML="o: "+p[0];
				capt.style.backgroundColor="red";
			}
			capt.style.color="white";
		}
	}
	else tent++;
	if(tent==9){
		var t=setTimeout(function(){
			play();
		},3000);
		document.getElementById("head").innerHTML="NULL";
		for(var j=0;j<10;j++)
			document.getElementsByClassName('d')[j].style.backgroundColor="yellow";
	}
	if(p[0]==9||p[1]==9){
		ply.style.pointerEvents="none";
		ply.style.backgroundColor="white";
	}
}
function play(){
	var capt=document.getElementById('head');
	var div=document.getElementsByClassName('d');
	for (var i =0;i<10;i++) {
		tent=0;
		ply="x";
		div[i].style.pointerEvents="auto";
		div[i].style.backgroundColor="aqua";
		div[i].setAttribute("value",(i+1));
		div[i].innerHTML="";
		capt.innerHTML="START PLAY";
		capt.style.color="red";
		capt.style.backgroundColor="white";

	}
}