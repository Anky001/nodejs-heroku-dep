import express from 'express';
import path from 'path';

const app = express();

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

console.log(path.join(__dirname, '../public'));

app.get('/name', (req, res) => {
  res.send({
    name: 'Ankit Pant',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
