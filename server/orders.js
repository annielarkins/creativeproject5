const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
    dest: '../public/images/',
    limits: {
        fileSize: 10000000
    }
});

const users = require("./users.js");
const User = users.model;

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    tapes: Number,
    slides: Number,
    photos: Number,
    created: {
        type: Date,
        default: Date.now
    },
});

const Order = mongoose.model('Order', orderSchema);

// upload order
router.post("/", auth.verifyToken, User.verify, upload.single('order'), async (req, res) => {

    const order = new Order({
        user: req.user,
        tapes: req.body.tapes,
        slides: req.body.slides,
        photos: req.body.photos
    });
    try {
        await order.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get my order
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
    // return orders
    try {
        let orders = await Order.find({
            user: req.user
        }).sort({
            created: -1
        });
        return res.send(orders);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    model: Order,
    routes: router,
}
