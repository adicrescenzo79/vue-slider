$(document).ready(function() {
  dx();
  sx();
  setIds();
  nav();
  keyBoard();
});

function keyBoard(){
  $(document).keypress(function(e) {
    if (e.keyCode == '39'){
      var foto = $('img.active');
      var pallino = $('i.active');

      if (foto.hasClass('last')) {
        var fotoDx = $('img.first');
        var pallinoDx = $('i.first');
      } else {
        var fotoDx = foto.next('img');
        var pallinoDx = pallino.next('i');

      }

      fotoDx.addClass('active');
      foto.removeClass('active');

      pallinoDx.addClass('active');
      pallino.removeClass('active');

    } else

    if (e.keyCode == '37') {
      var foto = $('img.active');
      var pallino = $('i.active');

      if (foto.hasClass('first')) {
        var fotoSx = $('img.last');
        var pallinoSx = $('i.last');
      } else {
        var fotoSx = foto.prev('img');
        var pallinoSx = pallino.prev('i');

      }

      fotoSx.addClass('active');
      foto.removeClass('active');

      pallinoSx.addClass('active');
      pallino.removeClass('active');

    }
  });

}






function setIds(){
  for (var i = 0; i < immagini.length; i++) {
    immagini[i].setAttribute('id', i+1);
    pallini[i].setAttribute('id', i+1);
  }
}

function dx() {
  var frecciaDx = $('.fa-angle-right');


  frecciaDx.click(function() {
    var foto = $('img.active');
    var pallino = $('i.active');

    if (foto.hasClass('last')) {
      var fotoDx = $('img.first');
      var pallinoDx = $('i.first');
    } else {
      var fotoDx = foto.next('img');
      var pallinoDx = pallino.next('i');

    }

    fotoDx.addClass('active');
    foto.removeClass('active');

    pallinoDx.addClass('active');
    pallino.removeClass('active');
  });
};


function sx() {
  var frecciaSx = $('.fa-angle-left');

  frecciaSx.click(function() {
    var foto = $('img.active');
    var pallino = $('i.active');

    if (foto.hasClass('first')) {
      var fotoSx = $('img.last');
      var pallinoSx = $('i.last');
    } else {
      var fotoSx = foto.prev('img');
      var pallinoSx = pallino.prev('i');

    }

    fotoSx.addClass('active');
    foto.removeClass('active');

    pallinoSx.addClass('active');
    pallino.removeClass('active');
  });




}

var immagini = $('div.images img');
var pallini = $('div.nav i')




function nav() {

  pallini.click(function(){
    var id = this.getAttribute('id');
    var immagineNew = $('.images img#' + id);
    var immagineOld = $('img.active');

    var pallinoNew = pallini[id - 1];
    var pallinoOld = $('i.active');
    pallinoOld.removeClass('active');
    $(pallinoNew).addClass('active');


    switch (immagineNew.hasClass()) {
      case !'active':
        immagineNew.addClass('active');
        immagineOld.removeClass('active');
        break;
    }


  });
}
