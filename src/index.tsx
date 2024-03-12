import { render } from 'react-dom';
import App from './app/App';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StoreProvider>
        <App />,
    </StoreProvider>,
    document.getElementById('root'),
);
