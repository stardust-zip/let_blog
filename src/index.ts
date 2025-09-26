import express, { Express, Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Let's Blog");
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
