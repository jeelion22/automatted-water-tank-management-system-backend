const express = require("express");
const productController = require("../controller/product_controller");

const productRouter = express.Router();

productRouter.post("/create-product", productController.createProduct);
productRouter.post("/:productId/create-device", productController.createDevice);
productRouter.post("/:productId/start-device", productController.startDevice);
productRouter.post("/:productId/stop-device", productController.stopDevice);
productRouter.post(
  "/check/device-running-status",
  productController.checkDeviceRunning
);
productRouter.post(
  "/:productID/product-definition",
  productController.createProductDefinition
);
productRouter.get(
  "/:productID/product-definition",
  productController.getProductDefinition
);
productRouter.post("/generate-data", productController.generateData);
productRouter.post(
  "/:productID/defintion-update",
  productController.updateProductDefinition
);
productRouter.delete(
  "/:productID/product-definition-deletion",
  productController.deleteDefintion
);

productRouter.delete(
  "/:productID/component/:noNeedComponent",
  productController.deleteParticularComponent
);
productRouter.post("/get-data", productController.getData);

module.exports = productRouter;
