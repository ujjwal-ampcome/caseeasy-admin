import routerBindings, {
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { ThemedLayoutV2, useNotificationProvider } from "@refinedev/antd";
import { CustomSider } from "./components";
import { Login } from "./pages/login";

const App = () => {
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
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "M03i44-8rx61Q-zwJbRA",
                  }}
                >
                  <Routes>
                    {/* <Route
                      element={
                        <ThemedLayoutV2 Sider={CustomSider}></ThemedLayoutV2>
                      }
                    >
                      <Route
                        index
                        element={<NavigateToResource resource="posts" />}
                      />
                      <Route path="/posts" element={<PostList />} />
                      <Route path="*" element={<ErrorComponent />} />
                    </Route> */}
                    <Route index element={<Login />} />

                    {/* <Route
                    element={
                      <Authenticated key="auth-pages" fallback={<Outlet />}>
                        <NavigateToResource resource="/" />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                  </Route> */}
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
};

export default App;
