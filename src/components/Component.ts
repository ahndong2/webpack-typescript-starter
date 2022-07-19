/**
 * @export
 * @class Component
 */
export class Component {
  private el: HTMLElement;

  /**
   * Creates an instance of Component.
   * @param {string} [innerHTML='Hello, World']
   * @memberof Component
   */
  constructor(innerHTML = 'Hello, World') {
    this.el = document.createElement('div');
    this.innerHTML(innerHTML);
  }

  /**
   * @readonly
   * @type {HTMLElement}
   * @memberof Component
   */
  get element(): HTMLElement {
    return this.el;
  }

  /**
   * @param {string} innerHTML
   * @memberof Component
   */
  innerHTML(innerHTML: string): void {
    this.el.innerHTML = innerHTML;
  }
}
