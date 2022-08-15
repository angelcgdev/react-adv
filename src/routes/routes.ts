import { lazy, LazyExoticComponent } from "react";
import { Route } from "react-router-dom";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
type JSXComponent  = ()=> JSX.Element

interface route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[]

}

// const LazyPage1 = lazy( ()=> import( /* webpackChunkName: "Lazy1" */ '../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( ()=> import( /* webpackChunkName: "Lazy2" */ '../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( ()=> import( /* webpackChunkName: "Lazy3" */ '../01-lazyload/pages/LazyPage3') );


const LazyLoad = lazy( ()=> import( /* webpackChunkName: "LazyLoad" */ '../01-lazyload/layout/LazyLayout') );

export const routes: route[] = [
    {
        path: '/lazyload',
        Component: LazyLoad,
        name: 'Lazyload Nested',
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'No Lazy Loadig',
    },
    // {
    //     path: '/lazy3',
    //     Component: LazyPage3,
    //     name: 'LazyPage-3',
    // }
];