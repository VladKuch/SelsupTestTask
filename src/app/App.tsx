import React, { Suspense } from 'react';
import './styles/global.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';

function App() {    
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <MainPage />
            </Suspense>
        </div>
    );
}

export default App;
