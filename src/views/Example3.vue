<template>
    <p>Options, slide properties</p>
    <div class="example">
        <div class="tool">
            <sirv-media-viewer
                data-options="fullscreen.enable:false;"
                :slides="[{
                    src: 'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
                    type: 'image'
                },
                'https://demo.sirv.com/demo/snug/unpacked.jpg',
                {
                    src: 'https://demo.sirv.com/demo/snug/teal-shadow.jpg',
                    dataOptions: {
                        mode: 'deep',
                        map: {
                            enable: true
                        }
                    }
                }]"
            >
            </sirv-media-viewer>
        </div>
        <div class="code"><div class="wrapper">
    <pre class="prettyprint lang-html">
&lt;sirv-media-viewer
    data-options="fullscreen.enable:false;"
    :slides="[{
        src: 'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
        type: 'image'
    },
    'https://demo.sirv.com/demo/snug/unpacked.jpg',
    {
        src: 'https://demo.sirv.com/demo/snug/teal-shadow.jpg',
        options: {
            mode: 'deep',
            map: {
                enable: true
            }
        }
    }]"
&gt;&lt;/sirv-media-viewer&gt;
    </pre>
        </div></div>
    </div>
    <div class="description">
        <p><pre class="string">data-options="fullscreen.enable:false;"</pre> it is a common way to use local Sirv Media Viewer <a href="https://sirv.com/help/articles/sirv-media-viewer/">options</a></p>
        <p><pre class="string">:slides="[]"</pre> it is a list of your slides</p>
        <p>You can use just url string</p>
        <p><pre class="string">
:slides="[
    'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
    'https://demo.sirv.com/demo/snug/unpacked.jpg',
    'https://demo.sirv.com/demo/snug/teal-shadow.jpg'
]"</pre></p>    
        <p>or use object for more detailed customization of slides</p>
        <p><pre class="string">
:slides="[{
        src: 'https://demo.sirv.com/demo/snug/teal-b-throw.jpg',
    },
    {
        src: 'https://demo.sirv.com/demo/snug/unpacked.jpg',
    },
    {
        src: 'https://demo.sirv.com/demo/snug/teal-shadow.jpg'
}]"</pre></p>
        <p>Object (slide) properties</p>
        <p>
            <ul>
                <li><pre class="string">id</pre> - Slide id [String]</li>
                <li><pre class="string">src</pre> - Source [String]</li>
                <li><pre class="string">dataOptions</pre> - Local slide options [Object]</li>
                <li><pre class="string">type</pre> - Type of slide [String]. The available props are: <pre class="string">spin, zoom, image, 'youtube', 'vimeo', 'video', 'html'</pre></li>
                <li><pre class="string">dataThumbnailImage</pre> - Custom thumbnail image [String]</li>
                <li><pre class="string">dataThumbnailHtml</pre> - Custom thumbnail html [String]</li>
                <li><pre class="string">dataDisabled</pre> - Disable slide [Boolean]</li>
                <li><pre class="string">dataSwipeDisabled</pre> - Disable slide swipe [Boolean]</li>
                <li><pre class="string">dataHiddenSelector</pre> - Hide selector [Boolean]</li>
                <li><pre class="string">dataPinned</pre> - Pinned selector [String]. The available props are: <pre class="string">left, right</pre></li>
                <li><pre class="string">staticImage</pre> - Static image [Boolean].</li>
            </ul>
        </p>
        <p>Additional inforamation about Sirv Media Viewer you can find <a href="https://sirv.com/help/articles/sirv-media-viewer/">here</a></p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import prettify from '../mixins/prettify';

export default defineComponent({
    name: 'ExamplePage3',
    mixins: [prettify]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
