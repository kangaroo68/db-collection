db.users.remove({});

var item = { "username": "joe", "emails": ["joe@163.com", "joe@qq.com"] };
db.users.insert(item);
print("------>");
printjson(db.users.findOne());

db.users.update({ "username": { "$ne": "joe@gmail.com" } }, { "$push": { "emails": "joe@gmail.com" } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "username": "joe" }, { "$addToSet": { "emails": "joe@gmail.com" } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "username": "joe" }, { "$addToSet": { "emails": "joe@qq.com" } });
print("------>");
printjson(db.users.findOne());

db.users.update({ "username": "joe" }, { "$addToSet": { "emails": { "$each": ["joe@php.net", "joe@java.com", "joe@qq.com"] } } });
print("------>");
printjson(db.users.findOne());
