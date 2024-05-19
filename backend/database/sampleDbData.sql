CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  userType VARCHAR(255) NOT NULL,
  displayName VARCHAR(255) NOT NULL,
      contactNum INT NOT NULL,
    password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO users (id,userType,displayName,contactNum,password,email)
VALUES ('buyer1','buyer',' buyer1',	90303033, 'buyer1','buyer1@grpnaem.com');

INSERT INTO users (id,userType,displayName,contactNum,password,email)
VALUES ('seller1','seller',' seller1',	92743673, 'seller1','seller1@grpnaem.com');

INSERT INTO users (id,userType,displayName,contactNum,password,email)
VALUES ('agent1','agent', 'agent1',95332445, 'agent1','agent1@grpnaem.com');

CREATE TABLE reviews (
  id VARCHAR(255) PRIMARY KEY,
  userId VARCHAR(255) NOT NULL,
  userType VARCHAR(255),
  rating INT,
  comment TEXT,
  dateSubmitted DATE,
  FOREIGN KEY (userId) REFERENCES users(id)
);

INSERT INTO reviews (id, userId, userType, rating, comment, dateSubmitted)
VALUES ('review1', 'seller1', 'seller', 5, 'This Agent is good man','2024-04-30');

INSERT INTO reviews (id, userId, userType, rating, comment, dateSubmitted)
VALUES ('review2', 'buyer1', 'buyer', 1, 'This agent doesn’t know how to sell my properties man..','2024-05-03');

