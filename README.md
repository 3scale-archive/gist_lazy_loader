# Gist Lazy Loader
Asynchronous loading of Github gists

### Installation

```
jspm install npm:gist_lazy_loader
```

### Code Example

```
<div id='container'>
  <p>1</p>
  <script data-src='https://gist.github.com/jerzyn/9689187.js?file=require-plugin.php'></script>
  <p>2</p>
  <script data-src='https://gist.github.com/jerzyn/9689187.js?file=require-plugin.php'></script>
</div>
```

```javascript
import { lazyLoad } from 'gist_lazy_loader'

var nodeList = document.getElementsByTagName('script')

lazyLoad(nodeList)
``` 

## Tests

``` 
$ jspm-dev-server
$ open https://localhost:3000/spec/index.html
```

## Contributing

- Fork it ( https://github.com/[my-github-username]/october/fork )
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create a new Pull Request
