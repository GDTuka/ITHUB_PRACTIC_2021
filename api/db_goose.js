const db = require("mongoose");


const user = "Tuka";
const pwd = "23445667432Ar";
const uri = `mongodb+srv://${user}:${pwd}@cluster0.krjpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = db