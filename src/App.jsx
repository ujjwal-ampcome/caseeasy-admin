import React from "react";
import routerBindings, {
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
import { Login } from "./pages/login";
import { Contact } from "./pages/contact";
import { Dashboard } from "./pages/dashboard";
import { CustomSider } from "./components/layouts/sider";
import { CustomHeader } from "./components/layouts/header";
import { CustomFooter } from "./components/layouts/footer";
import { PrimaryContact } from "./pages/contact/contact-component/personal-contact";

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
                      name: "dashboard",
                      list: "/dashboard",
                    },
                    {
                      name: "calender",
                      list: "/calender",
                    },
                    {
                      name: "cases",
                      list: "/cases",
                    },
                    {
                      name: "tasks",
                      list: "/tasks",
                    },
                    {
                      name: "contacts",
                      list: "/contacts",
                    },
                    {
                      name: "primary-contact",
                      list: "/primary-contact",
                    },
                    {
                      name: "emails",
                      list: "/emails",
                    },
                    {
                      name: "sharedlibrary",
                      list: "/sharedlibrary",
                    },
                    {
                      name: "messagehub",
                      list: "/messagehub",
                    },
                    {
                      name: "reports",
                      list: "/reports",
                    },
                    {
                      name: "settings",
                      list: "/settings",
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
                          redirectOnFail={"/login"}
                          appendCurrentPathToQuery={false}
                        >
                          <ThemedLayoutV2
                            Sider={CustomSider}
                            Header={CustomHeader}
                            Footer={CustomFooter}
                          >
                            <Outlet />
                          </ThemedLayoutV2>
                        </Authenticated>
                      }
                    >
                      <Route index element={<NavigateToResource />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/contacts" element={<Contact />} />
                      <Route
                        path="/primary-contact"
                        element={<PrimaryContact />}
                      />

                      <Route path="*" element={<ErrorComponent />} />
                    </Route>

                    <Route>
                      <Route path="/login" element={<Login />} />
                    </Route>
                  </Routes>
                  <RefineKbar />
                  <UnsavedChangesNotifier />
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
