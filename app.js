import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Layout from './areas/shared/Layout';

let app = express();

app.get('*', (req, res) => {
    let pagePath = path.join('pages', req.url);
    let Page = require(`./${pagePath}`);

    let layout = ReactDOMServer.renderToString(
        <Layout>
            <Page />
        </Layout>
    );

    res.send(layout);
});

app.listen(3000);
console.log('Listening on port 3000');
