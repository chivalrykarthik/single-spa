import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import About from './root.component.js';
function domElementGetter() {
  return document.getElementById("about")
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: About,
  domElementGetter,
})
export const bootstrap = [
  reactLifecycles.bootstrap,
];
export const mount = [
  reactLifecycles.mount,
];
export const unmount = [
  reactLifecycles.unmount,
];