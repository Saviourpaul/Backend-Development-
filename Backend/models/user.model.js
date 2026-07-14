import mongoose,{Schema, scheme} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required

        }
    }
)