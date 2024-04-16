import { loadScript } from '../../src/plugins/SirvMediaViewer/index';

document.createElement = (function (create: any) {
    return function (this: HTMLElement, ...args: any[]) {
        const element: HTMLElement = create.apply(this, args);

        if (element.tagName === 'SCRIPT') {
            setTimeout(() => {
                (window as any).Sirv = true;
                (element as any).onload(new Event('load'));
            }, 100);
        }
        return element;
    };
})(document.createElement);

describe('loadScript', () => {
    it('test of sirv existing', async () => {
        const sirv = await loadScript();
        expect(!!sirv).toBeTruthy();
    });
});
