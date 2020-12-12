import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-icon-2',
    shadow: false,
})
export class MyIcon2 {
    svg: string;

    /**
     * The icon size
     */
    @Prop() size: string;

    /**
    * The icon name
    */
    @Prop() name: string;

    render() {
        const SVG = `my-icon-${this.name}`;

        return (
            <SVG class="icon" size={this.size}></SVG>
        );
    }
}
