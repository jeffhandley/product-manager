import express from 'express';
import path from 'path';
import lodash from 'lodash'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Fluxible from 'fluxible';
import { createElementWithContext } from 'fluxible-addons-react';
import Layout from './areas/shared/Layout';
import provideAppContext from './provideAppContext';

let server = express();

server.use((req, res, next) => {
    let pagePath = path.join('areas', req.url);

    let Page = require(`./${pagePath}`);
    let Flux = new Fluxible({ component: provideAppContext(Page) });

    let stores = Page.type && Page.type.stores;

    if (stores) {
        if (!_.isArray(stores)) {
            stores = [ stores ];
        }

        stores.forEach((store) => Flux.registerStore(store));
    }

    let fluxContext = Flux.createContext();

    function sendResponse() {
        let componentContext = fluxContext.getComponentContext();
        componentContext.layout = { };

        let pageElement = createElementWithContext(fluxContext);
        let pageMarkup = ReactDOMServer.renderToString(pageElement);

        let output = ReactDOMServer.renderToString(
            <Layout layout={componentContext.layout} markup={pageMarkup} />
        );

        res.send(output);
    }

    if (Page.type && Page.type.loadAction) {
        fluxContext.executeAction(Page.type.loadAction, { req }, (err) => {
            if (err) {
                next(err);
                return;
            }

            sendResponse();
        });
    } else {
        sendResponse();
    }
});

server.listen(3000);
console.log('Listening on port 3000');
