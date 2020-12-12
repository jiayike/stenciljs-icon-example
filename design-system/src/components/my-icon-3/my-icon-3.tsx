import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-icon-3',
    shadow: false,
})
export class MyIcon3 {
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
        const SVG = `my-icon-${this.name}-svg`;

        return (
            <SVG class="icon" size={this.size}></SVG>
        );
    }
}
