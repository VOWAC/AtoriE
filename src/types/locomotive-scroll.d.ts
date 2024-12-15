declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: {
      el: HTMLElement;
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      lerp?: number;
    });

    destroy(): void;
    update(): void;
    scrollTo(target: string | HTMLElement | number, options?: any): void;
  }
}
