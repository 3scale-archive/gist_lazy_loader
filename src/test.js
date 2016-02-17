import { lazyLoad } from 'gist_lazy_loader/lazy_loader'

let nodeList = document.getElementsByTagName('script')

window.load = lazyLoad(nodeList)
