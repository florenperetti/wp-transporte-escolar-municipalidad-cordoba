(function() {
  tinymce.create('tinymce.plugins.busctptesescolarescba_button', {
    init: function(ed, url) {
      ed.addCommand('busctptesescolarescba_insertar_shortcode', function() {
        selected = tinyMCE.activeEditor.selection.getContent();
        var content = '';

        ed.windowManager.open({
          title: 'Buscador de Transportes Escolares',
          body: [{
            type: 'textbox',
            name: 'pag',
            label: 'Cantidad de Resultados'
          }],
          onsubmit: function(e) {
            var pags = Number(e.data.pag.trim());
            ed.insertContent( '[buscador_tptes_escolares_cba' + (pags && Number.isInteger(pags) ? ' pag="'+pags+'"' : '') + ']' );
          }
        });
        tinymce.execCommand('mceInsertContent', false, content);
      });
      ed.addButton('busctptesescolarescba_button', {title : 'Insertar buscador de Transportes Escolares', cmd : 'busctptesescolarescba_insertar_shortcode', image: url.replace('/js', '') + '/images/logo-shortcode.png' });
    }
  });
  tinymce.PluginManager.add('busctptesescolarescba_button', tinymce.plugins.busctptesescolarescba_button);
})();