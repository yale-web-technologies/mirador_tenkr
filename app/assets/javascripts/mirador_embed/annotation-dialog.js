(function ($) {
  
  $.AnnotationDialog = function (options) {
    jQuery.extend(this, {
      element: null,
      editor: null
    }, options);
    this.init();
  };
  
  $.AnnotationDialog.prototype = {
    
    init: function () {
      var _this = this;
      this.element.dialog({
        title: 'Create annotation',
        modal: true,
        draggable: true,
        dialogClass: 'no_close'
      });
      this.editor.show();
      this.editor.closeCallback = function () {
        _this.element.dialog('close');
      }
    }
  };
  
})(MR);
