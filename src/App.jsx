import React from "react";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import nhost from "./utility/nhost";
import { App as AntdApp } from "antd";
import "@refinedev/antd/dist/reset.css";
import dataProvider from "@refinedev/nhost";
import { NhostProvider } from "@nhost/react";
import { authProvider } from "./authProvider";
import { DevtoolsProvider } from "@refinedev/devtools";
import { Authenticated, Refine } from "@refinedev/core";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  ErrorComponent,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/antd";
import { CustomSider } from "./components/layouts/sider";
import { CustomHeader } from "./components/layouts/header";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <NhostProvider nhost={nhost}>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <AntdApp>
              <DevtoolsProvider>
                <Refine
                  dataProvider={dataProvider(nhost)}
                  notificationProvider={useNotificationProvider}
                  routerProvider={routerBindings}
                  authProvider={authProvider}
                  resources={[
                    {
                      name: "home",
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: false,
                    useNewQueryKeys: true,
                    projectId: "M03i44-8rx61Q-zwJbRA",
                  }}
                >
                  <Routes>
                    <Route
                      element={
                        <Authenticated
                          key="authenticated-inner"
                          appendCurrentPathToQuery={false}
                          fallback={<CatchAllNavigate to="/login" />}
                        >
                          <ThemedLayoutV2
                            Sider={CustomSider}
                            Header={CustomHeader}
                          >
                            <Outlet />
                          </ThemedLayoutV2>
                        </Authenticated>
                      }
                    >
                      <Route path="/home" element={<Dashboard />} />
                      <Route path="*" element={<ErrorComponent />} />
                    </Route>
                    <Route
                      element={
                        <Authenticated
                          key="authenticated-outer"
                          fallback={<Outlet />}
                        >
                          <NavigateToResource />
                        </Authenticated>
                      }
                    >
                      <Route path="/login" element={<Login />} />
                    </Route>
                  </Routes>
                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                </Refine>
              </DevtoolsProvider>
            </AntdApp>
          </ColorModeContextProvider>
        </RefineKbarProvider>
      </NhostProvider>
    </BrowserRouter>
  );
}

export default App;
