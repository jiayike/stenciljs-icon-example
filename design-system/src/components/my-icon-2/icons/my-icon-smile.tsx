import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/smile.svg';

/** @internal **/
@Component({
  tag: 'my-icon-smile',
  shadow: false,
})
export class MyIconSmile {
  @Prop() size: string;

  render() {
    return (
      <svg style={{ 'height': this.size, 'width': this.size }}>
        <use xlinkHref={`${svgIcon}#smile`}></use>
      </svg>
    );
  }
}
