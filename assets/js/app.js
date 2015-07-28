window.onload = function () {
  document.body.className = '';
  document.addEventListener( "keyup", function ( e ) {
    if ( e.keyCode === 27 ) {
      location.href = "/index.html#"
    }
  } );
  document.getElementById( 'resume' ).addEventListener( "click", function ( e ) {
    location.href = "/index.html#"
  } );
}

window.ontouchmove = function () {
  return false;
}

window.onorientationchange = function () {
  document.body.scrollTop = 0;
}
