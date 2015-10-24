import React from 'react';
import { provideContext } from 'fluxible-addons-react';

export default React.createClass({
    displayName: 'Products-Index',

    contextTypes: {
        layout: React.PropTypes.object.isRequired
    },

    render() {
        this.context.layout.title = `Product Manager`;

        return (
            <h1>Products</h1>
        );
    }
});
