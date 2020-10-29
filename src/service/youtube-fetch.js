class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOption = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&key=${this.key}`,

      this.getRequestOption
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&chart=mostPopular&q=${query}&type=video&key=${this.key}`,
      this.getRequestOption
    );
    const result = await response.json();
    return result.items;
  }
}

export default YoutubeFetch;
