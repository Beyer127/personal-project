CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email VARCHAR(250),
    password VARCHAR(300)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name TEXT,
    image VARCHAR(500),
    price INT,
    description TEXT
);

CREATE TABLE cart (
    cart_item_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
);

CREATE TABLE cart_item(
    cart_item_id INT REFERENCES users(user_id),
    item_id INT REFERENCES cart(cart_id)
)