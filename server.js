const app = require("./app");
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Okra bulk bvn API running on ${PORT}`));