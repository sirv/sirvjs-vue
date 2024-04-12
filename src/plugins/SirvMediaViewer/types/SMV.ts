import SMVSlider from './SMVSlider';
import SMVLazyImage from './SMVLazyImage';

interface ViewerFilters {
    add: (callback: (viewerId: string, items: Array<any>) => Array<any>, first: boolean) => void;
    remove: (callback: () => void) => void;
    removeAll: () => void;
}

interface Viewer {
    start: (query?: string) => void;
    stop: (query?: string) => void;
    getInstance: (query?: string) => SMVSlider;

    on: (eventName: string, fn: (event: object) => void) => () => void;
    off: (eventName: string, fn: (event: object) => void) => void;
    filters: ViewerFilters
}

interface LazyImage {
    start: (query?: string) => void;
    stop: (query?: string) => void;
    getInstance: (query?: string) => SMVLazyImage;

    on: (eventName: string, fn: (event: object) => void) => () => void;
    off: (eventName: string, fn: (event: object) => void) => void;
}

interface SMV {
    version: string;
    build: string;

    lazyimage: LazyImage;
    viewer: Viewer;

    getInstance: (query?: string) => SMVSlider | SMVLazyImage;
    start: (query?: string) => void;
    stop: (query?: string) => void;
    on: (eventName: string, fn: (event: object) => void) => () => void;
    off: (eventName: string, fn: (event: object) => void) => void;

    whenReady: (callback: () => void) => void;
    whenLoaded: (callback: () => void) => void;
}

export default SMV;
