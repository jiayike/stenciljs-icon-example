import { Config } from '@stencil/core';
import { svgOptimizerPlugin } from './utils/rollup-utils';

export const config: Config = {
  namespace: 'design-system',
  globalStyle: './src/css/design.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: './css/assets', dest: 'css/assets' }
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [
    svgOptimizerPlugin(),
  ]
};
