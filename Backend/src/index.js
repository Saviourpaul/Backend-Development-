import dotenv from "dotenv";
import connectDB from "../config/databse.js";
import app from "./app.js";


dotenv.config();

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (err) => {
            console.error("Error starting the server:", err);
            throw err;
        });
        app.listen(process.env.PORT || 8080 , () => {
            console.log(`Server is running on port ${process.env.PORT || 8080}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }

}

startServer();
