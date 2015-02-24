	var elementos = [];
	var bandera=0;
	var resultado=0;
	
	function escribir(boton){
		if(boton==1){			
			var num = parseInt(document.getElementById("btn1").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==0){			
			var num = parseInt(document.getElementById("btn0").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==2){			
			var num = parseInt(document.getElementById("btn2").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==3){			
			var num = parseInt(document.getElementById("btn3").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==4){			
			var num = parseInt(document.getElementById("btn4").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==5){		
			var num = parseInt(document.getElementById("btn5").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==6){
			var num = parseInt(document.getElementById("btn6").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==7){			
			var num = parseInt(document.getElementById("btn7").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==8){			
			var num = parseInt(document.getElementById("btn8").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton==9){			
			var num = parseInt(document.getElementById("btn9").value);	
			document.getElementById("txt_pan").value += num;
		}
		else if(boton == 10){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"+");
			document.getElementById("txt_pan").value="";
		}
		else if (boton == 20){			
			
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"=");
			proceso();
		}
		else if (boton == 21){
			bandera=0;
			document.getElementById("txt_pan").value= "" ;
			elementos = [];	
			resultado=0;
		}		
	}
	function almacenarVector(parametro,signo){
		
		if(bandera == 0){
			elementos[1] = parametro;
			elementos [2] = signo;
			bandera = bandera + 2 ;		
		}
		else if (bandera ==2){
			elementos[3] = parametro;						
			bandera = bandera + 1 ;
		}			
	}
	
	function proceso(){
		var signo = elementos[2];		
		if ( signo == "+"){
			resultado =  elementos[1] + elementos[3];			
		document.getElementById("txt_pan").value = elementos[1]+" "+ elementos[2]+" "+ elementos[3]+" "+"="+" "+ resultado;		
		}				
	}