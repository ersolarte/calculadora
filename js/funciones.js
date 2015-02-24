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
		// suma dos numeros
		else if(boton == 10){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"+");
			document.getElementById("txt_pan2").value= elementos[1]+ elementos[2];
			document.getElementById("txt_pan").value="";
		}
		//resta dos numeros
		else if(boton == 11){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"-");
			document.getElementById("txt_pan2").value= elementos[1]+ elementos[2];
			document.getElementById("txt_pan").value="";
		}
		//multiplica dos numeros
		else if(boton == 12){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"*");
			document.getElementById("txt_pan2").value= elementos[1]+ elementos[2];
			document.getElementById("txt_pan").value="";
		}
		//divide dos numeros
		else if(boton == 13){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"/");
			document.getElementById("txt_pan2").value= elementos[1]+ elementos[2];
			document.getElementById("txt_pan").value="";
		}
		//raiz cuadrada de un numero
		else if(boton == 14){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			var r;
			r= Math.sqrt(num);
			document.getElementById("txt_pan2").value= "sqrt("+ document.getElementById("txt_pan").value+")";
			document.getElementById("txt_pan").value=r;
		}
		//potencia de un numero
		else if(boton == 15){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			var r;
			r= Math.pow(num,2);
			document.getElementById("txt_pan2").value= document.getElementById("txt_pan").value+"^2";
			document.getElementById("txt_pan").value=r;
		}
		//Funcion trigonometrica seno de un numero
		else if(boton == 16){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			var r;
			r= Math.sin(num);
			document.getElementById("txt_pan2").value= "SEN("+document.getElementById("txt_pan").value+")";
			document.getElementById("txt_pan").value=r;
		}
		//Funcion trigonometrica coseno de un numero
		else if(boton == 17){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			var r;
			r= Math.cos(num);
			document.getElementById("txt_pan2").value= "COS("+document.getElementById("txt_pan").value+")";
			document.getElementById("txt_pan").value=r;
		}
		//Funcion trigonometrica tangente de un numero
		else if(boton == 18){		
			var num = parseInt(document.getElementById("txt_pan").value);	
			var r;
			r= Math.tan(num);
			document.getElementById("txt_pan2").value= "TAN("+document.getElementById("txt_pan").value+")";
			document.getElementById("txt_pan").value=r;
		}			
		//da el resultado de la operacion
		else if (boton == 20){			
			
			var num = parseInt(document.getElementById("txt_pan").value);	
			almacenarVector(num,"=");
			proceso();
			document.getElementById("txt_pan2").value= "";
		}
		else if (boton == 21){
			limpiar();
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
		if ( elementos[2] == "+"){
			resultado =  elementos[1] + elementos[3];			
			document.getElementById("txt_pan").value = elementos[1]+" "+ elementos[2]+" "+ elementos[3]+" "+"="+" "+ resultado;		
		}
		else if( elementos[2] == "-"){
			resultado =  elementos[1] - elementos[3];			
			document.getElementById("txt_pan").value = elementos[1]+" "+ elementos[2]+" "+ elementos[3]+" "+"="+" "+ resultado;		
		}
		else if( elementos[2] == "*"){
			resultado =  elementos[1] * elementos[3];			
			document.getElementById("txt_pan").value = elementos[1]+" "+ elementos[2]+" "+ elementos[3]+" "+"="+" "+ resultado;		
		}
		else if( elementos[2] == "/"){
			
			if(elementos[3] != 0){			
  			 resultado =  elementos[1] / elementos[3];
			 document.getElementById("txt_pan").value = elementos[1]+" "+ elementos[2]+" "+ elementos[3]+" "+"="+" "+ resultado;		
			}
			else{
				alert("No se puede dividir por cero, ingrese nuevamente los datos a procesar");
				limpiar();
			}
		}
						
	}
	
	function limpiar(){
		/*bandera=0;
		document.getElementById("txt_pan").value= "";
		document.getElementById("txt_pan2").value= "";
		elementos = [];	
		resultado=0;*/
		location.reload();
	}