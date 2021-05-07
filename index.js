
const express = require('express');
const app = express();
const {dbUrl, port} = require('./config');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) throw Error(err);

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
}
);

app.use(express.json());

app.use('/users', userRouter);