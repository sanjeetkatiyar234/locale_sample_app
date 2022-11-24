export function getHostUrl() {
  try {
    const protocol = window.location.protocol;
    const host = window.location.hostname;
    const port = window.location.port;
    if (port) {
      return `${protocol}//${host}:${port}`;
    } else {
      return `${protocol}//${host}`;
    }
  } catch (err) {
    return "http://localhost";
  }
}

export function getApiRootUrl() {
  //   return `${getHostUrl()}/api`;
  return `${getHostUrl()}`;
}
const encodeParam = (key, value) => `${key}=${encodeURIComponent(value)}`;

export const objectToParamString = (obj) => {
  const params =
    obj &&
    Object.keys(obj)
      .filter((key) => obj[key] !== undefined && obj[key] !== "")
      .map((key) =>
        Array.isArray(obj[key])
          ? obj[key].map((item) => encodeParam(key, item)).join("&")
          : encodeParam(key, obj[key])
      )
      .join("&");
  return params ? `&${params}` : "";
};
