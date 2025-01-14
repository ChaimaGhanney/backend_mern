import mongoose from 'mongoose'



const connectDB = () => {
  //mongoose.connect('mongodb://127.0.0.1:27017/stock?retryWrites=true&w=majority&appName=stock')
  mongoose.connect('mongodb+srv://chaimaghanney05:uwLReZAMlzKDsNgF@cluster0.tmx1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log(`Db connected : ${process.env.MONGO_URI} `);
  })
  .catch((err) => { console.log(err) });
}
  export default  connectDB; 


