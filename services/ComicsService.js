const ServiceToServiceClient = require("./ServiceToServiceClient");

const host = "https://xkcd.com";
const path = "info.0.json";

function getUrl(id) {
  return host + (id !== undefined ? `/${id}/` : "/") + path;
}

function getValidResponses(responses) {
  return responses.filter(res => !(res instanceof Error));
}

class ComicsService extends ServiceToServiceClient {
  static getComic(id) {
    const url = getUrl(id);
    return this.makeGetRequest(url).catch(err => {
      console.log(err);
      return err;
    });
  }
  static async getComics() {
    // Need to request the latest comic first for its id so we know which ids to request for the other 9
    const latestComic = await this.makeGetRequest(getUrl());
    // Once we have the latest comic's id, we can asyncronously request the other 9
    let id = latestComic.num;
    const promises = [];
    while (id >= latestComic.num - 9) {
      promises.push(this.getComic(id));
      id--;
    }
    // Once we have all responses, filter out any errors, and return the results
    const comics = await Promise.all(promises);
    return getValidResponses(comics);
  }
}

module.exports = ComicsService;
