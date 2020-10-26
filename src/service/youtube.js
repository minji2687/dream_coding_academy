class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&key=${this.key}`,

      this.getRequestOption
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&q=${query}&type=video&key=${this.key}`,
      this.getRequestOption
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }
}

export default Youtube;
