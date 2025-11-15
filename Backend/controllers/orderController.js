import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// Placing order using Cash on delivery method
const placeOrder = async (req,res) => {
    try{
        const {userId,items,amount,address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
}

// Placing order using Stripe method
const placeOrderStripe = async (req,res) => {

}

// Placing order using Razorpay method
const placeOrderRazorpay = async (req,res) => {

}

// All orders data for admin panels
const allOrders = async (req,res) => {

}

// User order data for frontend
const userOrders = async (req,res) => {
    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})

        res.json({success:true,orders})
    } catch (error) {
        console.log(err)
        res.json({success:false,message:err.message})
    }
}

// Update order status from Admin panel
const updateStatus = async (req,res) => {

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}