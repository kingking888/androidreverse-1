Java.perform(function () {
    const Application = Java.use("com.tencent.wework.foundation.logic.Application");
    var isHooked = false;

    function toHexString(byteArray) {
        var intary = new Uint32Array(byteArray);
        var ivStr = "";
        for (var i = 0; i < intary.length; i++) {
            ivStr = ivStr + intary[i].toString(16);
        }
        return ivStr;
    }
    function hookOpenSSLMethod(soname,methodName){

    }
    Application.getInstance.implementation = function () {
        var result = this.getInstance();
        if (!isHooked) {
            console.log("-->getInstance(" + "):" + result);
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "Java_com_tencent_wework_foundation_logic_Application_setUseDbEncrypt"), {
                onEnter: function (args) {
                    console.log("setUseDbEncrypt() called!" + args[2])
                },
                onLeave: function (retval) {

                }
            });
            console.log("--> hooked getUseDbEncrypt(" + ")");
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "Java_com_tencent_wework_foundation_logic_Application_getUseDbEncrypt"), {
                onEnter: function (args) {
                    console.log("getUseDbEncrypt() called!")
                },
                onLeave: function (retval) {

                }
            });
            console.log("--> hooked setUseDbEncrypt(" + ")");
            // Interceptor.attach(Module.findExportByName("libwework_framework.so", "AES_encrypt"), {
            //     onEnter: function (args) {
            //         console.log("AES_encrypt("+Memory.readCString(args[0])+","+") called!")
            //     },
            //     onLeave: function (retval) {
            //
            //     }
            // });
            console.log("--> hooked AES_encrypt(" + ")");
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "aes_v8_encrypt"), {
                onEnter: function (args) {
                    console.log("aes_v8_encrypt() called!")
                },
                onLeave: function (retval) {

                }
            });
            console.log("--> hooked aes_v8_encrypt(" + ")");
            var de_out;
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "AES_decrypt"), {
                onEnter: function (args) {
                    de_out=args[1]

                },
                onLeave: function (retval) {
                    console.log("AES_decrypt(out:"+Memory.readCString(de_out)+") called!")
                }
            });
            console.log("--> hooked aes_v8_encrypt(" + ")");
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "aes_v8_decrypt"), {
                onEnter: function (args) {
                    console.log("aes_v8_decrypt() called!")
                },
                onLeave: function (retval) {

                }
            });//cd53b0722bb034f17aedb5ee5a804c52
            console.log("--> hooked aes_v8_decrypt(" + ")");
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "AES_cbc_encrypt"), {
                onEnter: function (args) {
                    if(!args[5])
                    console.log("AES_cbc_encrypt( len:" + args[2] + ",aes:" + args[3] + ",iv:" + toHexString(Memory.readByteArray(args[4], 16)) + ",mode" + args[5] + ") called!")
                },
                onLeave: function (retval) {

                }
            });
            console.log("--> hooked AES_cbc_encrypt(" + ")");
            //aes key
            // Interceptor.attach(Module.findExportByName("libwework_framework.so", "AES_set_encrypt_key"), {
            //     onEnter: function (args) {
            //         console.log("AES_set_encrypt_key(" + Memory.readCString(args[0]) + "," + args[1] + ") called!")
            //     },
            //     onLeave: function (retval) {
            //
            //     }
            // });
            console.log("--> hooked AES_set_encrypt_key(" + ")");
            Interceptor.attach(Module.findExportByName("libwework_framework.so", "AES_set_decrypt_key"), {
                onEnter: function (args) {
                    console.log("AES_set_decrypt_key(" + Memory.readCString(args[0]) + "," + args[1] + ") called!")
                },
                onLeave: function (retval) {

                }
            });
            console.log("--> hooked AES_set_decrypt_key(" + ")");
            isHooked = true;
        }

        return result;
    }

});