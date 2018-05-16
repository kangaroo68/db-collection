db.analytics.remove({});

var item = { "url": "www.baidu.com", "pageviews": 52 };
db.analytics.insert(item);
db.analytics.update({ "url": "www.baidu.com" }, { "$inc": { "pageviews": 1 } });

printjson(db.analytics.findOne());
