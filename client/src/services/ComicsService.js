const url = "/comics";

class ComicsService {
  static getComics() {
    return fetch(url).then(res => res.json());
  }
}

export default ComicsService;
