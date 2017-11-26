var calculadora = {
  /* variables de control*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	controlen: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
	inicio: (function(){
			this.EventosClick();
		}),
  
/*efecto botones*/
  efectoBot: function(tecla){		
    document.getElementById(tecla).style.transform="scale(0.9)";
    setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
  },
/*funcion sumar*/
mas: function(){
  this.efectoBot("mas");
  this.num1 += Number(this.pantalla),
  this.pantalla = "",
  this.opcion = 1,
  this.auxestado = 0,
  this.signo = 0,
  this.auxnum = 0,
  this.auxestado = 0,
  this.decimal = 0,
  this.verpantalla();
},
/*funcion restar*/
menos: function(){
  this.efectoBot("menos");
  this.num1 = Number(this.pantalla);
  this.pantalla = "",
  this.opcion = 2,
  this.auxestado = 0,
  this.signo = 0,
  this.auxnum = 0,
  this.auxestado = 0,
  this.decimal = 0,
  this.verpantalla();
},
/*funcion multiplica*/
por: function(){
  this.efectoBot("por");
  this.num1 = Number(this.pantalla),
  this.pantalla = "",
  this.opcion = 3,
  this.auxestado = 0,
  this.signo = 0,
  this.auxnum = 0,
  this.auxestado = 0,
  this.decimal = 0,
  this.verpantalla();
},
/*funcion dividir*/
dividido: function(){
  this.efectoBot("dividido");
  this.num1 = Number(this.pantalla),
  this.pantalla = "",
  this.opcion = 4,
  this.auxestado = 0,
  this.signo = 0,
  this.auxnum = 0,
  this.auxestado = 0,
  this.decimal = 0,
  this.verpantalla();
},
/*funcion igual*/
igual: function(){
  this.efectoBot("igual");
  switch(this.opcion){
    case 1:
      if(this.auxestado == 0){
        this.auxnum = Number(this.pantalla),
        this.pantalla = this.num1 + Number(this.pantalla),
        this.auxestado = 1,
        this.num1 = 0;
      }else{
        this.pantalla = Number(this.pantalla)+this.auxnum;
      }
      break;
    case 2:
      if(this.auxestado == 0){
        this.auxnum = Number(this.pantalla),
        this.pantalla = this.num1 - Number(this.pantalla),
        this.auxestado = 1,
        this.num1 = 0;
      }else{
        this.pantalla = Number(this.pantalla)-this.auxnum;
      }
      break;
    case 3:
      if(this.auxestado == 0){
        this.auxnum = Number(this.pantalla),
        this.pantalla = this.num1 * Number(this.pantalla),
        this.auxestado = 1,
        this.num1 = 0;
      }else{
        this.pantalla = Number(this.pantalla)*this.auxnum;
      }
      break;
    case 4:
      if(this.auxestado == 0){
        this.auxnum = Number(this.pantalla),
        this.pantalla = this.num1 / Number(this.pantalla),
        this.auxestado = 1,
        this.num1 = 0;
      }else{
        this.pantalla = Number(this.pantalla)/this.auxnum;
      }
      break;
    default:
      break;
  }
  this.verpantalla();
},
/* Se asignan valores a las teclas */
  EventosClick: function(){
    document.getElementById("0").addEventListener("click",function(){calculadora.vernum("0")});
    document.getElementById("1").addEventListener("click",function(){calculadora.vernum("1")});
    document.getElementById("2").addEventListener("click",function(){calculadora.vernum("2")});
    document.getElementById("3").addEventListener("click",function(){calculadora.vernum("3")});
    document.getElementById("4").addEventListener("click",function(){calculadora.vernum("4")});
    document.getElementById("5").addEventListener("click",function(){calculadora.vernum("5")});
    document.getElementById("6").addEventListener("click",function(){calculadora.vernum("6")});
    document.getElementById("7").addEventListener("click",function(){calculadora.vernum("7")});
    document.getElementById("8").addEventListener("click",function(){calculadora.vernum("8")});
    document.getElementById("9").addEventListener("click",function(){calculadora.vernum("9")});
    document.getElementById("on").addEventListener("click",function(){calculadora.on("")});
    document.getElementById("sign").addEventListener("click",function(){calculadora.sign()});
    document.getElementById("dividido").addEventListener("click",function(){calculadora.dividido()});
    document.getElementById("menos").addEventListener("click",function(){calculadora.menos()});
    document.getElementById("punto").addEventListener("click",function(){calculadora.punto()});
    document.getElementById("igual").addEventListener("click",function(){calculadora.igual()});
    document.getElementById("mas").addEventListener("click",function(){calculadora.mas()});
    document.getElementById("por").addEventListener("click",function(){calculadora.por()});
  },
/* validacion pantalla de calculadora*/
  vernum: function(valor){
    this.efectoBot(valor);
    if(this.signo == 1 && this.stop == 0){
      this.controlen += 1,
      this.stop = 1;
    }
    if(this.decimal == 1  && this.stop == 0){
      this.controlen += 1,
      this.stop = 1;
    }
    if(this.pantalla.length < this.controlen){
      if(this.pantalla != "0"){
        this.pantalla += valor;
      }else if(valor != 0){
        this.pantalla = "",
        this.pantalla += valor;
      }
      this.verpantalla();
    }
  },	
/* funcion tecla on*/
  on: function(){
    this.efectoBot("on");
    this.pantalla = "0",
    this.decimal = 0,
    this.signo = 0,
    this.stop = 0,
    this.controlen = 8 
    this.num1 = 0,
    this.auxestado = 0,
    this.auxnum = 0,	
    this.opcion = 0,
    this.auxresultado = 0,
    this.verpantalla();
  },
/* funcion tecla negativo o positivo*/
sign: function(){
  this.efectoBot("sign");
  if(this.pantalla != 0){
    if(this.signo == 0){
      this.pantalla = "-" + this.pantalla,
      this.signo = 1;
    }else{
      this.pantalla = this.pantalla.slice(1);
      this.signo = 0;
    }
  }
  this.verpantalla();
},
/*funcion decimal*/
  punto: function(){
    this.efectoBot("punto");
    if(this.decimal == 0){
      this.pantalla += ".";
    }
    this.decimal = 1,
    this.verpantalla();
  },
/*ver en pantalla*/
  verpantalla: function(){
    if(this.pantalla.toString().length > this.controlen){
      this.pantalla = this.pantalla.toString().substring(0,8);
    }
    document.getElementById("display").innerHTML = this.pantalla;
  }    
}
calculadora.inicio();
