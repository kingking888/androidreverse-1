Java.perform(function () {
    //wcdb
    try {
        const SQLiteConnection = Java.use('com.tencent.wcdb.database.SQLiteConnection');
        SQLiteConnection.nativeOpen.implementation = function (path, openFlags, vfsName) {
            var result = this.nativeOpen(path, openFlags, vfsName);
            console.log("-->nativeOpen(path:" + path + ",openFlags:" + openFlags + ",vfsName:" + vfsName + "):" + result);
            return result;
        }
        const String = Java.use('java.lang.String');
        SQLiteConnection.nativeSetKey.implementation = function (connectionPtr, password) {
            var result = this.nativeSetKey(connectionPtr, password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->nativeSetKey(connectionPtr:" + connectionPtr + ",password:" + password + "):" + result);
            return result;
        }
    } catch (e) {
        console.log(e)
    }
    //sqlcipher
    try {
        const SQLiteDatabase = Java.use('net.sqlcipher.database.SQLiteDatabase');
        SQLiteDatabase.dbopen.implementation = function (path, flags) {
            var result = this.dbopen(path, flags);
            console.log("-->dbopen(path:" + path + ",openFlags:" + flags + "):" + result);
            return result;
        }
        SQLiteConnection.key.implementation = function (password) {
            var result = this.key(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->key(password:" + password + "):" + result);
            return result;
        }
        SQLiteConnection.key_mutf8.implementation = function (password) {
            var result = this.key_mutf8(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->key_mutf8(password:" + password + "):" + result);
            return result;
        }
        SQLiteConnection.rekey.implementation = function (password) {
            var result = this.rekey(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->rekey(password:" + password + "):" + result);
            return result;
        }
    } catch (e) {
        console.log(e)
    }

});
