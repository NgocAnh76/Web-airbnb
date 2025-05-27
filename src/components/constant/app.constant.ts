// export let isProduction = import.meta.env.VITE_IS_PRODUCTION === "true";

export const BASE_DOMAIN_API =
  process.env.NEXT_PUBLIC_BASE_DOMAIN_API || `http://45.76.191.187:3070/`;
export const ACCESS_TOKEN = `ACCESS_TOKEN`;
export const REFRESH_TOKEN = `REFRESH_TOKEN`;
export const USER = `USER`;
export const TIMEOUT_SEND_MAIL = `TIMEOUT_SEND_MAIL`;
