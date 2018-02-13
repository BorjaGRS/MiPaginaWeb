
document.getElementsByClassName('email')[0].addEventListener('keyup', function() {
    campo = document.getElementsByClassName('email')[0].value;    
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(campo)) {
       document.getElementsByClassName('email')[0].setCustomValidity("");
       
    } else {
      document.getElementsByClassName('email')[0].setCustomValidity("Este es el formato de email: abcd@abcd.abc"); 
    }
});
document.getElementsByClassName('contrasena')[0].addEventListener('keyup', function() {
    campo = document.getElementsByClassName('contrasena')[0].value;   
    emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if (emailRegex.test(campo)) {
        document.getElementsByClassName('contrasena')[0].setCustomValidity("");
        
    } else {
      document.getElementsByClassName('contrasena')[0].setCustomValidity("Para que sea válida debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo");
      
    }
});

document.getElementsByClassName('confirma')[0].addEventListener('keyup', function() {
    confirma = document.getElementsByClassName('confirma')[0].value;    
    contrasena = document.getElementsByClassName('contrasena')[0].value;
    
    if (confirma==contrasena) {
       document.getElementsByClassName('confirma')[0].setCustomValidity("");
       
    } else {
      document.getElementsByClassName('confirma')[0].setCustomValidity("Las contraseñas no coinciden."); 
    }
});


$('.logeo').on('click', function(){
  $('.conten').css('display','none');
  $('.conten1').css('display','unset');
});
$('.suscrip').on('click', function(){
  $('.conten').css('display','unset');
  $('.conten1').css('display','none');
});




$('.dir').on('keyup', function(){
  var dir = document.getElementsByClassName('dir')[0].value;
  

  if(dir!=''){
    $('.tar').css('display','unset');
  }else{
    $('.tar').css('display','none');
  }

});


function setCookie(cname, cvalue, exdays) {

  var d = new Date();
  if(exdays){
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
  }else {
    var expires='';
  }
  window.scrollTo(0, 0);
  document.cookie = "Nombre: "+ cname + "," + "Contraseña: "+ cvalue + ";" + expires + ";path=/";
}



function getCookie(nombre,con) {
   var lista = document.cookie.split(";");
         for (i in lista) {
             var busca = lista[i].search("Nombre: "+ nombre + "," + "Contraseña: "+ con);
             if (busca > -1) { 
              return alert("Bienvenido "+nombre);
              setCookie(conectado,conectado);
               $('.usuario').css('display','none');
               var estado = document.createElement("p");
               estado.textContent="conectado"+nombre;



            }
             else{alert("El Nombre o la contraseña estan mal introducidos, pruebe de nuevo a rellenar los campos")} 
             }

   
  
      }

var paises = new Array("Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda", "Argentina", "Armenia","Australia","Austria", "Azerbaijan", "Bahamas",
"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
"Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile", "China", "Colombia","Comoros","Congo (Brazzaville)","Congo","Costa Rica",
"Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti", "Dominica","Dominican Republic","East Timor (Timor Timur)","Ecuador","Egypt","El Salvador",
"Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea",
"Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
"Kenya","Kiribati","Korea North","Korea South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
"Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
"Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepa","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea",
"Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe",
"Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone", "Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Sri Lanka",
"Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
"Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia",
"Zimbabwe");

var pais= document.getElementsByClassName("pais")[0];
for(var i=0;i<paises.length;i++){
  var pa= document.createElement("option");
  pa.value=paises[i];
  $(pa).text(paises[i]);
  pais.appendChild(pa);
}