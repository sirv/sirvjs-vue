<template>
    <div class="Sirv"
        :data-options="stringOptions"
        :id="id"
        :data-src="dataSrc"
    >
        <sirv-component
            v-for="slide in parsedComponents"
            :key="slide.src"
            :src="slide.src"
            :type="slide.type"
            :componentOptions="slide.dataOptions"
            :id="slide.id"
            :thumbnailImage="slide.dataThumbnailImage"
            :thumbnailHtml="slide.dataThumbnailHtml"
            :slideDisabled="slide.dataDisabled"
            :swipeDisabled="slide.dataSwipeDisabled"
            :hiddenSelector="slide.dataHiddenSelector"
            :pinned="slide.dataPinned"
            :staticImage="slide.staticImage"
        />
        <slot v-if="parsedComponents.length == 0"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SirvComponent from '../components/SirvComponent.vue';
import ots from '../utils/optionsToString';
import isSpin from '../utils/isSpin';
import isImage from '../utils/isImage';
import isYoutube from '../utils/isYoutube';
import isVimeo from '../utils/isVimeo';
import isVideo from '../utils/isVideo';
import isModel from '../utils/isModel';
import { ViewerOptions } from '../types/SMVOptions';
import SMV from '../types/SMV';
import SMVSlide from '../types/SMVSlide';

declare global {
    interface Window {
        Sirv: SMV
    }
}

const getComponentType = (src?: string): string => {
    let result = 'html';

    if (isSpin(src)) {
        result = 'spin';
    } else if (isImage(src)) {
        // result = 'image';
        result = 'zoom';
    } else if (isYoutube(src)) {
        result = 'youtube';
    } else if (isVimeo(src)) {
        result = 'vimeo';
    } else if (isVideo(src)) {
        result = 'video';
    } else if (isModel(src)) {
        result = 'model';
    }

    return result;
}

const setNullByDefault = (value: any): any => {
    if (!value) {
        value = null;
    }

    return value;
};

export default defineComponent({
    name: 'SirvMediaViewer',
    inheritAttrs: true,
    components: { SirvComponent },
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

        slides: {
            type: Array,
            default() { return []; }
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
        parsedComponents (): any[] {
            if (this.dataSrc) {
                return [];
            } else {
                let c: Array<SMVSlide> = []
                if (Array.isArray(this.slides)) {
                    c = this.slides as Array<SMVSlide>;
                } else {
                    c = [this.slides]
                }

                c = c.map((v: SMVSlide) => {
                    if (typeof v === 'string') {
                        v = { src: v };
                    }

                    if (!v.type) {
                        v.type = getComponentType(v.src);
                    }

                    v.dataOptions = setNullByDefault(v.dataOptions);
                    v.id = setNullByDefault(v.id);
                    v.dataPinned = setNullByDefault(v.dataPinned);
                    v.dataThumbnailImage = setNullByDefault(v.dataThumbnailImage);
                    v.dataThumbnailHtml = setNullByDefault(v.dataThumbnailHtml);

                    if (v.dataDisabled) {
                        v.dataDisabled = '';
                    } else {
                        v.dataDisabled = null;
                    }

                    if (v.dataSwipeDisabled) {
                        v.dataSwipeDisabled = '';
                    } else {
                        v.dataSwipeDisabled = null;
                    }

                    if (v.dataHiddenSelector) {
                        v.dataHiddenSelector = '';
                    } else {
                        v.dataHiddenSelector = null;
                    }

                    v.staticImage = v.staticImage === true ? 'static' : null;

                    return v;
                });

                return c;
            }
        },

        stringOptions () {
            let opt: ViewerOptions = this.options;

            if (!opt.autostart) {
                opt.autostart = 'off';
            }

            return ots(opt);
        }
    },

    // methods: {
    //     isImage: isImage,
    // },

    mounted() {
        if (window.Sirv) {
            window.Sirv.viewer.start(`#${this.id}`);
        }
    },

    beforeUnmount() {
        if (window.Sirv) {
            window.Sirv.viewer.stop(`#${this.id}`);
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->