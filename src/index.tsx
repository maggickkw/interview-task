import React, {useCallback, useEffect, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

// import SplashScreen from 'react-native-splash-screen';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {Toaster} from 'sonner-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import { rootStackParams } from './types/navigation';
import RootNav from './navigation';
import { persistor, store } from './store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      // retry: 0,
      retryDelay: 500,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
      refetchOnReconnect: 'always',
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

function App(): React.JSX.Element {
  const navigationRef = useRef<NavigationContainerRef<rootStackParams>>(null);
  const routeNameRef = useRef<string>(null);

  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }, [routeNameRef, navigationRef]);

  const onStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef?.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    routeNameRef.current = currentRouteName;
  }, [routeNameRef, navigationRef]);

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <Provider store={store}>
            <PersistQueryClientProvider
              client={queryClient}
              persistOptions={{persister: asyncStoragePersister}}>
              <PersistGate persistor={persistor}>
                <NavigationContainer
                  ref={navigationRef}
                  onReady={onReady}
                  onStateChange={onStateChange}>
                  <RootNav />
                </NavigationContainer>
                <Toaster />
              </PersistGate>
            </PersistQueryClientProvider>
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  );
}

export default App;
