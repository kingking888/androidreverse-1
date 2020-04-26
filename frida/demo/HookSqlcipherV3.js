Java.perform(function () {
    const String = Java.use('java.lang.String');
    try {
        Java.openClassFile("/data/local/tmp/gson.dex").load();
        var gson = Java.use('com.google.gson.Gson').$new(); // 使用Gson将对象类转成Json对象时出现\u003d 、\u0027等情况的问题
// var gson = Java.use('com.google.gson.GsonBuilder').$new().disableHtmlEscaping().create();
        console.log("load gson.dex ok");
    } catch (e) {
        console.log(e);
    }
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
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
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
                console.log("sqlite3_key(" + Memory.readCString(args[1]) + "," + args[2] + ")");
            },
            onLeave: function (retval) {

            }
        });
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_rekey"), {
            onEnter: function (args) {
                console.log("sqlite3_rekey(" + Memory.readCString(args[1]) + "," + args[2] + ")");
            },
            onLeave: function (retval) {

            }
        });
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_key_v2"), {
            onEnter: function (args) {
                console.log("sqlite3_key_v2(" + Memory.readCString(args[2]) + "," + args[3] + ")");
                // console.log('open info.db file stack:\n' + Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
            },
            onLeave: function (retval) {

            }
        });
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_rekey_v2"), {
            onEnter: function (args) {
                console.log("sqlite3_rekey_v2(" + Memory.readCString(args[1]) + "," + args[2] + ")");
            },
            onLeave: function (retval) {

            }
        });
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_open"), {
            onEnter: function (args) {
                console.log("sqlite3_open(" + Memory.readCString(args[0]) + ")");
            },
            onLeave: function (retval) {

            }
        });
        Interceptor.attach(Module.findExportByName("libsqlcipher.so", "sqlite3_exec"), {
            onEnter: function (args) {
                var v = Memory.readCString(args[1]);
                console.log("sqlite3_exec(" + v + ")");
                // if (v === "PRAGMA key='111111';") {
                //     console.log('open info.db file stack:\n' + Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                // }
            },
            onLeave: function (retval) {

            }
        });
    } catch (e) {
        console.log(e)
    }
    try {
        String.substring.overload('int', 'int').implementation = function (start, end) {
            var result = this.substring(start, end);
            var thatStr=""+this;
            console.log("->substring.this:" + this);
            if (thatStr.indexOf("11111")!==-1) {
                console.log("+++++++++++++++++++++++++find key+++++++++++++++++++");
                console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
            }
            return result;
        }
    }catch (e) {
        console.log(e);
    }
});