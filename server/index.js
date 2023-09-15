import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from './routes/products.js'


const app = express();

app.use(bodyParser.json({ limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit:'30mb', extended: true}))
app.use(cors())

app.use('/products',productRoutes)

const CONNECTION_URL = 'mongodb+srv://muskankapoor:muskankapoor14@cluster0.a7gzy5l.mongodb.net/'
const PORT = process.env.PORT || 2000

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
.catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify',false)