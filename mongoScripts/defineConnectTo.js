var connectTo = function(port, dbname) {
	if (!port) {
		port = 27017;
	}
	if (!dbname) {
		dbname = "test";
	}

	db = connect("192.168.99.100:"+27017+"/"+dbname);
	return db;
}
