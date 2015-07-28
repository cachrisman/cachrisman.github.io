window.onload = function () {
  document.body.className = '';
  document.addEventListener( "keyup", function ( e ) {
    if ( e.keyCode === 27 ) {
      location.href = "/#"
    }
  } );
  document.getElementById( 'resume' ).addEventListener( "click", function ( e ) {
    location.href = "/#"
  } );
}

window.ontouchmove = function () {
  return false;
}

window.onorientationchange = function () {
  document.body.scrollTop = 0;
}
