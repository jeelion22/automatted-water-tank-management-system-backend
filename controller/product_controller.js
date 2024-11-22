const axios = require("axios");

const productController = {
  createProduct: async (req, res) => {
    try {
      const product = req.body;

      const productStatus = await axios.post(
        "https://eureka.innotrat.in/product",
        product
      );

      res.status(200).json({
        message: "Product created successfully",
        data: productStatus.data,
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  createDevice: async (req, res) => {
    const productId = req.params.productId;
    const deviceCount = req.body.deviceCount;

    try {
      const result = await axios.post(
        `https://eureka.innotrat.in/product/${productId}/devices`,
        { deviceCount }
      );

      res
        .status(201)
        .json({ message: "Device(s) created successfully", data: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  startDevice: async (req, res) => {
    const productId = req.params.productId;
    const devices = req.body;

    console.log(devices);

    try {
      const result = await axios.post(
        `https://eureka.innotrat.in/product/${productId}/devices/control`,
        devices
      );

      res
        .status(200)
        .json({ message: "Device started successfully", data: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  stopDevice: async (req, res) => {
    const productId = req.params.productId;
    const devices = req.body;

    console.log(devices);

    try {
      const result = await axios.post(
        `https://eureka.innotrat.in/product/${productId}/devices/control`,
        devices
      );

      res
        .status(200)
        .json({ message: "Device stopped successfully", data: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  checkDeviceRunning: async (req, res) => {
    const productID = req.body;

    console.log(productID);

    try {
      const result = await axios.post(
        "https://eureka.innotrat.in/devices/running",
        productID
      );

      res.status(200).json({ data: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  createProductDefinition: async (req, res) => {
    const productID = req.params.productID;

    const productDefinition = req.body;

    try {
      const result = await axios.post(
        `https://eureka.innotrat.in/product/${productID}/definition`,
        productDefinition
      );

      res.status(201).json(result.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  getProductDefinition: async (req, res) => {
    const productID = req.params.productID;

    console.log(productID);

    try {
      const result = await axios.get(
        `https://eureka.innotrat.in/product/${productID}/definition`
      );

      res.status(200).json(result.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  generateData: async (req, res) => {
    const productID = req.body;

    try {
      const result = await axios.post(
        "https://eureka.innotrat.in/generate_data",

        { productID }
      );
      res.status.json({
        message: "Data generated successfully",
        data: result.data,
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  updateProductDefinition: async (req, res) => {
    const productID = req.params.productID;

    const updates = req.body;

    try {
      const result = await axios.patch(
        `https://eureka.innotrat.in/product/${productID}/components`,
        { updates }
      );
      res.status(200).json({ message: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  deleteDefintion: async (req, res) => {
    const productID = req.params.productID;

    try {
      await axios.delete(
        `https://eureka.innotrat.in/product/${productID}/definition`
      );

      res
        .status(204)
        .json({ message: "Product definition deleted successfully" });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  deleteParticularComponent: async (req, res) => {
    const productID = req.params.productID;
    const noNeedComponent = req.params.noNeedComponent;

    try {
      const result = await axios.delete(
        `https://eureka.innotrat.in/product/${productID}/components/${noNeedComponent}`
      );

      res.status(200).json({ message: result.data });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },

  getData: async (req, res) => {
    const productID = req.body;

    try {
      const result = await axios.post("https://eureka.innotrat.in/get_data", {
        productID,
      });
      res.status.json({
        message: "Data generated successfully",
        data: result.data,
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        res.status(error.response.status).json({
          message: error.response.data,
        });
      } else if (error.request) {
        res.status(500).json({
          message: error.request.data,
        });
      } else {
        res.status(500).json({
          message: "An unexpected error occurred",
        });
      }
    }
  },
};

module.exports = productController;
