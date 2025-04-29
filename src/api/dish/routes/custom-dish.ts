export default {
    routes: [
      {
        method: "GET",
        path: "/dishes/:id",
        handler: "custom-dish.getDish",
        config: {
            policies: [],
            middlewares: [],
        },
      },
      {
        method: "GET",
        path: "/dishes/",
        handler: "custom-dish.getAllDishes",
        config: {
            policies: [],
            middlewares: [],
        },
      },
    ],
  };
  