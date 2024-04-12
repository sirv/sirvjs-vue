<template>
    <p>Lazy image</p>
    <div class="example">
        <div class="tool">
            <sirv-image data-src="https://demo.sirv.com/demo/snug/teal-b-throw.jpg"></sirv-image>
        </div>
        <div class="code"><div class="wrapper">
    <pre class="prettyprint lang-html">
&lt;sirv-image data-src="https://demo.sirv.com/demo/snug/teal-b-throw.jpg"&gt;&lt;/sirv-image&gt;
    </pre>
        </div></div>
    </div>
    <div class="description">
        <p>Lazy image <a href="https://sirv.com/help/articles/responsive-images-smv/">documentation</a></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prettify from '../mixins/prettify';

export default defineComponent({
    name: 'ExamplePage7',
    mixins: [prettify]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
