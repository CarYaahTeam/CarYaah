var adminRouter = require("express").Router();
var admincontroller = require("../controllers/admincontroller");

adminRouter.route("/login").post(admincontroller.loginAdmin);
adminRouter.route("/clients").get(admincontroller.fetchclients);
adminRouter.route("/owners").get(admincontroller.fetchowners);
adminRouter.route("/delete/client").delete(admincontroller.deleteClient);

module.exports = adminRouter;
