const fs = require('fs');

const main = () => {
  fs.readdir('./src/css/assets', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const iconName = file.replace('.svg', '');

      let folder;
      let template;
      if (!file.includes('-svg')) {
        folder = 'my-icon-2';
        template = getTemplate(file, iconName);
      } else {
        folder = 'my-icon-3';
        template = getTemplateSvg(file, iconName);
      }

      fs.writeFile(`./src/components/${folder}/icons/my-icon-${iconName}.tsx`, template, (err) => {
        if (err) throw err;
      });
    });
  });
}

const getTemplate = (iconPath, iconName) => {
  return `import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/${iconPath}';

/** @internal **/
@Component({
  tag: 'my-icon-${iconName}',
  shadow: false,
})
export class MyIcon${toPascalCase(iconName)} {
  @Prop() size: string;

  render() {
    return (
      <svg style={{ 'height': this.size, 'width': this.size }}>
        <use xlinkHref={\`\${svgIcon}#${iconName}\`}></use>
      </svg>
    );
  }
}
`
}

const getTemplateSvg = (iconPath, iconName) => {
  return `import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/${iconPath}';

/** @internal **/
@Component({
  tag: 'my-icon-${iconName}',
  shadow: false,
})
export class MyIcon${toPascalCase(iconName)} {
  @Prop() size: string;

  render() {
    return <div style={{ 'height': this.size, 'width': this.size }} innerHTML={svgIcon}></div>;
  }
}
`
}

const toPascalCase = (string) => string.replace(/\w+/g,
  (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).replace('-', '');

main();
