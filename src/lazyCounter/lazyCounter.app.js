import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Counter from './src/index';
function domElementGetter() {
  return document.getElementById("lazyCounter")
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Counter,
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