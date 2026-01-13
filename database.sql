-- Creating the Global Business Inquiries Table
CREATE TABLE client_inquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_email VARCHAR(255) NOT NULL,
    service_type VARCHAR(100),
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('New', 'In-Progress', 'Resolved') DEFAULT 'New'
);

-- Sample Data for Strategic Testing
INSERT INTO client_inquiries (client_email, service_type, status)
VALUES ('global.partner@example.com', 'MBA Strategy', 'New'),
       ('tech.startup@example.com', 'Python Architecture', 'In-Progress');