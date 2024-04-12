<template>
    <div class="Sirv"
        v-if="dataBgSrc"
        :data-options="stringOptions"
        :id="id"
        :data-bg-src="dataBgSrc"
    >
    </div>
    <img
        v-else
        class="Sirv"
        :id="id"
        :data-src="dataSrc"
        :data-options="stringOptions"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ots from '../utils/optionsToString';
import { LazyImageOptions } from '../types/SMVOptions';
import SMV from '../types/SMV';

declare global {
    interface Window {
        Sirv: SMV
    }
}

export default defineComponent({
    name: 'SirvImage',
    inheritAttrs: true,
    props: {
        options: {
            type: Object,
            default() { return { autostart: 'off' }; }
        },

        dataBgSrc: {
            type: String,
            default: null
        },

        dataSrc: {
            type: String,
            default() {
                return null;
            }
        },

        id: {
            type: String,
            default() { return 'vue-viewer-' + (+new Date()); }
        }
    },

    created() {
        // this.lazyImage = this.dataSrc && isImage(this.dataSrc) || this.dataBgSrc;
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setup() {},

    computed: {
        stringOptions () {
            let opt: LazyImageOptions = this.options;

            if (!opt.autostart) {
                opt.autostart = 'off';
            }

            return ots(opt);
        }
    },

    mounted() {
        if (window.Sirv) {
            window.Sirv.lazyimage.start(`#${this.id}`);
        }
    },

    beforeUnmount() {
        if (window.Sirv) {
            window.Sirv.lazyimage.stop(`#${this.id}`);
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->