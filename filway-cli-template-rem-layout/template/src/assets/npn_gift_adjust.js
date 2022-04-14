(function npnGiftAdjust (window, document) {
  // npn gift mobile adjust
  function setBodyFontSize () {
    if (document.body) {
      if (window.innerWidth > 500) {
        document.documentElement.style.fontSize = '100px';
        document.documentElement.style.height = '100%'
        document.documentElement.style.display = 'flex'
        document.documentElement.style.alignItems = 'center'
        document.documentElement.style.justifyContent = 'center'
        document.body.style.height = '776px';
        document.body.style.width = '375px';
      } else {
        document.documentElement.style.fontSize = '26.666667vw';
        document.body.style.height = 'inherit';
        document.body.style.width = 'inherit';
        document.body.style.margin = 'inherit';
        document.documentElement.style.height = 'inherit'
        document.documentElement.style.display = 'inherit'
        document.documentElement.style.alignItems = 'inherit'
        document.documentElement.style.justifyContent = 'inherit'
      }
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  window.addEventListener('resize', setBodyFontSize)
  setBodyFontSize();
}(window, document))