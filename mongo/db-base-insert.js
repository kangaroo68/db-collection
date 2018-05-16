post = { "title": "my blog post", "content": "here is my blog", "date": new Date() };

db.blog.insert(post);

db.foo.insertMany([{ "_id": 0 }, { "_id": 1 }, { "_id": 2 }]);
