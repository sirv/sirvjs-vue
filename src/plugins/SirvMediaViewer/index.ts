import { App, Plugin } from 'vue';
import loadScript2 from 'load-script2';
import SirvMediaViewer from './components/SirvMediaViewer.vue';
import SirvImage from './components/SirvImage.vue';

const SRC = 'https://scripts.sirv.com/sirvjs/v3/sirv.js';

let scriptPromise: Promise<any> | null = null;
const loadSMVScript = (attrs?: object, parentNode?: HTMLElement) :Promise<any> => {
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            if ((window as any).Sirv) {
                resolve((window as any).Sirv);
            } else {
                loadScript2(SRC, attrs, parentNode)
                    .then(() => {
                        resolve((window as any).Sirv);
                    })
                    .catch((err: any) => {
                        reject(err);
                    });
            }
        });
    }

    return scriptPromise;
};

const SirvjsVue: Plugin = {
    install(Vue: App) {
        Vue.config.globalProperties.$smv = window.Sirv;
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("sirv-media-viewer", SirvMediaViewer);
        Vue.component("sirv-image", SirvImage);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(SirvjsVue);
}

export { SirvjsVue, loadSMVScript }
export default SirvjsVue;
