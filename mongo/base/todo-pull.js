db.lists.remove({});

var item = { "todo": ["test-before", "dishes", "laundry", "dry cleaning", "test-after"] };
db.lists.insert(item);

db.lists.update({}, { "$pop": { "todo": 1 } })
print("------>");
printjson(db.lists.findOne());

db.lists.update({}, { "$pop": { "todo": -1 } })
print("------>");
printjson(db.lists.findOne());

db.lists.update({}, { "$pull": { "todo": "laundry" } });
print("------>");
printjson(db.lists.findOne());
