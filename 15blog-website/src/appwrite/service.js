/**
 * make a class service which have diff method as service
 * eg : create post , update post, delete post etc
 *
 * find more about appwrite db and storage/bucket
 *
 * bucket -- storage for upload file
 */

import { Databases } from "appwrite";

class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint were not assscessable .env
      .setProject("654e2103c2c1f9854391"); // Your project ID

    this.databases = new Databases(this.client);
  }

  //services -- creating a post--201 / update a post etc
  async createPost({ title, slug, content }) {
    try {
      //db id , collection id
      return await this.databases.createPost(
        "656f68644539e75e1b5d",
        "656f68eecb423540cf59",
        slug,
        { title, content }
      );
    } catch (error) {
      console.log("Error in creating post " + error);
    }
  }

  //200
  async updatePost(slug, { title, content }) {
    try {
      return await this.databases.updateDocument(
        "656f68644539e75e1b5d",
        "656f68eecb423540cf59",
        slug,
        {
          title,
          content,
        }
      );
    } catch (error) {
      console.log(`Error at update post ${error}`);
    }
  }

  //204
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        "656f68644539e75e1b5d",
        "656f68eecb423540cf59",
        slug
      );
      return true;
    } catch (error) {
      console.log(`Error at delete post ${error}`);
    }
  }
  //200
  async listPost() {
    try {
      return await this.databases.listDocuments(
        "656f68644539e75e1b5d",
        "656f68eecb423540cf59"
        //query
      );
    } catch (error) {
      console.log(`Error at getting list ${error}`);
    }
  }

  //200
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        "656f68644539e75e1b5d",
        "656f68eecb423540cf59",
        slug
      );
    } catch (error) {
      console.log(`Error at getPost ${getPost}`);
    }
  }
}

const service = new Service();
export default service;
