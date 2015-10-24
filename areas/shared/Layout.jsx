import React from 'react';
import LayoutPropTypes from '../../layoutHelper/PropTypes';
import { provideContext } from 'fluxible-addons-react';

export default React.createClass({
    displayName: 'Layout',

    propTypes: {
        layout: LayoutPropTypes.layout.isRequired,
        markup: React.PropTypes.string.isRequired
    },

    render() {
        return (
            <html>
                <head>
                    <title>{ this.props.layout.title }</title>
                </head>
                <body dangerouslySetInnerHTML={{ __html: this.props.markup }} />
            </html>
        );
    }
});
