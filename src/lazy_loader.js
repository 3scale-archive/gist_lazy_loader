export function lazyLoad() {

  var gists     = Array.from(document.getElementsByTagName('gist'))
  var loadedCss = {}

  gists.forEach(function(gist) {

    if (!gist.hasAttribute('data-src')) { return; }

    var url     = gist.getAttribute('data-src')
    var jsonUrl = url.replace(/\.js\b/, '.json')

    setTimeout(function(){

      // fetchJsonp('/users.jsonp')
      //   .then(function(response) {
      //     return response.json()
      //   }).then(function(json) {
      //     console.log('parsed json', json)
      //   }).catch(function(ex) {
      //     console.log('parsing failed', ex)
      //   })

        // $.ajax({
        //   url: jsonUrl, 
        //   dataType: 'jsonp',
        //   success: function (data) {
        //     window.requestAnimationFrame(function(){
        //       var gistDiv = document.createElement('div')
        //       gistDiv.innerHTML = data.div

        //       if(!css[data.stylesheet]) {
        //         var stylesheet = document.createElement('link')
        //         stylesheet.setAttribute('rel', 'stylesheet')
        //         stylesheet.setAttribute('type', 'text/css')
        //         stylesheet.setAttribute('href', data.stylesheet)
        //         vlnka.parentNode.insertBefore(stylesheet, vlnka.nextSibling)
        //         css[data.stylesheet] = true
        //       }

        //       vlnka.parentNode.insertBefore(gistDiv, vlnka.nextSibling)
        //     }) 
        //   }
        // })      
    }, 0)
  })
}

