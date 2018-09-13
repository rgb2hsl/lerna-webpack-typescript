This is an abstract illustration of multiple same dependencies import problem when bundling with Webpack in monorepo.

# The story
There is a monorepo with two private local packages, `boopler` and `woopler`, perfectly symlinked with Lerna.

`boopler` is also depending on `woopler`.

The thing is in that both `boopler` and `woopler` packages has same `jquery` dependency version. However, it's included twice in the output `main.js` file. And this is sad. I know, that is how resolving works but still. This is sad.

You can check it out by [browse main.js](https://github.com/ru-web-designer/lerna-webpack-typescript/blob/master/dist/main.js) file.

Or you can clone this repo, then run:
   * `yarn`
   * `yarn lerna bootstrap`
   * `yarn build`
   
And check the result again.

# Related issues

* [Duplicate module loaded multiple times](https://github.com/webpack/webpack/issues/2134)
* [https://github.com/webpack/webpack/issues/5455](https://github.com/webpack/webpack/issues/5455)