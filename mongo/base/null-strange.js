db.c.remove({});

var item = [{"y": null}, {"y": 1}, {"y": 2}];
db.c.insertMany(item);

print("------>");
printjson(db.c.findOne({"y": null}));

print("------>");
printjson(db.c.find({"z": null}).size());

print("------>");
printjson(db.c.findOne({"z": {"$in" : [null], "$exists": true}}));
