import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    // requests should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // we are on the browser
    // request can be made with a base url of ''
    return axios.create({});
  }
};
