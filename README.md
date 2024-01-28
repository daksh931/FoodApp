# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


LazyImage -- used to load faster images in website
$ npm i --save react-lazy-load-image-component

import { LazyLoadImage } from "react-lazy-load-image-component";
--simply replace 'img' with "LazyLoadImage"

<LazyLoadImage src={Image}
        width={600} height={400}
        alt="Image Alt"
      />