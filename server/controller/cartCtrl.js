module.exports = {
  addToCart: async (req, res) => {
    const db = req.app.get("db");
    //check to see if user already has cart by quereing the cart table passing in the user id
    //if !user at [0].cartId
    //if not then create cart for then db.create_cart and insert item id
    // then add item to that cart
    //if they do have a car
    db.cart.addToCart.then((addedToCart) => {
      res.status(200).send(addedToCart);
    });
  },

  deleteItems: async (req, res) => {
    const db = req.app.get("db");
    db.cart.delete_all_from_cart.then((deleteAll) => {
      res.status(200).send(deleteAll);
    });
  },

  deleteItem: async (req, res) => {
    console.log(req.params);
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_one_from_cart(id).then((deletedItem) => {
      res.status(200).send(deletedItem);
    });
  },
};
