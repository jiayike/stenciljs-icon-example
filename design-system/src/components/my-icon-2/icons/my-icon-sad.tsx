import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../css/assets/sad.svg';

/** @internal */
@Component({
  tag: 'my-icon-sad',
  shadow: false,
})
export class MyIconSad {
  @Prop() size: string;

  render() {
    return (
      <svg style={{ 'height': this.size, 'width': this.size }}>
        <use xlinkHref={`${svgIcon}#sad`}></use>
      </svg>
    );
  }
}
