class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    console.log(response.data.items);
    return response.data.items;
  }

  async search(value) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: value,
        type: "video",
      },
    });
    return response.data.items;
  }
}

export default Youtube;
