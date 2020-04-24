Interceptor.attach(Module.findExportByName("libcocos2dlua.so", "_ZN7cocos2d8LuaStack13luaLoadBufferEP9lua_StatePKciS4_"), {
    onEnter: function (args) {
        var luaContent = Memory.readCString(args[2]);
        var luaName = Memory.readCString(args[4]);
        console.log("lua name:" + luaName);
        console.log("lua content:" + luaContent);
    },
    onLeave: function (retval) {

    }
});


