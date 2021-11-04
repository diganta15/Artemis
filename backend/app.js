const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { userDataRouter } = require("./routes/userData");

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
