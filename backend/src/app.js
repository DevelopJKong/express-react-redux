import express from "express";
import "dotenv/config";
import rootRouter from "./routers/rootRouter.js";
const app = express();
const PORT = 7000;


app.use(express.json({
    limit: '50mb'
}));
app.use("/api",rootRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
