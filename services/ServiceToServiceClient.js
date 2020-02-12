const superagent = require("superagent");

class ServiceToServiceClient {
  static makeGetRequest(url) {
    return superagent.get(url).then(res => this.validateResponse(res));
  }

  static validateResponse(res) {
    const { statusCode, type } = res;

    if (statusCode !== 200) {
      throw new Error(`Request Failed. Status Code: ${statusCode}`);
    } else if (type !== "application/json") {
      throw new Error(
        `Invalid content-type. Expected application/json but received ${type}`
      );
    }

    return JSON.parse(res.text);
  }
}

module.exports = ServiceToServiceClient;
