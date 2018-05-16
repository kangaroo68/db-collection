for (i = 0; i < 1000000; i++) {
    db.userlarge.insert({
        "i": i,
        "username": "user" + i,
        "age": Math.floor(Math.random() * 120),
        "created": new Date()
    });
}
