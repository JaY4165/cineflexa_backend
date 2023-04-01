import * as dotenv from "dotenv";
import app from "./app";
import { envSchema } from "./utils/env.validate";
import mongoose from "mongoose";

dotenv.config();

const envVars = envSchema.parse(process.env);

const port = parseInt(envVars.PORT);

const uri = envVars.MONGO_CONNECTION_STRING;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((error) => console.log(error));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
