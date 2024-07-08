import { User } from "../models/User";
import connection from "./db";

export async function authenticate() {
  try {
    await connection.authenticate();
    console.log(
      "🦜️🦜️🦜️ Db Connection has been established successfully.🦜️🦜️🦜️"
    );
    // Example usage: create a new user
    await User.create({
      username: "john_doe",
      email: "john.doe@example.com",
      password: "password123",
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
