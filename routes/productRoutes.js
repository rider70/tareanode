const express = require("express");
const productController = require("./../controllers/productController");
const productRouter = express.Router();
//routes
productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);
  //.put(productController.upateProducts);
  //.delete(productController.deleteProduct);
productRouter.route("/:id").get(productController.getProductById);
productRouter.route("/:id").delete(productController.deleteProduct);
productRouter.route("/:id").put(productController.putProduct);
module.exports = productRouter;
