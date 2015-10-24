import React from 'react';

export default React.createClass({
    displayName: 'Layout',

    render() {
        return (
            <html>
                <head>
                    <title>Product Manager</title>
                </head>
                <body>
                    { this.props.children }
                </body>
            </html>
        );
    }
});
