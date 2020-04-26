function dump_memory(base,size) {
    Java.perform(function () {
        var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
        var dir = currentApplication.getApplicationContext().getFilesDir().getPath();
        var file_path = dir + "/dumpmemory.bin";
        var file_handle = new File(file_path, "wb");
        if (file_handle && file_handle != null) {
            Memory.protect(ptr(base),size, 'rwx');
            var libso_buffer = ptr(base).readByteArray(size);
            file_handle.write(libso_buffer);
            file_handle.flush();
            file_handle.close();
            console.log("[dump]:", file_path);
        }
    });
}
dump_memory(0xbb25a208-2048,4096);