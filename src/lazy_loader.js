import fetchJsonp from 'fetch-jsonp'

let loadedStylesheets = {}

const gistNotValid = function (gist) {
  return !gist.hasAttribute('data-src')
}

const jsonUrl = function (url) {
  return url.replace(/\.js\b/, '.json')
}

const stylesheetShouldBeLoaded = function (stylesheet) {
  return !loadedStylesheets[stylesheet]
}

const stylesheetLoaded = function (stylesheet) {
  loadedStylesheets[stylesheet] = true
}

const insertStylesheetElement = function (gist, href) {
  let stylesheetElement = document.createElement('link')
  
  stylesheetElement.setAttribute('rel', 'stylesheet')
  stylesheetElement.setAttribute('type', 'text/css')
  stylesheetElement.setAttribute('href', href)
  
  gist.parentNode.insertBefore(stylesheetElement, gist.nextSibling)
}

const insertGistElement = function (gist, html) {
  let gistElement = document.createElement('div')

  gistElement.innerHTML = html

  gist.parentNode.insertBefore(gistElement, gist.nextSibling)
}

// @param [NodeList] nodeList
export function lazyLoad (nodeList = []) {
  let gists    = Array.from(nodeList)
  let requests = []

  gists.forEach(function(gist) {

    if (gistNotValid(gist)) { return; }

    requests.push(
      new Promise(function(resolve, reject) {

        fetchJsonp(jsonUrl(gist.getAttribute('data-src')))
          .then(function (response) {
            return response.json()
          }).then(function (json) {
            window.requestAnimationFrame(function () {

              if(stylesheetShouldBeLoaded(json.stylesheet)) {
                insertStylesheetElement(gist, json.stylesheet)

                stylesheetLoaded(json.stylesheet)
              }

              insertGistElement(gist, json.div)

              resolve('success')
            })
          }).catch(function (ex) {
            reject('failed')
          })
      })
    )
  })

  return Promise.all(requests)
}
