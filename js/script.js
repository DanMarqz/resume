function Copiar(element) {
  // Crea un input que guarda el texto temporalmente
  var $temp = $('<input>');
  // Agrega a body
  $('body').append($temp);
   // Agrega en el atributo value del input el contenido html encontrado
   // en la etiqueta con el evento onclick
   // y selecciona el input temporal
  $temp.val($(element).html()).select();
  // Ejecuta la función de copiar
  document.execCommand('copy');
  // eliminamos el input temporal
  $temp.remove();
  alert('Correo copiado');
}