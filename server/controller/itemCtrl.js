module.exports = {
  getItems: (req, res) => {
    const db = req.app.get("db");
    db.items.get_items().then((items) => {
      res.status(200).send(items);
    });
  },

  postItem: (req, res) => {
    const db = req.app.get("db");
    const { itemName, image, price, description } = req.body;
    db.items.post_item([itemName, image, price, description]).then((item) => {
      res.status(200).send(item);
    });
  },

  editItem: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const { itemName, image, price, description } = req.body;
    db.items.edit_item(itemName, image, price, description, id).then((item) => {
      console.log(item);
      res.status(200).send(item);
    });
  },

  deleteItem: (req, res) => {
    console.log(req.params);
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id);
    db.items.delete_item(id).then((item) => {
      res.status(200).send(item);
    });
  },
};
