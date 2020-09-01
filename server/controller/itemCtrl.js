module.exports = {

    getItems: (req, res) => {
        const db = req.app.get('db')
        db.items.get_items().then(items => {
            res.status(200).send(items)
        })
    },

    postItem: (req, res) => {
        const db = req.app.get('db')
        const {name, image, price, description} = req.body
        db.items.post_item([name, image, price, description]).then(item => {
            res.status(200).send(item)
        })
    },

    editItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {item_name, image, price, description} = req.body
        db.items.edit_item(item_name, image, price, description).then(item => {
            res.status(200).send(item)
        })
    },

    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.items.delete_item(id).then(item => {
            res.status(200).send(item)
        })
    }  
}