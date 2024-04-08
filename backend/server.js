import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';


// Create an Express application
const app = express();

const PORT = process.env.PORT || 3000;

// Parse incoming request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api' , userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





