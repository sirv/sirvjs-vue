declare module 'load-script2' {
    export default function loadScript2(src: string, attrs?: object, parentNode?: HTMLElement): Promise<HTMLElement>;
}