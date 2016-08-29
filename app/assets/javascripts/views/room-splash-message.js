(function($) {
  
  jQuery(document).ready(function() {
    var message = jQuery('#mr_splash_message').text();
    
    if (message.trim() === '') {
      return;
    }
    
    var template = Handlebars.compile([
      '<div class="header">Notice</div>',
      '<div class="content">',
      '  <div class="description">',
      '    <p>{{message}}</p>',
      '  </div>',
      '</div>',
      '<div class="actions">',
      '  <div class="ui ok button">OK</div>',
      '</div>'
    ].join(''));
    
    var elem = jQuery('<div/>')
      .addClass('ui modal ym_modal')
      .attr('id', 'mr_splash_dialog')
      .html(template({ message: message }))
      .appendTo(jQuery('body'));
      
    elem.modal('show');
  });
  
})(MR);
