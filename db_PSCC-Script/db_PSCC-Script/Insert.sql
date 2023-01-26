INSERT INTO "Table Details" ("TID", "name", "No of Elements")
VALUES	('1', 'Basic Information', 2),
	      ('2', 'Product Information', 6),
	      ('3', 'Per Piece Information', 2),
	      ('4', 'Production Wastages', 3),
	      ('5', 'Fabric Cost Information', 3),
	      ('6.1', 'CMT Cost Per Piece (without Packing)', 3),
	      ('6.2', 'CMT Cost Per Pack (with Packing)', 3),
	      ('7', 'Operating Cost', 3),
	      ('8', 'Finance / Corporate / GP', 3)


INSERT INTO "Table Column" ("TCID","TID","name","InputType")
VALUES
	('1','1','User Name',1),
	('2','1','Client Name',1),
	('3','1','Product Type',3),
	('4','1','Product Description',2),
	('5','1','No of Yarn',3),
	('6','1','Stock Type',3),
	('7','1','Payment Terms (Days)',3),
	('8','1','Currency Conversion',4),	
	('9','1','Date',0),
	('10','2','Yarn Name',3),
	('11','2','Yarn rate (lbs)',1),
	('12','2','Yarn Cost (KG)',0),
	('13','2','Yarn Percetage',1),
	('13','2','Total Yarn Cost/KG',0),
	('13_P', '3','Per piece GSM & Spec Information', 1),
	('14_P', '3', 'Body / Chest' ,1),
	('15_P', '3', 'Arm' ,1),
	('16_P', '3', 'Hood' ,1),
	('17_P', '3', 'Pocket' ,1),
	('18_P', '3', 'RIB Percentage', 1),
	('13_N', '3', 'Per piece GSM & Spec Information',1),
	('14_N', '3', 'Cut Width in cm', 1),
	('15_N', '3', 'Cut Lenght/Height in cm', 1),
	('19', '4', 'Dying Process',  1 ),
	('20', '4', 'Cutting / Stitching / B%',  1 ),
	('21', '4', 'Weaving / Knitting Yarn',  1 ),
	('22', '4', 'Shairing / Rising',  1 ),
	('23', '4', 'Yarn Dying',  1 ),



INSERT INTO "Table Column" ("TCID","TID","name","InputType")
VALUES

