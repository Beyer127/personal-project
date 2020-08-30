INSERT INTO items
(item_name, image, price, description)
VALUES
($1, $2, $3, $4);
SELECT * FROM items;