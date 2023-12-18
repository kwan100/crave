import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';

const app = express();
const directory = new URL('.', import.meta.url).pathname;

app.use(cors());
app.use(express.static(path.join(directory, 'dist/crave')));
app.use(express.json());

app.get('/search', async (req, res) => {
  const location = req.query.location;
  try{
    const response = await axios.get(`https://api.yelp.com/v3/businesses/search?location=${location}`, {
      headers: {
        Authorization: `Bearer -PP4F60AhJqZ4QoUiTYwUJXa0MsfnC_yVtg46zZjbSEI8b2nDXiDe8FIjNe16RLp5hNPsyX5fTgEB6gR9bbz42SuxNgRAyYfmrXc_m68yFoSpXO8swg9F-YkaEF_ZXYx`
      }
    });
    res.json(response.data);
  }
  catch (error) {
    res.json([]);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
