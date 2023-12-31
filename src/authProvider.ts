import nhost from "./utility/nhost";
import { AuthBindings } from "@refinedev/core";

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
  register: async (props) => {
    const value = await nhost.auth.signUp({
      email: props.email,
      password: props.password,
      options: {
        defaultRole: "user",
        allowedRoles: ["user"],
      },
    });

    if (value.error) {
      return {
        success: false,
        error: {
          message: value.error.message,
          name: "Sign up error",
        },
      };
    }
    return {
      success: true,
      redirectTo: "/login",
    };
  },

  login: async ({ siteid, email, password }) => {
    let value;
    if ((siteid || email) && password) {
      value = await nhost.auth.signIn({
        email,
        password,
      });
    }

    if (value?.session) {
      return {
        success: true,
        redirectTo: "/dashboard",
      };
    } else {
      return {
        success: false,
        error: {
          name: "LoginError",
          message: "Invalid siteid, email or password",
        },
      };
    }
  },

  logout: async () => {
    const { error } = await nhost.auth.signOut();
    if (error) {
      return {
        success: false,
        error: {
          message: error.message,
          name: "Login Error",
        },
      };
    }

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  check: async () => {
    const isAuthenticated = await nhost.auth.isAuthenticatedAsync();
    if (isAuthenticated) {
      return {
        authenticated: true,
      };
    }
    return {
      authenticated: false,
      error: {
        message: "Check failed",
        name: "Not authenticated",
      },
      logout: true,
      redirectTo: "/login",
    };
  },

  getPermissions: async () => null,

  getIdentity: async () => {
    const data = nhost.auth.getUser();
    if (data) {
      return data;
    }
    return null;
  },

  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
