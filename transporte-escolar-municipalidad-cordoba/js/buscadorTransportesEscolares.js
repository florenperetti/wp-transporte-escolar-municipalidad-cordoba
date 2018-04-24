(function(window, document, $) {

  const $TEM = $('#TEM');
  const $form = $TEM.find('form');
  const $resultados = $TEM.find('.resultados');
  const $reset = $TEM.find('#filtros__reset');

  $reset.click(function(e) {
    e.preventDefault();
    $form[0].reset();
    $form.submit();
  });

  $form.submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      dataType: "JSON",
      url: buscarTransportesEscolares.url,
      data: {
        action: 'buscar_tptes_escolares',
        nonce: buscarTransportesEscolares.nonce,
        nombre: $form.serializeArray()[0].value
      },
      success: function(response) {
        if (response.data) {
          $resultados.html(response.data);
        }
      }
    });
  });

  $(document).on('click','#TEM .paginacion__boton', function(e) {
    const pagina = $(this).data('pagina');
    const $boton = $(e.target);
    const texto = $boton.html();
    $boton.html('...');
    $.ajax({
      type: "POST",
      dataType: "JSON",
      url: buscarTransportesEscolares.url,
      data: {
        action: 'buscar_tptes_escolares_pagina',
        nonce: buscarTransportesEscolares.nonce,
        pagina: pagina,
        nombre: $form.serializeArray()[0].value
      },
      success: function(response) {
        if (response.data) {
          $resultados.html(response.data);
          $('body').animate({scrollTop: 50}, 1000);
        }
      },
      done: function() {
        $boton.html(texto);
      }
    });
  });
})(window, document, jQuery);