Java.perform(function () {
    const String = Java.use('java.lang.String');
    //wcdb
    try {
        const SQLiteConnection = Java.use('com.tencent.wcdb.database.SQLiteConnection');
        SQLiteConnection.nativeOpen.implementation = function (path, openFlags, vfsName) {
            var result = this.nativeOpen(path, openFlags, vfsName);
            console.log("-->nativeOpen(path:" + path + ",openFlags:" + openFlags + ",vfsName:" + vfsName + "):" + result);
            return result;
        };
        SQLiteConnection.nativeSetKey.implementation = function (connectionPtr, password) {
            var result = this.nativeSetKey(connectionPtr, password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->nativeSetKey(connectionPtr:" + connectionPtr + ",password:" + password + "):" + result);
            return result;
        }
    } catch (e) {
        console.log(e)
    }
    try {
        const SQLiteDatabase = Java.use('net.sqlcipher.database.SQLiteDatabase');
        SQLiteDatabase.dbopen.implementation = function (path, flags) {
            var result = this.dbopen(path, flags);
            console.log("-->dbopen(path:" + path + ",openFlags:" + flags + "):" + result);
            return result;
        }
        SQLiteDatabase.key.implementation = function (password) {
            var result = this.key(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->key(password:" + password + "):" + result);
            return result;
        };
        SQLiteDatabase.key_mutf8.implementation = function (password) {
            var result = this.key_mutf8(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->key_mutf8(password:" + password + "):" + result);
            return result;
        };
        SQLiteDatabase.rekey.implementation = function (password) {
            var result = this.rekey(password);
            console.log('passwordStr:' + String.$new(password));
            console.log("-->rekey(password:" + password + "):" + result);
            return result;
        }
    } catch (e) {
        console.log(e)
    }
    try {
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_key"), {
            onEnter: function (args) {
                console.log("open(" + Memory.readCString(args[1]) + "," + args[2] + ")");
            },
            onLeave: function (retval) {

            }
        });
    } catch (e) {
        console.log(e)
    }
});