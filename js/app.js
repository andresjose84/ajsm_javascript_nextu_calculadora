
var calculadora = {
  resultado : "",
  display : document.getElementById('display'),
  ceroBtn : document.getElementById('0'),
  unoBtn : document.getElementById('1'),
  dosBtn : document.getElementById('2'),
  tresBtn : document.getElementById('3'),
  cuatroBtn : document.getElementById('4'),
  cincoBtn : document.getElementById('5'),
  seisBtn : document.getElementById('6'),
  sieteBtn : document.getElementById('7'),
  ochoBtn : document.getElementById('8'),
  nueveBtn : document.getElementById('9'),
  ceBtn : document.getElementById('on'),
  signBtn : document.getElementById('sign'),
  raizBtn : document.getElementById('raiz'),
  divideBtn : document.getElementById('dividido'),
  multiplicaBtn : document.getElementById('por'),
  menosBtn : document.getElementById('menos'),
  puntoBtn : document.getElementById('punto'),
  igualBtn : document.getElementById('igual'),
  sumaBtn : document.getElementById('mas'),
  num1 : 0,
  num2 : 0,
  opc : 0,
  res : 0,
  init : function() {
    console.log("Iniciando calculadora");
    this.ceroBtn.addEventListener('click',this.ceroClick);
    this.unoBtn.addEventListener('click',this.unoClick);
    this.dosBtn.addEventListener('click',this.dosClick);
    this.tresBtn.addEventListener('click',this.tresClick);
    this.cuatroBtn.addEventListener('click',this.cuatroClick);
    this.cincoBtn.addEventListener('click',this.cincoClick);
    this.seisBtn.addEventListener('click',this.seisClick);
    this.sieteBtn.addEventListener('click',this.sieteClick);
    this.ochoBtn.addEventListener('click',this.ochoClick);
    this.nueveBtn.addEventListener('click',this.nueveClick);
    this.ceBtn.addEventListener('click',this.ceClick);
    this.signBtn.addEventListener('click',this.signClick);
    this.raizBtn.addEventListener('click',this.operacion);
    this.divideBtn.addEventListener('click',this.operacion);
    this.multiplicaBtn.addEventListener('click',this.operacion);
    this.menosBtn.addEventListener('click',this.operacion);
    this.puntoBtn.addEventListener('click',this.puntoClick);
    this.igualBtn.addEventListener('click',this.igualClick);
    this.sumaBtn.addEventListener('click',this.operacion);
    calculadora.setEfecto();
  },
  pintarResultado : function(val){
    var self = this;
    self.resultado = document.getElementById('display').innerHTML;

    if(val == "CE"){
      self.resultado = 0;
      self.res = 0;
      self.num1 = 0;
      self.num2 = 0;
      self.opc = 0;
    }

    if(self.resultado.length <= 7){
      if(val == 0){
          if(self.resultado != 0){
              self.resultado = self.resultado + "" + val;
          } else if(self.resultado == "") {
            self.resultado = 0;
          }
        } else if (val == "-" && self.resultado != "0") {
        if(self.resultado[0] != '-'){
          self.resultado = '-' + self.resultado;
        } else {
          self.resultado = self.resultado.replace('-','');
        }
      } else if (val == "." && self.resultado != "") {
        if(self.resultado.indexOf(".") == -1){
          self.resultado = self.resultado + "" + val;
        }
      } else if(self.resultado == "0" && val != "-" && val != "."){
        self.resultado = val;
      } else if(val != "-" && val != ".") {
        self.resultado = self.resultado + "" + val;
      }
      self.res = self.resultado;
    } else{
      if(val == 0){
          if(self.res != 0){
              self.res = self.res + "" + val;
          } else if(self.res == "") {
            self.res = 0;
          }
      } else if (val == "-" && self.res != 0) {
        if(self.res[0] != '-'){
          self.res = '-' + self.res;
        } else {
          self.res = self.res.replace('-','');
        }
      } else if (val == "." && self.resultado != "") {
        if(self.res.indexOf(".") == -1){
          self.res = self.res + "" + val;
        }
      } else if(self.res == 0 && val != "-" && val != "."){
        self.res = val;
      } else if(val != "-") {
        self.res = self.res + "" + val;
      }
    }
    this.display.innerHTML = self.resultado;
  },
  ceroClick : function() {
    calculadora.pintarResultado(0);
  },
  unoClick : function() {
    calculadora.pintarResultado(1);
  },
  dosClick : function() {
    calculadora.pintarResultado(2);
  },
  tresClick : function() {
    calculadora.pintarResultado(3);
  },
  cuatroClick : function() {
    calculadora.pintarResultado(4);
  },
  cincoClick : function() {
    calculadora.pintarResultado(5);
  },
  seisClick : function() {
    calculadora.pintarResultado(6);
  },
  sieteClick : function() {
    calculadora.pintarResultado(7);
  },
  ochoClick : function() {
    calculadora.pintarResultado(8);
  },
  nueveClick : function() {
    calculadora.pintarResultado(9);
  },
  ceClick : function() {
    calculadora.pintarResultado("CE");
  },
  signClick : function() {
    calculadora.pintarResultado("-");
  },
  puntoClick : function() {
    calculadora.pintarResultado(".");
  },
  raizClick : function(num) {
    console.log("Click raiz");
    return "proximamente";
  },
  divideClick : function(dividendo,divisor) {
    var res = 0;
    res = dividendo / divisor;
    return res;
  },
  multiplicaClick : function(num1,num2) {
    var res = 0;
    res = num1 * num2;
    return res;
  },
  menosClick : function(num1,num2) {
    var res = 0;
    res = num1 - num2;
    return res;
  },
  sumaClick : function(num1,num2) {
    var res = 0;
    res = num1 + num2;
    return res;
  },
  igualClick : function() {
    var self = this;
    calculadora.num2 = calculadora.validaNumero(calculadora.res);
    calculadora.res = 0;
    self.resultado = document.getElementById('display').innerHTML;
    if (self.resultado != "") {
      calculadora.res = calculadora.calcular(calculadora.num1,calculadora.num2);
      calculadora.display.innerHTML = String(calculadora.res).length >= 8 ? String(calculadora.res).substring(0, 8) : calculadora.res;
      calculadora.res = 0;
      calculadora.num1 = 0;
      calculadora.num2 = 0;
      calculadora.opc = 0;
    }
  },
  operacion : function(e) {
    var self = this;
    if(calculadora.num1 == 0 && calculadora.opc == 0){
      calculadora.opc = e.target.id;
      calculadora.num1 = calculadora.validaNumero(calculadora.res);
      calculadora.res = 0;
      calculadora.display.innerHTML = "";
    } else {
      calculadora.num2 = calculadora.validaNumero(calculadora.res);
      calculadora.res = 0;
      calculadora.res = calculadora.calcular(calculadora.num1,calculadora.num2);
      calculadora.opc = e.target.id;
      calculadora.num1 = calculadora.validaNumero(calculadora.res);
      calculadora.num2 = 0;
      calculadora.display.innerHTML = "";
    }

  },
  calcular : function(num1,num2){
    var res = 0;
    switch (calculadora.opc) {
      case "raiz":
        res = calculadora.raizClick(num1);
      break;
      case "dividido":
        if(num2 != 0){
          res = calculadora.divideClick(num1,num2);
        } else {
          alert("Error División por 0");
        }
      break;
      case "por":
        res = calculadora.multiplicaClick(num1,num2);
      break;
      case "menos":
        res = calculadora.menosClick(num1,num2);
      break;
      case "mas":
        res = calculadora.sumaClick(num1,num2);
      break;
    }
    return res;
  },
  validaNumero : function(num) {
    var res = 0;
    if(String(num).indexOf(".") != -1){
      res = parseFloat(num);
    }else{
      res = parseInt(num);
    }
    return res;
  },
  setEfecto : function() {
    var arrBtn = document.getElementsByClassName('tecla');
    for (var i = 0; i < arrBtn.length; i++) {
      arrBtn[i].onclick = function (e) {
        var btn = document.getElementById(e.target.id);
        btn.style.transform = 'scale(0.9,0.9)';
        setTimeout(function() {
          btn.style.transform = 'scale(1,1)';
        },200);
      };
    }
  }
};
calculadora.init();
