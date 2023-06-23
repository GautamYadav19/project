create database PYG;
use pyg;
-- User table
CREATE TABLE User (
  userId INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  FirstTimeSignUpDate DATE,
  FirstTimeSignUpTime TIME
);

-- Address table
CREATE TABLE Address (
  addressId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  locality VARCHAR(255) NOT NULL,
  code VARCHAR(10) NOT NULL,
  state VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  FOREIGN KEY (userId) REFERENCES User(userId)
);

-- Product table
CREATE TABLE Product (
  productId INT PRIMARY KEY AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- UploadedImages table
CREATE TABLE UploadedImages (
  imageId INT PRIMARY KEY AUTO_INCREMENT,
  productId INT,
  image VARCHAR(255) NOT NULL,
  sizeOfImage INT NOT NULL,
  uploadedDate DATE NOT NULL,
  uploadedTime TIME NOT NULL,
  FOREIGN KEY (productId) REFERENCES Product(productId)
);

-- Cart table
CREATE TABLE Cart (
  cartId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  FOREIGN KEY (userId) REFERENCES User(userId)
);

-- CartItem table
CREATE TABLE CartItem (
  cartItemId INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT,
  productId INT,
  numberOfProduct INT,
  FOREIGN KEY (cartId) REFERENCES Cart(cartId),
  FOREIGN KEY (productId) REFERENCES Product(productId)
);

-- Review table
CREATE TABLE Review (
  reviewId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  productId INT,
  reviewText TEXT,
  rating INT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES User(userId),
  FOREIGN KEY (productId) REFERENCES Product(productId)
);

-- Promotion table
CREATE TABLE Promotion (
  promotionId INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(50) NOT NULL,
  discountAmount DECIMAL(10, 2) NOT NULL,
  expiryDate DATE,
  conditions TEXT
);

-- Order table
CREATE TABLE OrderI (
  orderId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  orderDate DATE,
  orderTime TIME,
  totalAmount DECIMAL(10, 2),
  shippingInformation VARCHAR(255),
  paymentInformation VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES User(userId)
);

-- OrderItem table
CREATE TABLE OrderItem (
  orderItemId INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  productId INT,
  numberOfProduct INT,
  price DECIMAL(10, 2),
  FOREIGN KEY (orderId) REFERENCES OrderI(orderId),
  FOREIGN KEY (productId) REFERENCES Product(productId)
);

-- Inserting sample data into the User table
INSERT INTO User (email, password, FirstTimeSignUpDate, FirstTimeSignUpTime)
VALUES
  ('user1@example.com', 'password1', '2023-01-01', '09:00:00'),
  ('user2@example.com', 'password2', '2023-01-02', '10:30:00'),
  ('user3@example.com', 'password3', '2023-01-03', '14:15:00'),
  ('user4@example.com', 'password4', '2023-01-04', '16:45:00'),
  ('user5@example.com', 'password5', '2023-01-05', '11:20:00'),
  ('user6@example.com', 'password6', '2023-01-06', '08:45:00'),
  ('user7@example.com', 'password7', '2023-01-07', '13:10:00'),
  ('user8@example.com', 'password8', '2023-01-08', '10:00:00'),
  ('user9@example.com', 'password9', '2023-01-09', '15:30:00'),
  ('user10@example.com', 'password10', '2023-01-10', '12:05:00');

-- Inserting sample data into the Address table
INSERT INTO Address (userId, street, city, locality, code, state, country)
VALUES
  (1, '123 Main St', 'Cityville', 'Locality1', '12345', 'State1', 'Country1'),
  (2, '456 Elm St', 'Townville', 'Locality2', '23456', 'State2', 'Country2'),
  (3, '789 Oak St', 'Villageville', 'Locality3', '34567', 'State3', 'Country3'),
  (4, '321 Pine St', 'Hamletville', 'Locality4', '45678', 'State4', 'Country4'),
  (5, '654 Maple St', 'Suburbville', 'Locality5', '56789', 'State5', 'Country5'),
  (6, '987 Cedar St', 'Ruraltown', 'Locality6', '67890', 'State6', 'Country6'),
  (7, '213 Birch St', 'Urbanville', 'Locality7', '78901', 'State7', 'Country7'),
  (8, '546 Ash St', 'Metropolis', 'Locality8', '89012', 'State8', 'Country8'),
  (9, '879 Spruce St', 'Megacity', 'Locality9', '90123', 'State9', 'Country9'),
  (10, '132 Fir St', 'Gigacity', 'Locality10', '01234', 'State10', 'Country10');

-- Inserting sample data into the Product table
INSERT INTO Product (productName, price)
VALUES
  ('Product 1', 10.99),
  ('Product 2', 19.99),
  ('Product 3', 24.99),
  ('Product 4', 15.99),
  ('Product 5', 12.99),
  ('Product 6', 9.99),
  ('Product 7', 18.99),
  ('Product 8', 14.99),
  ('Product 9', 21.99),
  ('Product 10', 11.99);

-- Inserting sample data into the UploadedImages table
INSERT INTO UploadedImages (productId, image, sizeOfImage, uploadedDate, uploadedTime)
VALUES
  (1, 'image1.jpg', 1024, '2023-01-01', '09:30:00'),
  (2, 'image2.jpg', 2048, '2023-01-02', '10:45:00'),
  (3, 'image3.jpg', 512, '2023-01-03', '14:30:00'),
  (4, 'image4.jpg', 768, '2023-01-04', '17:00:00'),
  (5, 'image5.jpg', 1280, '2023-01-05', '11:45:00'),
  (6, 'image6.jpg', 2560, '2023-01-06', '09:15:00'),
  (7, 'image7.jpg', 2048, '2023-01-07', '13:30:00'),
  (8, 'image8.jpg', 1024, '2023-01-08', '10:30:00'),
  (9, 'image9.jpg', 512, '2023-01-09', '15:45:00'),
  (10, 'image10.jpg', 768, '2023-01-10', '12:30:00');

-- Inserting sample data into the Cart table
INSERT INTO Cart (userId)
VALUES
  (1),
  (2),
  (3),
  (4),
  (5),
  (6),
  (7),
  (8),
  (9),
  (10);

-- Inserting sample data into the CartItem table
INSERT INTO CartItem (cartId, productId, numberOfProduct)
VALUES
  (1, 1, 2),
  (2, 2, 1),
  (3, 3, 3),
  (4, 4, 1),
  (5, 5, 2),
  (6, 6, 1),
  (7, 7, 3),
  (8, 8, 2),
  (9, 9, 1),
  (10, 10, 2);

-- Inserting sample data into the Review table
INSERT INTO Review (userId, productId, reviewText, rating)
VALUES
  (1, 1, 'This is a great product!', 5),
  (2, 2, 'Not satisfied with the quality.', 2),
  (3, 3, 'Highly recommended!', 5),
  (4, 4, 'Average product.', 3),
  (5, 5, 'Good value for money.', 4),
  (6, 6, 'Excellent service!', 5),
  (7, 7, 'Could be better.', 3),
  (8, 8, 'Love this product!', 5),
  (9, 9, 'Not what I expected.', 2),
  (10, 10, 'Decent product.', 3);

-- Retrieve the top-selling products (based on the total quantity sold): 
SELECT p.productName, SUM(oi.numberOfProduct) AS totalQuantitySold
FROM Product p
JOIN OrderItem oi ON p.productId = oi.productId
GROUP BY p.productId
ORDER BY totalQuantitySold DESC
LIMIT 5;
SELECT CASE
    WHEN FLOOR(DATEDIFF(CURDATE(), u.birthdate) / 365) BETWEEN 18 AND 25 THEN '18-25'
    WHEN FLOOR(DATEDIFF(CURDATE(), u.birthdate) / 365) BETWEEN 26 AND 35 THEN '26-35'
    WHEN FLOOR(DATEDIFF(CURDATE(), u.birthdate) / 365) BETWEEN 36 AND 45 THEN '36-45'
    ELSE '46+'
    END AS ageGroup,
    AVG(o.totalAmount) AS averageOrderValue
FROM User u
JOIN `OrderI` o ON u.userId = o.userId
GROUP BY ageGroup;
SELECT product_name, SUM(quantity_sold) AS total_quantity_sold
FROM sales
GROUP BY product_name
ORDER BY total_quantity_sold DESC
LIMIT 10;


SELECT u.email
FROM User u
JOIN `OrderI` o ON u.userId = o.userId
WHERE o.orderDate >= CURDATE() - INTERVAL 30 DAY;

select * from Product