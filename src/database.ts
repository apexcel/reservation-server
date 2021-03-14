import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI ?? 'mongodb://root:root@localhost:27017/reservation?authSource=admin';
const config = {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 4
};

const connection = (): void => {
    mongoose.connect(uri, config, (err) => {
        if (err) throw err;
        console.log('MongoDB create pool.');
    });
};

const disconnection = (): void => {
    mongoose.disconnect();
    console.log('MongoDB disconnected.');
};

export {
    connection, disconnection
};
