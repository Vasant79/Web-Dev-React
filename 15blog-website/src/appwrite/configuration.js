import config from "../configig/configig";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("654e2103c2c1f9854391");
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        // config.appwriteDatabaseId,
        "656f68644539e75e1b5d",
        // config.appwriteCollectionId,
        "656f68eecb423540cf59",
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        // config.appwriteDatabaseId,
        "656f68644539e75e1b5d",
        // config.appwriteCollectionId,
        "656f68eecb423540cf59",
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        // config.appwriteDatabaseId,
        "656f68644539e75e1b5d",
        // config.appwriteCollectionId,
        "656f68eecb423540cf59",
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        // config.appwriteDatabaseId,
        "656f68644539e75e1b5d",
        // config.appwriteCollectionId,
        "656f68eecb423540cf59",
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        // config.appwriteDatabaseId,
        "656f68644539e75e1b5d",
        // config.appwriteCollectionId,
        "656f68eecb423540cf59",
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service -----------------------------------------------

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        // config.appwriteBucketId,
        "656f69712d681c6545b9",
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        // config.appwriteBucketId,
        "656f69712d681c6545b9",
        fileId
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      // config.appwriteBucketId,
      "656f69712d681c6545b9",
      fileId
    );
  }
}

const service = new Service();
export default service;
