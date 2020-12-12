import update from './update.js';
import { defineCustomElements } from 'design-system/dist/custom-elements';

import 'design-system/dist/design-system/design-system.css';

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();
defineCustomElements();