CREATE TABLE properties (
  id VARCHAR(255) PRIMARY KEY,  -- Unique identifier for each property
  propertyName VARCHAR(255),     -- Name of the property
  propertyAddress VARCHAR(255),   -- Address of the property
  propertyType VARCHAR(255),     -- Type of property (e.g., apartment, house)
  numberOfRooms INT NOT NULL,   -- Number of rooms in the property
  area INT NOT NULL,            -- Area of the property (e.g., square footage)
  tenure VARCHAR(255),            -- Tenure type (e.g., freehold, leasehold)
  status VARCHAR(255),             -- Status of the property (e.g., available, sold)
  pricePerSquareFeet INT,      -- Price per square foot
  price DECIMAL(10,2) NOT NULL,     -- Total price of the property
  agentId VARCHAR(255) REFERENCES users(id),  -- Foreign key referencing agent in users table
  sellerId VARCHAR(255) REFERENCES users(id), -- Foreign key referencing seller in users table
  listingDate DATE NOT NULL        -- Date the property was listed
);

 INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-001','KEW GATE','22 Limau Garden','TERRACE',3,2314,'99 yrs FROM 1994','Sold',869,2010000,'agent2','seller1','2024-04-30');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-002','D''MANOR','24 Tanah Merah Kechil Avenue','TERRACE',3,2723,'99 yrs FROM 1997','Sold',892,2430000,'agent2','seller1','2024-04-30');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-003','MACPHERSON GARDEN ESTATE','33 Jalan Setia','TERRACE',5,885,'Freehold','New',2458,2175000,'agent2','seller1','2024-04-30');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-004','WEST COAST GARDENS','25 West Coast Green','TERRACE',6,2088,'956 yrs FROM 1928','Sold',2107,4400000,'agent2','seller1','2024-04-30');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-005','PINEVALE','10 Tampines Street 73 #27-12','Executive Condominium',5,1389,'99 yrs FROM 1997','Sold',979,1360000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-006','THE TERRACE','88 Edgedale Plains #33-39','Executive Condominium',5,1076,'99 yrs FROM 2013','Sold',1380,1485000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-007','TREASURE CREST','62 Anchorvale Crescent #39-16','Executive Condominium',5,1076,'99 yrs FROM 2015','New',1449,1560000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-008','BELLEWOODS','108 Woodlands Avenue 5 #19-44','Executive Condominium',5,936,'99 yrs FROM 2013','Sold',1308,1225000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-009','SOL ACRES','12 Choa Chu Kang Grove #20-30','Executive Condominium',5,872,'99 yrs FROM 2014','Sold',1365,1190000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-010','LUMINA GRAND','15 Bukit Batok West Avenue 5 #49-49','Executive Condominium',5,1270,'99 yrs FROM 2022','New',1450,1842000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-011','WESTWOOD RESIDENCES','192 Westwood Avenue #37-50','Executive Condominium',5,1033,'99 yrs FROM 2014','Sold',1258,1300000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-012','LIVIA','81 Pasir Ris Grove #44-20','Condominium',4,1744,'99 yrs FROM 2008','Sold',1130,1970000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-013','VUE 8 RESIDENCE','87 Pasir Ris Heights #14-50','Condominium',4,1033,'99 yrs FROM 2012','New',1379,1425000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-014','WATERFRONT WAVES','768 Bedok Reservoir Road #24-35','Condominium',4,1518,'99 yrs FROM 2007','Sold',1647,2500000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-015','FERNWOOD TOWERS','24 Fernwood Terrace #24-43','Condominium',4,1195,'Freehold','Sold',1741,2080000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-016','CHILTERN PARK','135 Serangoon Avenue 3 #42-27','Condominium',4,1249,'99 yrs FROM 1991','New',1464,1828000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-017','THE COAST AT SENTOSA COVE','278 Ocean Drive #28-27','Condominium',4,2024,'99 yrs FROM 2006','Sold',1606,3250000,'agent2','seller2','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-018','THE RESIDENCES AT W SINGAPORE SENTOSA COVE','7 Ocean Way #44-19','Condominium',6,3348,'99 yrs FROM 2006','Sold',1820,6093540,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-019','THE RESIDENCES AT W SINGAPORE SENTOSA COVE','5 Ocean Way #50-26','Condominium',4,1658,'99 yrs FROM 2006','New',1804,2990000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-020','AMARYLLIS VILLE','20 Newton Road #12-14','Condominium',2,958,'99 yrs FROM 1997','Sold',2002,1918000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-021','THE LANDMARK','173 Chin Swee Road #40-19','Condominium',2,678,'99 yrs FROM 2020','Sold',2867,1944000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-022','JADESCAPE','10 Shunfu Road #32-27','Condominium',2,764,'99 yrs FROM 2018','New',2159,1650000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-023','BISHAN PARK CONDOMINIUM','20 Sin Ming Walk #25-50','Condominium',2,1324,'99 yrs FROM 1991','Sold',1388,1838000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-024','THE GARDENS AT BISHAN','7 Sin Ming Walk #21-41','Condominium',3,1152,'99 yrs FROM 1997','Sold',1736,2000000,'agent2','seller1','2024-05-03');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-025','NORTH GAIA','25 Yishun Close #19-27','Executive Condominium',4,1076,'99 yrs FROM 2021','Sold',1363,1467000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-026','TEMBUSU GRAND','98 Jalan Tembusu #23-31','Condominium',4,1173,'99 yrs FROM 2022','New',2432,2853000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-027','PINETREE HILL','30 Pine Grove #28-26','Condominium',3,538,'99 yrs FROM 2022','Sold',2507,1349000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-028','THE BOTANY AT DAIRY FARM','7 Dairy Farm Walk #50-33','Condominium',2,1033,'99 yrs FROM 2022','Sold',1976,2042000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-029','THE BOTANY AT DAIRY FARM','5 Dairy Farm Walk #25-19','Condominium',2,926,'99 yrs FROM 2022','New',2082,1927000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-030','THE MYST','800 Upper Bukit Timah Road #37-35','Condominium',4,1163,'99 yrs FROM 2023','Sold',2016,2344000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-031','THE MYST','800 Upper Bukit Timah Road #12-31','Condominium',2,850,'99 yrs FROM 2023','Sold',2171,1846000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-032','GRAND DUNMAN','10 Dunman Road #26-14','Apartment',4,1432,'99 yrs FROM 2022','New',2552,3653000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-033','RIVER ISLES','60 Edgedale Plains #36-18','Condominium',2,441,'99 yrs FROM 2012','New',1620,715000,'agent2','seller2','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-034','THE GARDENS AT BISHAN','9 Sin Ming Walk #50-35','Condominium',3,883,'99 yrs FROM 1997','New',1428,1260000,'agent2','seller1','2024-05-04');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-035','LAVENDER RESIDENCE','288 Lavender Street #48-50','Apartment',2,581,'Freehold','Sold',2075,1205820,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-036','HILLHAVEN','7 Hillview Rise #11-50','Apartment',2,721,'99 yrs FROM 2023','New',2099,1513850,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-037','HILLHAVEN','5 Hillview Rise #39-25','Apartment',2,678,'99 yrs FROM 2023','Sold',2171,1472540,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-038','A TREASURE TROVE','76 Punggol Walk #47-28','Condominium',2,775,'99 yrs FROM 2011','Sold',1548,1200000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-039','ASCENTIA SKY','3 Alexandra View #42-14','Condominium',3,1475,'99 yrs FROM 2008','Sold',1899,2800000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-040','THE WATERSIDE','9 Tanjong Rhu Road #17-16','Condominium',6,2411,'Freehold','Sold',2057,4960000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-041','SHELFORD VIEW','26 Shelford Road #40-21','Condominium',4,2669,'Freehold','Sold',1910,5100000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-042','SANCTUARY GREEN','187 Tanjong Rhu Road #28-16','Condominium',2,786,'99 yrs FROM 1997','New',1741,1368000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-043','THOMSON GARDEN ESTATE','38 Jalan Isnin','TERRACE',2,966,'Freehold','New',3716,3588000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-044','BLOSSOMS @ WOODLEIGH','12 Woodleigh Close #10-45','Condominium',4,1421,'Freehold','Sold',1689,2400000,'agent2','seller2','2024-05-08');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-045','WATTEN ESTATE','36 Watten Terrace','SEMI-DETACHED',7,3972,'Freehold','Sold',3021,12000000,'agent2','seller2','2024-05-08');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-046','CHILTERN PARK','135 Serangoon Avenue 3 #44-12','Condominium',4,1518,'99 yrs FROM 1991','Sold',1351,2050000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-047','SERANGOON GARDEN ESTATE','44 Hythe Road','TERRACE',6,2963,'999 yrs FROM 1954','New',1626,4818000,'agent2','seller2','2024-05-09');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-048','THOMSON GARDEN ESTATE','48 Jalan Pintau','TERRACE',7,2039,'Freehold','Sold',1668,3400000,'agent2','seller1','2024-05-11');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-049','302 Ang Mo Kio Avenue 3','#03-45','3-Room',3,785,'99 Yrs FROM 1978','Sold',579,455000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-050','313 Ang Mo Kio Avenue 3','#28-35','3-Room',3,785,'99 Yrs FROM 1978','Sold',564,442888,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-051','425 Ang Mo Kio Avenue 3','#13-41','3-Room',3,785,'99 Yrs FROM 1979','Sold',559,438888,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-052','131 Ang Mo Kio Avenue 3','#27-09','4-Room',4,1054,'99 Yrs FROM 1979','Sold',517,545000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-053','102 Bedok North Avenue 4','#22-47','3-Room',3,882,'99 Yrs FROM 1977','Sold',447,395000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-054','132 Bedok North Street 2','#05-37','4-Room',4,990,'99 Yrs FROM 1978','Sold',515,510000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-055','720 Bedok Reservoir Road','#28-01','5-Room',5,1420,'99 Yrs FROM 1984','Sold',519,738000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-056','666 Jalan Damai','#13-50','5-Room',5,1356,'99 Yrs FROM 1996','New',640,868000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-057','669 Jalan Damai','#17-41','5-Room',5,1367,'99 Yrs FROM 1996','New',570,780000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-058','24 Sin Ming Road','#14-13','3-Room',3,699,'99 Yrs FROM 1973','New',522,365000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-059','449 Sin Ming Avenue','#18-18','4-Room',4,1130,'99 Yrs FROM 1990','New',743,840000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-060','146 Bukit Batok West Avenue 6','#13-15','3-Room',3,731,'99 Yrs FROM 1984','New',532,389000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-061','268 Bukit Batok East Avenue 4','#17-08','4-Room',4,904,'99 Yrs FROM 1985','New',472,426888,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-062','293A Bukit Batok Street 21','#21-50','4-Room',4,1001,'99 Yrs FROM 2019','Sold',747,748000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-063','438B Bukit Batok West Avenue 8','#02-01','4-Room',4,1001,'99 Yrs FROM 2020','Sold',680,680888,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-064','106 Henderson Crescent','#22-30','4-Room',4,871,'99 Yrs FROM 1975','Sold',579,505000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-065','25B Jalan Membina','#21-41','4-Room',4,968,'99 Yrs FROM 2009','Sold',971,940088,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-066','26B Jalan Membina','#19-28','4-Room',4,914,'99 Yrs FROM 2009','Sold',1015,928000,'agent1','seller1','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-067','70C Telok Blangah Heights','#05-23','4-Room',4,1001,'99 Yrs FROM 2017','New',939,940000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-068','20 Jalan Membina','#14-12','5-Room',5,1184,'99 Yrs FROM 2003','New',937,1110000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-069','633A Senja Road','#10-48','3-Room',3,721,'99 Yrs FROM 2013','New',658,475000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-070','501 Jelapang Road','#30-28','4-Room',4,1097,'99 Yrs FROM 1998','New',490,538000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-071','546B Segar Road','#09-09','4-Room',4,990,'99 Yrs FROM 2015','Sold',553,548000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-072','515 Jelapang Road','#03-39','5-Room',5,1302,'99 Yrs FROM 1998','Sold',478,623000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-073','623 Senja Road','#26-30','5-Room',5,1184,'99 Yrs FROM 2001','Sold',519,615000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-074','503 Jelapang Road','#13-04','Executive',5,1560,'99 Yrs FROM 1998','Sold',533,832500,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-075','17 Toh Yi Drive','#18-26','5-Room',5,1313,'99 Yrs FROM 1988','Sold',898,1180000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-076','252 Choa Chu Kang Avenue 2','#25-13','4-Room',4,1119,'99 Yrs FROM 1994','New',442,495000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-077','418 Choa Chu Kang Avenue 4','#08-22','4-Room',4,1140,'99 Yrs FROM 1993','New',442,505000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-078','489C Choa Chu Kang Avenue 5','#14-26','4-Room',4,1001,'99 Yrs FROM 2016','New',509,510000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-079','688A Choa Chu Kang Drive','#28-38','4-Room',4,968,'99 Yrs FROM 2002','New',498,483000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-080','785 Choa Chu Kang Drive','#08-20','4-Room',4,1194,'99 Yrs FROM 1997','Sold',489,585000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-081','767 Choa Chu Kang Street 54','#20-22','4-Room',4,1140,'99 Yrs FROM 1996','Sold',456,520000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-082','817C Keat Hong Link','#22-43','4-Room',4,990,'99 Yrs FROM 2017','New',624,618000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-083','116 Teck Whye Lane','#23-42','4-Room',4,1140,'99 Yrs FROM 1988','Sold',449,512888,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-084','204 Choa Chu Kang Avenue 1','#30-14','Executive',5,1603,'99 Yrs FROM 1989','Sold',442,710000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-085','437 Choa Chu Kang Avenue 4','#25-15','Executive',5,1593,'99 Yrs FROM 1993','New',489,780000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-086','757 Choa Chu Kang North 5','#29-48','Executive',5,1571,'99 Yrs FROM 1995','Sold',480,755000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-087','377 Clementi Avenue 5','#24-07','3-Room',3,721,'99 Yrs FROM 1980','Sold',565,408000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-088','728 Clementi West Street 2','#14-47','3-Room',3,731,'99 Yrs FROM 1980','New',478,350000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-089','372 Clementi Avenue 4','#21-09','4-Room',4,1054,'99 Yrs FROM 1987','Sold',569,600000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-090','18C Circuit Road','#22-19','4-Room',4,1001,'99 Yrs FROM 2016','Sold',894,895000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-091','688 Hougang Street 61','#15-35','3-Room',3,796,'99 Yrs FROM 1987','New',527,420000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-092','909 Hougang Street 91','#28-07','4-Room',4,1076,'99 Yrs FROM 1997','Sold',483,520000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-093','364A Upper Serangoon Road','#12-03','4-Room',4,990,'99 Yrs FROM 2018','Sold',696,690000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-094','365C Upper Serangoon Road','#29-10','4-Room',4,990,'99 Yrs FROM 2018','New',772,765000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-095','308 Jurong East Street 32','#26-20','3-Room',3,796,'99 Yrs FROM 1984','Sold',462,368000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-096','33 Teban Gardens Road','#21-25','3-Room',3,828,'99 Yrs FROM 1977','Sold',380,315000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-097','222 Jurong East Street 21','#15-22','4-Room',4,1054,'99 Yrs FROM 1984','New',493,520000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-098','63 Teban Gardens Road','#13-44','4-Room',4,968,'99 Yrs FROM 2003','Sold',485,470000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-099','624 Jurong West Street 61','#15-07','4-Room',4,979,'99 Yrs FROM 2001','Sold',531,520000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-100','663B Jurong West Street 65','#08-20','4-Room',4,979,'99 Yrs FROM 2000','New',533,522000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-101','832 Jurong West Street 81','#04-08','4-Room',4,1151,'99 Yrs FROM 1993','Sold',412,475000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-102','854 Jurong West Street 81','#08-24','4-Room',4,1140,'99 Yrs FROM 1996','Sold',429,490000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-103','630 Jurong West Street 65','#29-18','Executive',5,1399,'99 Yrs FROM 2001','New',514,720000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-104','2 Jalan Batu','#20-02','3-Room',3,645,'99 Yrs FROM 1969','Sold',522,336888,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-105','1 Kampong Kayu Road','#16-01','3-Room',3,667,'99 Yrs FROM 1984','Sold',609,406500,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-106','25A St. George''s Lane','#04-14','3-Room',3,731,'99 Yrs FROM 2020','New',1080,790000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-107','26A St. George''s Lane','#17-04','3-Room',3,731,'99 Yrs FROM 2020','Sold',1114,815000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-108','16 Upper Boon Keng Road','#25-31','3-Room',3,699,'99 Yrs FROM 1975','Sold',583,408000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-109','113A Mcnair Road','#01-17','4-Room',4,1001,'99 Yrs FROM 2017','New',1000,1002000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-110','47 Marine Crescent','#04-48','3-Room',3,699,'99 Yrs FROM 1975','Sold',579,405000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-111','75 Marine Drive','#25-16','4-Room',4,882,'99 Yrs FROM 1976','Sold',632,558000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-112','423 Pasir Ris Drive 6','#02-48','4-Room',4,1119,'99 Yrs FROM 1989','New',500,560000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-113','473 Pasir Ris Drive 6','#25-41','4-Room',4,1108,'99 Yrs FROM 1989','Sold',509,565000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-114','145 Pasir Ris Street 11','#26-39','4-Room',4,1130,'99 Yrs FROM 1994','Sold',484,548000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-115','208A Punggol Place','#07-16','4-Room',4,990,'99 Yrs FROM 2014','New',666,660000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-116','603A Punggol Road','#30-27','4-Room',4,1001,'99 Yrs FROM 2012','Sold',614,615000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-117','271D Punggol Walk','#16-02','4-Room',4,990,'99 Yrs FROM 2014','Sold',762,755000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-118','272B Punggol Walk','#17-40','5-Room',5,1248,'99 Yrs FROM 2014','New',729,910000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-119','316A Punggol Way','#09-43','5-Room',5,1216,'99 Yrs FROM 2017','Sold',670,815000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-120','186 Punggol Central','#16-39','Executive',5,1377,'99 Yrs FROM 2004','Sold',580,800000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-121','129 Clarence Lane','#15-35','4-Room',4,1108,'99 Yrs FROM 1996','New',891,988000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-122','55 Strathmore Avenue','#10-44','5-Room',5,1184,'99 Yrs FROM 2002','Sold',886,1050000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-123','351C Canberra Road','#11-24','4-Room',4,1001,'99 Yrs FROM 2001','Sold',554,555000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-124','466C Sembawang Drive','#23-50','4-Room',4,968,'99 Yrs FROM 2006','New',512,496000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-125','357A Admiralty Drive','#09-14','5-Room',5,1194,'99 Yrs FROM 2001','Sold',506,605000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-126','326A Anchorvale Road','#12-33','4-Room',4,990,'99 Yrs FROM 2015','Sold',644,638000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-127','351A Anchorvale Road','#25-12','4-Room',4,990,'99 Yrs FROM 2019','New',560,555000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-128','274B Compassvale Bow','#05-19','4-Room',4,990,'99 Yrs FROM 2017','Sold',651,645000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-129','217C Compassvale Drive','#17-37','4-Room',4,1001,'99 Yrs FROM 2017','Sold',739,740000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-130','267B Compassvale Link','#02-31','4-Room',4,968,'99 Yrs FROM 2006','New',661,640000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-131','309 Serangoon Avenue 2','#10-50','4-Room',4,1001,'99 Yrs FROM 1985','Sold',617,618000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-132','605D Tampines Street 61','#26-42','3-Room',3,731,'99 Yrs FROM 2020','Sold',772,565000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-133','604B Tampines Avenue 9','#30-04','4-Room',4,990,'99 Yrs FROM 2020','New',760,753000,'agent2','seller2','2024-05-13');
INSERT INTO properties (id,propertyName,propertyAddress,PropertyType,numberOfRooms,Area,Tenure,Status,pricePerSquareFeet,price,agentID,sellerID,listingDate) VALUES
 ('PROP-134','286 Tampines Street 22','#19-06','4-Room',4,1108,'99 Yrs FROM 1984','Sold',532,590000,'agent2','seller2','2024-05-13');

