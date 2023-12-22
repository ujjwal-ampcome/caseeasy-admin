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
        redirectTo: "/",
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
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },

  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },

  getPermissions: async () => null,

  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        id: 1,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      };
    }
    return null;
  },

  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
