module.exports = {
    deleteItems: async (req, res) => {
        const db = req.app.get('db')
        db.cart.delete_all_from_cart.then((deleteAll) => {
            res.status(200).send(deleteAll)
        })
    },

    deleteItem: async (req, res) => {
        console.log(req.params)
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_one_from_cart(id).then(deletedItem => {
            res.status(200).send(deletedItem)
        })
    }
}