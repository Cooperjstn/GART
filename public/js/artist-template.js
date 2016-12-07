var showArtist = function(artistList){
  bigList = ''
  bigList += '<div class="col-md-12 col-sm-6 text-center artistList">'
  bigList +=       '<a href="#"><i class="fa fa-home fa-3x" aria-hidden="true"></i></a>'
  bigList +=       '<h1> Artist In the Know</h1>'
  bigList +=      '<li><img src="images/Manet.jpeg"/> Ã‰douard Manet <li>'
  bigList +=      '<li><img src="images/Water-Lilies-small.jpg"/> Claude Monet <li>'
  bigList +=      '<li><img src="images/Klimt.jpeg"/> Gustav Klimt <li>'
  bigList +=       '<li><img src="images/Matisse.jpeg"/> Henri Matisse <li>'
  bigList +=      '<li><img src="images/james Marshall.jpeg"/> Kerry James Marshall<li>'
  bigList +=      '<li><img src="images/lempicka.jpeg"/> Tamera de Lempicka<li>'
  bigList +=      '<li><img src="images/kahlo.jpeg"/> Frida Kahlo <li>'
  bigList +=        '<li><img src="images/Joan Mitchell.jpeg"/> Joan Mitchell<li>'
  bigList +=   '<li><img src="images/kara walker.jpeg"/> Kara Walker <li>'
  bigList += '</div>'

  //console.log(bigList)
  document.querySelector('#app-container').innerHTML = bigList

}
