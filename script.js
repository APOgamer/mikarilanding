// Puedes agregar animaciones o efectos aquí si lo deseas 

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn1xbet');
  var modal = document.getElementById('modal1xbet');
  var close = document.getElementById('closeModal1xbet');
  if(btn && modal && close) {
    btn.addEventListener('click', function() {
      modal.classList.add('active');
    });
    close.addEventListener('click', function() {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', function(e) {
      if(e.target === modal) modal.classList.remove('active');
    });
  }
}); 