db.users.remove({});

var item = { "name": "joe", "age": 30, "sex": "male", "location": "HENAN" };
db.users.insert(item);

db.users.update({ "name": "joe" }, { "$set": { "favorite book": "War and Peace" } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "name": "joe" }, { "$set": { "favorite book": "Green Eggs and Ham" } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "name": "joe" }, { "$set": { "favorite book": ["Green Eggs", "Red Eggs"] } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "name": "joe" }, { "$unset": { "favorite book": 1 } });
print("------>");
printjson(db.users.findOne());
