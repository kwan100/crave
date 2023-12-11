import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';

const app = express();
const directory = new URL('.', import.meta.url).pathname;

app.use(cors());
app.use(express.static(path.join(directory, 'dist/crave')));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
