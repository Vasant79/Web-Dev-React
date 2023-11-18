/**
 * authentication service -- appwrite provide this service
 * write code -- vendor restriction
 *
 * code structure :
 * -- make a class( of service we are making) and its methods
 * -- exporting object of the class
 * explaniation this way oue ui need not to know what fun is using && it becomes easy in case
 * vendor changes.
 */

import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class authentication {
  //prop
  client = new Client();
  account;

  //constructor
  User() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your API Endpoint
      .setProject(config.appwriteProjectId); // Your project ID

    this.account = new Account(client);
  }

  //methods -- craeting acc , logging in/out , current user
  async createAccount({ name, email, password }) {
    try {
      const res = await account.create(ID.unique(), name, email, password);

      if (res) {
        return this.login({ email, password });
      } else {
        console.log("create account problem res not true");
      }
    } catch (error) {
      console.log(`sign up error ${error}`);
    }
  }

  async login({ email, password }) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      console.log(`login error ${error}`);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`logout error ${error}`);
    }
  }

  async currentUser() {
    try {
      await this.account.get();
    } catch (error) {
      console.log(` current user ${error}`);
    }
  }
}

authService = new authentication();
export default authService;
