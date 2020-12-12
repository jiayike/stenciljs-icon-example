import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/sad-svg.svg';

/** @internal */
@Component({
  tag: 'my-icon-sad-svg',
  shadow: false,
})
export class MyIconSadSvg {
  @Prop() size: string;

  render() {
    return <div style={{ 'height': this.size, 'width': this.size }} innerHTML={svgIcon}></div>;
  }
}
