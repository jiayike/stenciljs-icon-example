import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-icon-1',
  shadow: false,
})
export class MyIcon1 {
  /**
   * The icon size
   */
  @Prop() size: string;

  /**
  * The icon name
  */
  @Prop() name: string;

  render() {
    return (
      <svg class="icon" style={{ 'height': this.size, 'width': this.size }}>
        <use xlinkHref={`./assets/icon/${this.name}.svg#${this.name}`}></use>
      </svg>
    );
  }
}
