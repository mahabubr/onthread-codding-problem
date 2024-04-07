import mongoose from "mongoose";
import app from "./app";

// Database Connection

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database connection successful");

    app.listen(5000, () => {
      console.log("Server running on 5000");
    });
  } catch (error) {
    console.log("Failed to connect Database", error);
  }
}

bootstrap();
