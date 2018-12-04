import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from './src/router';

if (module.hot) {
    module.hot.accept();
}

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./src/router', () => {
        const getRouter = require('./src/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDOM.render(<AppContainer>
        { RootElement }
    </AppContainer>, document.getElementById('app'))
}