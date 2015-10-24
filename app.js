import express from 'express';
import React from 'react';

let app = express();

app.get('/', (req, res) => {
    let layout = React.renderToString(
        <html>
            <head>
                <title>Product Manager</title>
            </head>
            <body>
                <h1>Product Manager</h1>
            </body>
        </html>
    );
    
    res.send(layout);
});

app.listen(3000);
console.log('Listening on port 3000');
