import express from 'express';


const app = express();

app.listen(3003, ()=>{
    console.log('Server is Listening on port 3003!');
});