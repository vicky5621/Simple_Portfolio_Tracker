
CREATE DATABASE portfolio_tracker;

USE portfolio_tracker;

CREATE TABLE stock (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    ticker VARCHAR(10),
    quantity INT,
    buy_price DECIMAL(10, 2)
);
