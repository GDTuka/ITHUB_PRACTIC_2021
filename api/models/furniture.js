const db = require("../db_goose");
const OrderSchema = new db.Schema({
    width: {type: Number,default: 0 },
    Mirror: {type: Number, default: 0 },
    Glass: {type: Number, default:0},
    MirrorTypeGlobal: String,
    MirrorTypeCorrect: String,
    Count: {type: Number,default:0}
});
const Order = db.model("Orders", OrderSchema);

module.exports = Order;