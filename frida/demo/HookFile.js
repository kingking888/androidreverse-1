Java.perform(function () {
    //wcdb
    try {
        const File = Java.use('java.io.File');
        File.$init.implementation = function (path) {
            var result = this.$init(path);
            console.log("-->nativeOpen(path:" + path + ",openFlags:" + openFlags + ",vfsName:" + vfsName + "):" + result);
            return result;
        }
    } catch (e) {
        console.log(e)
    }
});
