import React, { useEffect }  from 'react';
import { LogBox }            from 'react-native';
import { Provider }          from 'react-redux';
import { ModalProvider }     from './src/components/modals/context/ModalProvider';
import { GlobalModal }       from './src/components/modals/GlobalModal';
import { OrderDataProvider } from './src/context/OrderData/OrderDataProvider';
import { ThemeProvider }     from './src/context/Theme/ThemeProvider';

import { Navigation }        from './src/navigation';
import { store }             from './src/store';

function App() {
    useEffect(() => {
        LogBox.ignoreAllLogs(true);
    }, []);

    return (
        <Provider store = {store}>
            <ThemeProvider>
                <ModalProvider>
                    <OrderDataProvider>
                        <Navigation />
                        <GlobalModal />
                    </OrderDataProvider>
                </ModalProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
