class Storage {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint were not assscessable .env
      .setProject("654e2103c2c1f9854391"); // Your project ID

    this.storage = new Storage(this.client);
  }

  // methods -- storage / bucket mainly for when user uploads file
  async createFile(slur) {
    //[BUCKET_ID]', '[FILE_ID]', document.getElementById('uploader').files[0]
    try {
      return await this.storage.createFile(
        "656f69712d681c6545b9",
        slur,
        document.getElementById("uploader").files[0]
      );
    } catch (error) {
      console.log(`Error at create file ${error}`);
      return false;
    }
  }

  async downloadFile(slur) {
    try {
      return await this.storage.downloadFile("656f69712d681c6545b9", slur);
    } catch (error) {
      console.log(`Error at download file ${error}`);
      return false;
    }
  }
}

const storage = new Storage();
export default storage;
