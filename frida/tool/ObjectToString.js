Java.openClassFile("/data/local/tmp/gson.dex").load();
var gson = Java.use('com.google.gson.Gson').$new(); // 使用Gson将对象类转成Json对象时出现\u003d 、\u0027等情况的问题
// var gson = Java.use('com.google.gson.GsonBuilder').$new().disableHtmlEscaping().create();