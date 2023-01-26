CREATE DATABASE db_PSCC

USE db_PSCC

CREATE TABLE "Onborading" (
  "SCID" varchar(9) NOT NULL,
  "Text" Text,
  "image" Text,
  "Status" INT DEFAULT(1),
);


CREATE TABLE "Product Name"(
	"PNID" varchar(9) NOT NULL,
	"NAME" VARCHAR(250) NOT NULL,
	"STATUS" INT DEFAULT 1,

	PRIMARY KEY ("PNID"),
)

CREATE TABLE "Product Type"(
	"PTID" varchar(9) NOT NULL,
	"NAME" VARCHAR(250) NOT NULL,
	"STATUS" INT DEFAULT 1,

	PRIMARY KEY ("PTID"),
)


CREATE TABLE "Basic Information"(
	BID varchar(9) NOT NULL,
	"Employee Name" varchar(255) NOT NULL,
	"Client Name" varchar(255) NOT NULL,
	"Product Type" varchar(9) NOT NULL,
	"Product Description" varchar(255) NOT NULL,
	"No of Yarn" INT NOT NULL,
	"Stock Type" INT NOT NULL DEFAULT(1),
	"Payment Terms (Days)" INT NOT NULL,
	"isCurrency" varchar(255) NOT NULL,
	"Currency name" INT NOT NULL,
	"Currency Rate" DECIMAL(5,2) NOT NULL,

	PRIMARY KEY (BID),
	FOREIGN KEY ("Product Type") REFERENCES "Product Name"(PNID)
)

CREATE TABLE "Product Information"(
	"YID" varchar(9) NOT NULL,
	"PTID" varchar(9) NOT NULL,
	"Rate_LBS" DECIMAL(5,2) NOT NULL,
	"Percentage" DECIMAL(5,2) NOT NULL,

	"STATUS" INT DEFAULT 1,

	PRIMARY KEY ("YID"),
	FOREIGN KEY (PTID) REFERENCES "Product Type"(PTID)
)

CREATE TABLE "Piece Information"(
	"PID" varchar(9) NOT NULL,
	"Per piece GSM & Spec" DECIMAL(5,2) NOT NULL,
	"Width" DECIMAL(5,2) NOT NULL,
	"Lenght/Height" DECIMAL(5,2) NOT NULL,

	PRIMARY KEY ("PID"),
)

CREATE TABLE "Apparel Information"(
	"PID" varchar(9) NOT NULL,
	"Per piece GSM & Spec" DECIMAL(5,2) NOT NULL,
	"Body/Chest Width" DECIMAL(5,2) NOT NULL,
	"Body/Chest Lenght/Height" DECIMAL(5,2) NOT NULL,
	"Arm Width" DECIMAL(5,2) NOT NULL,
	"Arm Lenght/Height" DECIMAL(5,2) NOT NULL,

	"Hood Width" DECIMAL(5,2) NOT NULL,
	"Hood Lenght/Height" DECIMAL(5,2) NOT NULL,
	
	"Pocket Width" DECIMAL(5,2) NOT NULL,
	"Pocket Lenght/Height" DECIMAL(5,2) NOT NULL,

	"RIB Percentage" DECIMAL(5,2) NOT NULL

	PRIMARY KEY ("PID"),
)

CREATE TABLE "Fabric Information"(
	"FID" varchar(9) NOT NULL,
	"Width" DECIMAL(5,2) NOT NULL,
	"Lenght/Height" DECIMAL(5,2) NOT NULL,

	PRIMARY KEY ("FID"),
)

CREATE TABLE "Production Wastages"(
	"WID" varchar(9) NOT NULL,
	"Dying Process" DECIMAL(5,2) NOT NULL,
	"Cutting / Stitching / B%" DECIMAL(5,2) NOT NULL,
	"Weaving / Knitting Yarn" DECIMAL(5,2) NOT NULL,
	"Shairing / Rising" DECIMAL(5,2) NOT NULL,
	"Yarn Dying" DECIMAL(5,2) NOT NULL,

	PRIMARY KEY ("WID"),
)

