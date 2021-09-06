var adminRouter = require("express").Router();
var admincontroller = require("../controllers/admincontroller");

adminRouter.route("/login").post(admincontroller.loginAdmin);
adminRouter.route("/clients").get(admincontroller.fetchclients);
adminRouter.route("/owners").get(admincontroller.fetchowners);
adminRouter.route("/conflicts").get(admincontroller.fetchconflicts);
adminRouter.route("/delete/client/:id").delete(admincontroller.deleteClient);
adminRouter.route("/delete/owner/:id").delete(admincontroller.deleteOwner);

module.exports = adminRouter;
