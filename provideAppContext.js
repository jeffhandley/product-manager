import { provideContext } from 'fluxible-addons-react';
import LayoutPropTypes from './layoutHelper/PropTypes';

export default function provideAppContext(Component) {
    return provideContext(Component, LayoutPropTypes);
}
