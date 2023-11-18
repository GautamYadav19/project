create database ecommerce;

use ecommerce;

create table Image_Table(
image_ID int primary key auto_increment not null,
path varchar(255),
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table Description_Table(
description_ID int primary key auto_increment not null,
tableFormateId int not null,
listFormateId int not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp,
foreign key (tableFormateId) references TablesFormateTable,
foreign key (listFormateId) references ListFormateTable
);
create table TablesFormate_Table(
tableFormateId int primary key auto_increment not null,
headerName text ,
description text,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);
create table ListFormate_Table(
listFormateId int primary key auto_increment not null,
description text,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);
create table Price_compare_table(
price_compare_ID int primary key auto_increment not null,
fixedPrice float not null,
fackPrice int not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);
create table Product_Category(
category_id int primary key auto_increment not null,
name varchar(255) not null,
description text ,
relativeProductId int,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp,
foreign key (relativeProductId) references RelativeProductTable
);
create table RelativeProductTable(
relativeProductId int primary key auto_increment not null,
ID int not null,
relative_Product_id int not null,
foreign key (ID) references Product_Table
);
create table Product_Inventory(
inventory_ID int primary key auto_increment not null,
quantity int not null,
warranty int ,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

create table discount_table(
discount_ID int primary key auto_increment not null,
name varchar(255) not null,
discount_percentage decimal not null,
active boolean not null,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
 );
 
create table Product_table(
ID int primary key auto_increment not null,
name varchar(255) not null,
description_ID int not null,
category_id int not null,
inventory_ID int not null,
price_compare_ID int not null ,
discount_ID int not null,
image_ID int not null,
foreign key (description_ID) references Description_Table,
foreign key (category_id) references Product_Category,
foreign key (inventory_ID) references Product_Inventory,
foreign key (price_compare_ID) references Price_compare_table,
foreign key (discount_ID) references discount_table,
foreign key (image_ID) references Image_Table,
created_at timestamp,
modified_at timestamp,
deleted_at timestamp
);

