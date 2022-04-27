(function npnGiftAdjust (window, document) {
  // npn gift mobile adjust
  function setRootFontSize () {
    if (document.body) {
      if (window.innerWidth > 500) {
        document.documentElement.style.fontSize = '100px';
        document.documentElement.style.height = '100%'
        document.documentElement.style.display = 'flex'
        document.documentElement.style.alignItems = 'center'
        document.documentElement.style.justifyContent = 'center'
        document.body.style.height = '667px';
        document.body.style.width = '375px';
      } else {
        document.documentElement.style.fontSize = '26.666667vw';
        document.body.style.height = '100%';
        document.body.style.width = '100%';
        document.body.style.removeProperty('margin')
        document.documentElement.style.removeProperty('height')
        document.documentElement.style.removeProperty('display')
        document.documentElement.style.removeProperty('alignItems')
        document.documentElement.style.removeProperty('justifyContent')
      }
    }
    else {
      document.addEventListener('DOMContentLoaded', setRootFontSize)
    }
  }
  window.addEventListener('resize', setRootFontSize)
  setRootFontSize();
}(window, document))