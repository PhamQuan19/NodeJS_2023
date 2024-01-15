
import { ObjectId, Schema } from "mongoose"
import mongoose from "mongoose"
const Klass =mongoose.model('Klass',
    new Schema({
        id:{type: ObjectId},
        name: {
            type: String,
            require: true,
            validate: {
              validator: (value) => value.length > 3,
              message: "Do dai phai lon hon 3",
            },
          },
    })
)

export default Klass