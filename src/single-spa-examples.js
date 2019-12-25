import {declareChildApplication, start} from 'single-spa';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
declareChildApplication('about', () => import('./about/about.app.js'), pathPrefix("/about"));
declareChildApplication('counter', () => import('./counter/counter.app.js'), pathPrefix("/counter"));
declareChildApplication('lazyCounter', () => import('./lazyCounter/lazyCounter.app.js'), pathPrefix("/lazyCounter"));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
