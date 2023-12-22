import "@/styles/index.css";
import type { AppProps } from 'next/app';
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';
import { bdPostStore, persistor } from "../store/bdPostStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (

    <Provider store={bdPostStore}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider><Component {...pageProps} /></NextUIProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>


  )
}
