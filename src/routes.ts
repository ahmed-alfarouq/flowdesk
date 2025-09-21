/**
 * An array of routes that are accessible to the public
 * @type {string[]}
 */
export const PUBLIC_ROUTES = ["/"];

/**
 * An array of routes that are used for authentication
 * @type {string[]}
 */
export const AUTH_ROUTES = [
  "/login",
  "/register",
  "/verify-otp",
  "/verify-email",
  "/forgot-password",
  "/update-password",
];

/**
 * The default redirect pah after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
