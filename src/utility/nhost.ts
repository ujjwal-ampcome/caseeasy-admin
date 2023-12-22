import { NhostClient } from "@nhost/nhost-js";

const nhost: NhostClient = new NhostClient({
  backendUrl: "https://wincase-dev-api.ampcome.app",
});

export default nhost;
