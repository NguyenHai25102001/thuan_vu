import React from "react";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import AppNavigation from "./navigation";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AppProvider } from "./contexts/app.context";
import { AppProvider } from "./contexts/app.context";
const queryClient = new QueryClient();
const Layout = () => {
  return (
    // <Provider store={store}>
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <QueryClientProvider client={queryClient}>
              <AppProvider>
                <AppNavigation />
              </AppProvider>
            </QueryClientProvider>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
    // </Provider>
  );
};
export default Layout;
