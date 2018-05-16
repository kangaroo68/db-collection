db.users.remove({});

var joe = { "name": "joe", "friends": 30, "enemies": 2 }

db.users.insert(joe);

var joeTmp = db.users.findOne({ "name": "joe" });
joeTmp.relationships = { "friends": joeTmp.friends, "enemies": joeTmp.enemies };
joeTmp.username = joeTmp.name;
delete joeTmp.name;
delete joeTmp.friends;
delete joeTmp.enemies;

db.users.update({ "name": "joe" }, joeTmp);
