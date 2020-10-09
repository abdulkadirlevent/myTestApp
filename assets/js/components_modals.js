// Setup module
var Modals = function() {
  // Setup module components
  var _componentModal = function() {

    $('.modalClick1').on('click', function (e) {
      alert('Merhaba arkadaş');
    });

    $('.setTitle').on('click', function (e) {
      $('#baslik1').html('Set title başarılı...');
      alert('Set title başarılı...');
    });

    $('#exampleModal').on('show.bs.modal', function (e) {
      var modal = $(this)
      modal.find('.modal-title').text('Modal için yeni başlık atandı!')
      modal.find('.modal-body').text('Modal içi yeni body atandı...')
    })

  };

  return {
    initComponents: function() {
      _componentModal();
    }
  }
}();

// Initialize module
document.addEventListener('DOMContentLoaded', function() {
  Modals.initComponents();
});
