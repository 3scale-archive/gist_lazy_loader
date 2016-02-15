import fetchJsonp from 'fetch-jsonp'

export function lazyLoad() {

  let gists     = Array.from(document.getElementsByTagName('gist'))
  let loadedCss = {}

  gists.forEach(function(gist) {

    if (!gist.hasAttribute('data-src')) { return; }

    let url     = gist.getAttribute('data-src')
    let jsonUrl = url.replace(/\.js\b/, '.json')

    setTimeout(function(){

      fetchJsonp(jsonUrl)
        .then(function(response) {
          return response.json()
        }).then(function(json) {

          window.requestAnimationFrame(function(){
            let gistDiv = document.createElement('div')
            gistDiv.innerHTML = json.div

            if(!loadedCss[json.stylesheet]) {
              let stylesheet = document.createElement('link')
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

