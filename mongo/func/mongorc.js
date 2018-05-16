var no = function() {
    print("Not on my watch");
}

// 禁止删除数据库
db.dropDatabase = DB.prototype.dropDatabase = no;

// 禁止删除集合
DBCollection.prototype.drop = no;

// 禁止删除索引
DBCollection.prototype.dropIndex = no;

// 对提示信息做操作
prompt = function() {
    if (typeof db == 'undefine') {
        return '(nodb)>';
    }

    // 检查最后的数据库操作
    try {
        db.runCommand({ getLastError: 1 });
    } catch (e) {
        print(e);
    }

    return db + ">";
}
