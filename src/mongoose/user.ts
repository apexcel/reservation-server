import mongoose from 'mongoose';

const user = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true }
});

export default mongoose.model('User', user);