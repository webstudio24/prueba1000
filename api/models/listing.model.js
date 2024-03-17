import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        }, 
        description : {
            type: String,
            required: true,
        },
        address : {
            type: String,
            required: true,
        },
        regularPrice : {
            type: Number,
            required: true,
        },
        discountedPrice : {
            type: Number,
            required: true,
        },
        bathrooms : {
            type: Number,
            required: true,
        },
        bedrooms : {
            type: Number,
            required: true,
        },
        furnished : {
            type: Boolean,
            required: true,
        },
        parking : {
            type: Boolean,
            required: true,
        },


        cochera:{
            type: Boolean,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        pool:{
            type: Boolean,
            required: true,
        }
        ,

        mts_cubiertos:{
            type: Number,
            required: true,
        },
        mts_totales:{
            type: Number,
            required: true,
        },
        ambientes:{
            type: Number,
            required: true,
        },

        
       

        type_property:{
            type: String,
            required: true,
        },

        userRef: {
            type: String,
            required: true,
        },


    },{timestamps: true}


)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing