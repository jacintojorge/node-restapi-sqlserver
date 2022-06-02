import express from "express";
import config from "./config";
import productsRoutes from "./routes/products.routes";
import cors from "cors";

const app = express();

// settings
app.set("port", config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin:'*'}))

// Routes
app.use(productsRoutes);

export default app;
