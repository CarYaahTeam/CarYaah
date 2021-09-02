var adminRouter = require("express").Router();
var admincontroller = require("../controllers/admincontroller");

adminRouter.route("/clients").get(admincontroller.fetchclients);
adminRouter.route("/owners").get(admincontroller.fetchowners);

module.exports = adminRouter;
