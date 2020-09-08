UPDATE items SET item_name = $1,
image = $2,
price = $3,
description = $4
WHERE item_id = $5;

SELECT * FROM items WHERE item_id = $5;