CREATE TABLE "CMT Per Piece"(
	"COPID" varchar(9) NOT NULL,
	"Stitching" DECIMAL(5,2) NOT NULL,
	"Lable" DECIMAL(5,2) NOT NULL,
	"StitchingThread" DECIMAL(5,2) NOT NULL,
	"PolyBag" DECIMAL(5,2) NOT NULL,
	"Zipper" DECIMAL(5,2) NOT NULL,
	"Velcru" DECIMAL(5,2) NOT NULL,
	"Elastic" DECIMAL(5,2) NOT NULL,
	"TagCard" DECIMAL(5,2) NOT NULL,
	"GarmentWash" DECIMAL(5,2) NOT NULL,
	"ElasticBand" DECIMAL(5,2) NOT NULL,
	"BasicCarton" DECIMAL(5,2) NOT NULL,
	"FancyCarton" DECIMAL(5,2) NOT NULL,
	"Embriodery" DECIMAL(5,2) NOT NULL,
	"TagPin" DECIMAL(5,2) NOT NULL,
	"Twill" DECIMAL(5,2) NOT NULL,
	"BallyBand" DECIMAL(5,2) NOT NULL,
	"Hanger" DECIMAL(5,2) NOT NULL,
	"RFIDtag" DECIMAL(5,2) NOT NULL,
	"Inlay" DECIMAL(5,2) NOT NULL,
	"Bailing" DECIMAL(5,2) NOT NULL,
	"rebated" DECIMAL(5,2) NOT Null,

	PRIMARY KEY ("COPID"),
)

CREATE TABLE "CMT Per Pack"(
	"CWPID" varchar(9) NOT NULL,
	"TagPin" DECIMAL(5,2) NOT NULL, 
	"Twill" DECIMAL(5,2) NOT NULL, 
	"BasicCarton" DECIMAL(5,2) NOT NULL, 
	"FancyCarton" DECIMAL(5,2) NOT NULL, 
	"Hanger" DECIMAL(5,2) NOT NULL, 
	"RFIDtag" DECIMAL(5,2) NOT NULL, 
	"PolyBag" DECIMAL(5,2) NOT NULL, 
	"BallyBand" DECIMAL(5,2) NOT NULL, 


	PRIMARY KEY ("CWPID"),
)


CREATE TABLE "Operating Cost"(
	"OID" varchar(9) NOT NULL,
	"ExportTax" DECIMAL(5,2) NOT NULL, 
	"Sample" DECIMAL(5,2) NOT NULL, 
	"Testing" DECIMAL(5,2) NOT NULL, 
	"Inspection" DECIMAL(5,2) NOT NULL, 
	"Factory" DECIMAL(5,2) NOT NULL, 
	"Domestic" DECIMAL(5,2) NOT NULL, 
	"SalesCommission" DECIMAL(5,2) NOT NULL, 
	"Exhibition" DECIMAL(5,2) NOT NULL, 

	PRIMARY KEY ("OID"),
)

CREATE TABLE "Finance Cost"(
	"FIID" varchar(9) NOT NULL,
	"Finance" DECIMAL(5,2) NOT NULL, 
	"Gross Profit" DECIMAL(5,2) NOT NULL, 
	"Debbs" DECIMAL(5,2) NOT NULL, 
	"Insurance" DECIMAL(5,2) NOT NULL, 
	"CFreight" DECIMAL(5,2) NOT NULL, 
	"Freight" DECIMAL(5,2) NOT NULL, 
	"Custom Fee" DECIMAL(5,2) NOT NULL, 
	"online Holding Cost" DECIMAL(5,2) NOT NULL, 
	"Defective Allowance" DECIMAL(5,2) NOT NULL, 

	PRIMARY KEY ("FIID"),
)

CREATE TABLE "Report" (
	"RDID" varchar(9) NOT NULL,
	"Name" varchar(255),
	BID varchar(9) NOT NULL,
	YID varchar(9) NOT NULL,
	PID varchar(9) NOT NULL,
	FID varchar(9) NOT NULL,
	WID varchar(9) NOT NULL,
	COPID varchar(9) NOT NULL,
	CWPID varchar(9) NOT NULL,
	OID varchar(9) NOT NULL,
	FIID varchar(9) NOT NULL,
  "Status" INT DEFAULT(1),


	PRIMARY KEY ("RDID"),
	FOREIGN KEY (BID) REFERENCES "Basic Information" (BID),
	FOREIGN KEY (YID) REFERENCES "Product Information" (YID),
	FOREIGN KEY (PID) REFERENCES "Piece Information" (PID),
	FOREIGN KEY (FID) REFERENCES "Fabric Information" (FID),
	FOREIGN KEY (WID) REFERENCES "Production Wastages" (WID),
	FOREIGN KEY (COPID) REFERENCES "CMT Per Piece"(COPID),
	FOREIGN KEY (CWPID) REFERENCES "CMT Per Pack"(CWPID),
	FOREIGN KEY (OID) REFERENCES "Operating Cost"(OID),
	FOREIGN KEY (FIID) REFERENCES "Finance Cost"(FIID),	
);





ALTER TABLE  "Onborading"
ADD PRIMARY KEY ("SCID");


ALTER TABLE "Finance Cost"
ADD FOREIGN KEY ("FID")
REFERENCES "Report"("FIID");

select * from "Finance Cost"


drop table "Report"
