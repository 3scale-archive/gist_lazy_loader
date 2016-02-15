import fetchJsonp from 'fetch-jsonp'

export function lazyLoad() {

  var gists     = Array.from(document.getElementsByTagName('gist'))
  var loadedCss = {}

  gists.forEach(function(gist) {
    
    if (!gist.hasAttribute('data-src')) { return; }

    var url     = gist.getAttribute('data-src')
    var jsonUrl = url.replace(/\.js\b/, '.json')

    setTimeout(function(){

      fetchJsonp(jsonUrl)
        .then(function(response) {
          return response.json()
        }).then(function(json) {

          window.requestAnimationFrame(function(){
            var gistDiv = document.createElement('div')
            gistDiv.innerHTML = json.div

            if(!loadedCss[json.stylesheet]) {
              var stylesheet = document.createElement('link')
              stylesheet.setAttribute('rel', 'stylesheet')
              stylesheet.setAttribute('type', 'text/css')
              stylesheet.setAttribute('href', json.stylesheet)
              gist.parentNode.insertBefore(stylesheet, gist.nextSibling)

              loadedCss[json.stylesheet] = true
            }

            gist.parentNode.insertBefore(gistDiv, gist.nextSibling)
          })

        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
     
    }, 0)
  })
}

