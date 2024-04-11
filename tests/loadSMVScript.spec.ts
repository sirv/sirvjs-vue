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

import { loadSMVScript } from '../src/plugins/SirvMediaViewer';

describe('loadSMVScript', () => {
    it('test of sirv existing', async () => {
        const sirv = await loadSMVScript();
        expect(!!sirv).toBeTruthy();
    });
});