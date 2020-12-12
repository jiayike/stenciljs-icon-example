import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/smile-svg.svg';

/** @internal */
@Component({
  tag: 'my-icon-smile-svg',
  shadow: false,
})
export class MyIconSmileSvg {
  @Prop() size: string;

  render() {
    return <div style={{ 'height': this.size, 'width': this.size }} innerHTML={svgIcon}></div>;
  }
}
