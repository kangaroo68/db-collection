db.food.remove({});

db.food.insert({"fruit": ["apple", "banana", "peach"]});
db.food.insert({"fruit": ["apple", "kumquat", "orange"]});
db.food.insert({"fruit": ["cherry", "banana", "apple", "kumquat"]});

print("------>");
var result = db.food.find({"fruit" : {"$all" : ["apple", "banana"]}});
while(result.hasNext()) {
    printjson(result.next());
}

/* 下标为2 */
print("------>");
result = db.food.find({"fruit.2" : "peach"});
while(result.hasNext()) {
    printjson(result.next());
}

/* 数组大小 */
print("------>");
result = db.food.find({"fruit" : {"$size": 3}});
while(result.hasNext()) {
    printjson(result.next());
}
