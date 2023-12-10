/**
 * authentication service -- appwrite provide this service
 * write code -- vendor restriction
 *
 * code structure :
 * -- make a class( of service we are making) and its methods
 * -- exporting object of the class
 * explaniation this way our ui need not to know what fun is using && it becomes easy in case
 * vendor changes.
 */

import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class authentication {
  //prop
  client = new Client();
  account;

  //constructor -- mistake here wrote it in java format
  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint were not assscessable .env
      .setProject("654e2103c2c1f9854391"); // Your project ID

    this.account = new Account(this.client);
  }

  //async methods -- craeting acc , logging in/out , current user
  async createAccount({ name, email, password }) {
    try {
      const account = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (account) {
        console.log("login taking place");
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
      return await this.account.createEmailSession(email, password);
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

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(` current user ${error}`);
    }
    return null;
  }
}

const authService = new authentication();
export default authService;
