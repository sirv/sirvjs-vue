<template>
    <p>ExamplePage2</p>
    <div class="example">
        <div class="tool">
            <sirv-media-viewer>
                <div data-src="https://demo.sirv.com/demo/snug/teal-b-throw.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/teal.spin"></div>
                <div data-src="https://demo.sirv.com/demo/snug/unpacked.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-build.mp4"></div>
                <div data-src="https://demo.sirv.com/demo/snug/teal-shadow.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/teal-b-cushions.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-00.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-01.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-02.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-03.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/stuffing.mp4"></div>
                <div data-src="https://demo.sirv.com/demo/snug/selfie.mp4"></div>
                <div data-src="https://demo.sirv.com/demo/snug/beer.mp4"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-04.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-05.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-06.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-07.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-08.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-09.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-10.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/demo/snug/sofa-detail-11.jpg" data-type="zoom"></div>
                <div data-src="https://demo.sirv.com/model.glb"></div>
            </sirv-media-viewer>
        </div>
        <div class="code"><div class="wrapper">
<pre class="prettyprint lang-html">
&lt;sirv-media-viewer&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/teal-b-throw.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/teal.spin"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/unpacked.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-build.mp4"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/teal-shadow.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/teal-b-cushions.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-00.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-01.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-02.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-03.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/stuffing.mp4"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/selfie.mp4"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/beer.mp4"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-04.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-05.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-06.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-07.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-08.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-09.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-10.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/demo/snug/sofa-detail-11.jpg" data-type="zoom"&gt;&lt;/div&gt;
    &lt;div data-src="https://demo.sirv.com/model.glb"&gt;&lt;/div&gt;
&lt;/sirv-media-viewer&gt;
</pre>
        </div></div>
    </div>
    <div class="description">
        <p>Sirv Media Viewer <a href="https://sirv.com/help/articles/sirv-media-viewer/">documentation</a></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prettify from '../mixins/prettify';

export default defineComponent({
    name: 'ExamplePage2',
    mixins: [prettify]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
