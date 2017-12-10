/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  MyComponent as OButton
} from './components/o-button/o-button';

declare global {
  interface HTMLOButtonElement extends OButton, HTMLElement {
  }
  var HTMLOButtonElement: {
    prototype: HTMLOButtonElement;
    new (): HTMLOButtonElement;
  };
  interface HTMLElementTagNameMap {
    "o-button": HTMLOButtonElement;
  }
  interface ElementTagNameMap {
    "o-button": HTMLOButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "o-button": JSXElements.OButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface OButtonAttributes extends HTMLAttributes {
      first?: string;
      last?: string;
    }
  }
}

