# Vue components for Sirv.js

[![Test](https://github.com/sirv/sirvjs-vue/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/sirv/sirvjs-vue/actions/workflows/test.yml)

Easy to use, highly customizable Vue.js Sirv Media Viewer library.

Copy and paste this script anywhere in your HTML, usually before `</head>`
```
<script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
```
or you can use [loadScript](##-loadScript-module) module

## install
```
npm install --save @sirv/sirvjs-vue
```
## register as plugin
```
import App from './App.vue'
import SirvjsVue from '@sirv/sirvjs-vue';

createApp(App)
    .use(SirvjsVue)
    .mount('#app');
```
## Sirv Media Viewer
```
<sirv-media-viewer
    :id='...'
    :data-src='...'
    data-options="fullscreen.enable:false;"
    :slides="[
        'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
        'https://demo.sirv.com/demo/snug/teal.spin',
        {
            src: 'https://demo.sirv.com/demo/snug/unpacked.jpg',
            type: 'image'
        }
    ]"
></sirv-media-viewer>
```
- `:id` - viewer id
- `:data-src` - using for `*.view` files, overrides `:slides`
- `data-options` - [viewer options](https://sirv.com/help/articles/sirv-media-viewer/)
- `:slides` - Array with slide sources. Sources can be String or Object.
String can be just url link
Object has additional props:
  * `id` - Slide id [String]
  * `src` - Source [String]
  * `dataOptions` - Local slide options [Object]
  * `type` - Type of slide [String]. The available props are: `spin`, `zoom`, `image`, `youtube`, `vimeo`, `video`, `model`, `html`
  * `dataThumbnailImage` - Custom thumbnail image [String]
  * `dataThumbnailHtml` - Custom thumbnail html [String]
  * `dataDisabled` - Disable slide [Boolean]
  * `dataSwipeDisabled` - Disable slide swipe [Boolean]
  * `dataHiddenSelector` - Hide selector [Boolean]
  * `dataPinned` - Pinned selector [String]. The available props are: `left`, `right`
  * `staticImage` - Static image [Boolean].

[Sirv Media Viewer documentation](https://sirv.com/help/articles/sirv-media-viewer/)
## Lazy image
```
<sirv-image
    :id='...'
    :data-src='...'
    :data-bg-src="..."
    data-options="..."
></sirv-image>
```
- `:id` - image id
- `:data-bg-src` - using for background image src, overrides `:data-src`
- `:data-src` - using for image src
- `data-options` - [viewer options](https://sirv.com/help/articles/responsive-images-smv/)

[Lazy image documentation](https://sirv.com/help/articles/responsive-images-smv/)

## loadScript module
This module adds Sirv Media Viewer script to page once.

### usage
```
import { loadScript } from '@sirv/sirvjs-vue';

loadScript().then((sirv) => {
	// script is loaded
});

```
### API
#### `promise = loadScript([attrs], [parentNode])`
Append a `<script>` node with `'https://scripts.sirv.com/sirvjs/v3/sirv.js'` URL to the `<head>` element in the DOM.

##### `attrs` (optional)
More about it you can find [here](https://www.npmjs.com/package/load-script2#attrs-optional)

##### `parentNode` (optional)
More about it you can find [here](https://www.npmjs.com/package/load-script2#parentnode-optional)

##### `promise`
Returns a promise which resolves to the `sirv` object, or rejects with `err` if any occurred.


[Examples](https://test1.sirv.com/sergey/sirvjs-vue/index.html)
