db.blog.posts.remove({});

var item = { "title": "first blog", "content": "...." };
db.blog.posts.insert(item);

db.blog.posts.update({ "title": "first blog" }, {
    "$push": {
        "comments": { "name": "joe", "email": "joe@163.com", "content": "nice" }
    }
});
print("------>");
printjson(db.blog.posts.findOne());

db.blog.posts.update({ "title": "first blog" }, {
    "$push": {
        "comments": { "name": "bob", "email": "bob@163.com", "content": "nice" }
    }
});
print("------>");
printjson(db.blog.posts.findOne());
