This is an abstract illustration of multiple same dependencies import problem when bundling with Webpack in monorepo.

# The story
There is a monorepo with two private local packages, `boopler` and `woopler`, perfectly symlinked with [Lerna](https://lernajs.io/).

`boopler` is depending on `woopler`, both of them have `import * as $ from "jquery"`. `boopler` binds DOMReady event with it, `woopler` makes some DOM manipulations.

Finally, there is `index.ts` in the root of the repo, which have `import "boopler"`. It is an entry point for [Webpack](https://webpack.js.org/) bundle.

The thing is in that both `boopler` and `woopler` packages has same `jquery` dependency version. However, it's included twice in the output `main.js` file. And this is sad. I know, that is how resolving works but still. This is sad.

You can check it out by [browse main.js](https://github.com/ru-web-designer/lerna-webpack-typescript/blob/master/dist/main.js) file, outputted by Webpack.

Or you can clone this repo, then run:
   * `yarn`
   * `yarn lerna bootstrap`
   * `yarn build`
   
And check the result again.

# Related issues

* [Duplicate module loaded multiple times](https://github.com/webpack/webpack/issues/2134)
* [https://github.com/webpack/webpack/issues/5455](https://github.com/webpack/webpack/issues/5455)

# Possible workarounds?

* Make some `shared` package, which have `jquery` dependency and make resolve alias to it's jquery.  Don't store jquery in `boopler` and `woopler` deps. Possible cons is static errors in IDE, maybe something else.
* Use `optimization.runtimeChunk: 'single'` in `webpack.config.js` [link](https://github.com/webpack/webpack/issues/2134#issuecomment-389124211)
* Using aliases with peer dependencies [link](https://github.com/webpack/webpack/issues/5455#issuecomment-369399064)