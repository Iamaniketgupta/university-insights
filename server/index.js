import connectDB from "./src/db/index.js";
import app from "./src/app.js";


await connectDB();



app.use('/', (req, res) => {
  res.send('Server is online')
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running the Srver on port ${port}`);
});

