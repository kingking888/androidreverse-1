Java.perform(function () {
    //var WebViewClient = Java.use("com.tencent.smtt.sdk.WebViewClient");
    //var WebView = Java.use("com.tencent.smtt.sdk.WebView");
    /*    WebViewClient.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'com.tencent.smtt.export.external.interfaces.WebResourceRequest').implementation = function (webview, req) {
     console.log('Url:' + req.getUrl());
     };
     WebViewClient.shouldInterceptRequest.overload('com.tencent.smtt.sdk.WebView', 'java.lang.String').implementation = function (webview, req) {
     console.log('Url:' + req);
     };
     WebView.loadUrl.overload('java.lang.String').implementation = function (req) {
     console.log('Url:' + req);
     };*/
    /*        var toast = Java.use("android.widget.Toast");
     toast.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (context, text, duration) {
     send('makeText:' + context + ',t:' + text + ',d:' + duration);
     return this.makeText(context, text, duration);
     };*/
    /*    var apm = Java.use("android.app.ApplicationPackageManager");
     apm.getInstalledApplications.overload('int').implementation = function (flags) {
     console.log('getInstalledApplications:');
     console.log('flags:' + flags);
     return this.getInstalledApplications(flags);
     };
     var apm = Java.use("android.app.ApplicationPackageManager");
     apm.getInstalledPackages.overload('int').implementation = function (flags) {
     console.log('getInstalledPackages:');
     console.log('flags:' + flags);
     var packageInfos = this.getInstalledPackages(flags);
     var one = packageInfos.get(0);
     packageInfos.clear();
     packageInfos.add(one);
     return packageInfos;
     };*/
    /*    var file = Java.use("java.io.File");
     file.$init.overload('java.lang.String').implementation = function (path) {
     console.log('file:');
     console.log('path:' + path);
     return this.$init(path);
     };
     file.getName.implementation = function () {
     console.log("getName:");
     console.log("result:" + this.getName());
     return "nibeiwohookle";
     }*/
    //var wm = Java.use("android.net.wifi.WifiManager");
    //var toast = Java.use("android.widget.Toast");
    /*    wm.addNetwork.implementation = function (cfg) {
     console.log("addNetwork:");
     console.log("mContext:" + JSON.stringify(this.mContext));
     console.log("wepKeys:" + cfg.wepKeys[0]);
     console.log("preSharedKey:" + cfg.preSharedKey.value);
     // console.log("preSharedKey:" +JSON.stringify(cfg.preSharedKey));
     console.log("toast:" + JSON.stringify(toast.makeText));
     //  toast.makeText(this.mContext,""+cfg.preSharedKey.value, toast.LENGTH_SHORT).show();
     }
     wm.updateNetwork.implementation = function (cfg) {
     console.log("updateNetwork:");
     console.log("mContext:" + JSON.stringify(this.mContext));
     console.log("wepKeys:" + cfg.wepKeys[0]);
     console.log("preSharedKey:" + cfg.preSharedKey.value);
     // console.log("preSharedKey:" +JSON.stringify(cfg.preSharedKey));
     }*/
    /*        var file = Java.use("android.text.TextUtils");
     file.isEmpty.overload('java.lang.CharSequence').implementation = function (str) {
     console.log('arg0:' + str);
     return this.isEmpty(str);
     };*/
    /*    var file = Java.use("android.widget.TextView");
     file.setText.overload('java.lang.CharSequence').implementation = function (str) {
     console.log('arg0:' + str);
     console.log('setText:' + this.getContext().getClassLoader().loadClass("com.tencent.smtt.sdk.WebViewClient"));
     return this.setText(str);
     };*/
    /*    var file = Java.use("com.tencent.tinker.loader.app.TinkerApplication");
     file.onCreate.implementation = function () {
     console.log('onCreate:' + this.getApplicationContext().getClassLoader().loadClass("com.tencent.smtt.sdk.WebViewClient").getName());
     return this.setText(str);
     };*/
    /*
     var file = Java.use("com.tencent.mobileqq.activity.aio.item.StructingMsgItemBuilder$ViewCache");
     var qqtext = Java.use("com.tencent.mobileqq.text.QQText");
     var MessageForText = Java.use("com.tencent.mobileqq.data.MessageForText");
     var baseChatPie = Java.use("com.tencent.mobileqq.activity.BaseChatPie");
     var arrayList = Java.use("java.util.ArrayList");
     var MessageRecord = Java.use("com.tencent.mobileqq.data.MessageRecord");
     var TextItemBuilder = Java.use("com.tencent.mobileqq.activity.aio.item.TextItemBuilder");
     var TextUtils = Java.use("android.text.TextUtils");
     var Log = Java.use("android.util.Log");
     var Throwable = Java.use("java.lang.Throwable");
     var Exception = Java.use("java.lang.Exception");
     var ChatAdapter = Java.use("com.tencent.mobileqq.activity.aio.ChatAdapter1");
     var FriendChatPie = Java.use("com.tencent.mobileqq.activity.aio.rebuild.FriendChatPie");
     var MsgPool = Java.use("com.tencent.mobileqq.app.message.MsgPool");
     var MsgProxy = Java.use("com.tencent.mobileqq.app.message.MsgProxy");
     var QQMessageFacade = Java.use("com.tencent.mobileqq.app.message.QQMessageFacade");
     var BaseChatPie = Java.use("com.tencent.mobileqq.activity.BaseChatPie");
     var ChatXListView = Java.use("com.tencent.mobileqq.bubble.ChatXListView");
     var AbsListView = Java.use("com.tencent.widget.AbsListView");
     var ListView = Java.use("com.tencent.widget.ListView");
     var AbsListView = Java.use("com.tencent.widget.AbsListView");
     var FPSXListView = Java.use("com.tencent.mobileqq.fpsreport.FPSXListView");
     var NowVideoController = Java.use("com.tencent.biz.now.NowVideoController");
     var ChatAdapter1 = Java.use("com.tencent.mobileqq.activity.aio.ChatAdapter1");*/
    //com.tencent.mobileqq.bubble.ChatXListView.dispatchTouchEvent(Landroid/view/MotionEvent;)Z
    //com.tencent.widget.AbsListView.dispatchTouchEvent(Landroid/view/MotionEvent;)Z
    //com.tencent.widget.ListView.onTouchEvent(Landroid/view/MotionEvent;)Z
    //com.tencent.widget.AbsListView.onTouchEvent(Landroid/view/MotionEvent;)Z
    //com.tencent.widget.AbsListView.startScrollIfNeeded(I)Z
    //com.tencent.widget.AbsListView.initVelocityTrackerIfNotExists()V
    //com.tencent.mobileqq.activity.BaseChatPie.n(I)V
    //com.tencent.mobileqq.bubble.ChatXListView.onScrollChanged(IIII)V
    //com.tencent.widget.AbsListView.onOverScrolled(IIZZ)V
    //com.tencent.widget.AbsListView.overScrollBy(IIIIIIIIZ)Z
    //com.tencent.widget.AbsListView.startScrollIfNeeded(I)Z
    //com.tencent.mobileqq.fpsreport.FPSXListView.reportScrollStateChange(I)V
    //com.tencent.mobileqq.activity.BaseChatPie.a(Lcom/tencent/widget/AbsListView;I)V
    //com.tencent.biz.now.NowVideoController.a()Lcom/tencent/biz/now/NowVideoController;
    //com.tencent.biz.now.NowVideoController.a(Lcom/tencent/widget/AbsListView;I)V
    //com.tencent.mobileqq.activity.aio.ChatAdapter1.b()V
    /*    ChatAdapter1.notifyDataSetChanged.overload().implementation = function () {
     // var result = this.startScrollIfNeeded(0);
     console.log('msg:');
     //console.log('result:' + result);
     return true;
     }*/
    /*
     MsgProxy.a.overload('java.lang.String', 'int', 'boolean', 'boolean').implementation = function (msg, i, b1, b2) {
     var result = this.a(msg, i, b1, b2);
     var list0 = result.get(0);
     console.log('list0:' + list0);
     console.log('msg:' + msg + ";i:" + i + "b1:" + b1 + "b2:" + b2);
     console.log('result:' + result);
     return result;
     }
     */
    /*
     MsgPool.a.overload('java.lang.String', 'int').implementation = function (msg, i) {
     var result = this.a(msg, i);
     console.log('msg:' + msg + ";i:" + i);
     console.log('result:' + result);
     return result;
     }
     */
    /*
     MsgPool.a.overload().implementation = function () {
     var result = this.a();
     console.log('result:' + result);
     return result;
     }
     */
    /*
     FriendChatPie.handleMessage.overload('android.os.Message').implementation = function (msg) {
     var result = this.handleMessage(msg);
     console.log('msg:' + JSON.stringify(msg.obj))
     console.log('result:' + result);
     return result;
     }
     */
    /*    TextUtils.isEmpty.overload('java.lang.CharSequence').implementation = function (arg0) {
     var result = this.isEmpty(arg0);
     console.log('msg:' + arg0);
     if (arg0 == "EMS") throw Exception.$new('frida StackTrace info...');
     console.log('result:' + result);
     return result;
     }*/

    /*    TextItemBuilder.a.overload('com.tencent.mobileqq.data.ChatMessage', 'com.tencent.mobileqq.activity.aio.BaseBubbleBuilder$ViewHolder', 'android.view.View', 'com.tencent.mobileqq.activity.aio.BaseChatItemLayout', 'com.tencent.mobileqq.activity.aio.OnLongClickAndTouchListener').implementation =
     function (arg0, arg1, arg2, arg3, arg4) {
     var result = this.a(arg0, arg1, arg2, arg3, arg4);
     var text = Java.cast(arg0, MessageForText);
     console.log('msg:' + JSON.stringify(text.sb));
     console.log('msg2:' + JSON.stringify(text.sb2));
     console.log('result:' + JSON.stringify(result));
     return result;
     };*/
    /*    WebView.loadUrl.overload('java.lang.String').implementation = function (req) {
     console.log('Url:' + req);
     };*/
    /*    var wv=Java.use("com.tencent.tbs.core.webkit.WebView");
     wv.loadUrl.overload('java.lang.String').implementation=function (url) {
     console.log('tbs Url:' + url);
     }*/
    /*
     * 	.overload('java.lang.String', 'int')
     .overload('int', 'int')
     .overload('java.lang.String', 'int', 'boolean')
     */
    /*    var toast = Java.use("com.tencent.mtt.base.ui.MttToaster");
     toast.show.overload('java.lang.String', 'int').implementation = function () {
     console.log("show0");
     };
     toast.show.overload('int', 'int').implementation = function () {
     console.log("show1");
     };
     toast.show.overload('java.lang.String', 'int', 'boolean').implementation = function () {
     console.log("show2");
     };*/
    //bilibili
    //com.bilibili.bangumi.ui.detail.BangumiDetailActivity.onEvent(I[Ljava/lang/Object;)V
    /*
     var BangumiDetailActivity = Java.use("com.bilibili.bangumi.ui.detail.BangumiDetailActivity");
     var pmn = Java.use("bl.pmn");
     var cc = Java.use("cn.jiguang.c.c");
     pmn.c.overload().implementation = function () {
     var result = this.c();
     console.log('msg:');
     console.log('result:' + result);
     return result;
     }
     */

    //com.mobirix.payment.google.IabResult
    //com.mobirix.payment.google.GooglePayment
    /*    var g=Java.use('com.lody.virtual.client.core.g');
     g.a.overload('java.lang.String','com.lody.virtual.remote.InstallOptions').implementation=function (arg0,arg1) {
     console.log('msg:'+arg0);
     arg0="/data/data/com.xgtl.assistant/files/dialog.apk";
     var result = this.a(arg0,arg1);
     console.log('result:' + result);
     return result;
     }*/

    /*    var format = function (src, args) {
     var result = src;
     if (args) {
     for (var i = 0; i < args.length; i++) {
     if (args[i] != undefined) {
     var reg = new RegExp("(%[sdbB])");
     result = result.replace(reg, args[i].toString);
     }
     }
     }
     return result;
     }
     var he = function (args) {
     var result='@@';
     if (args) {
     for (var i = 0; i < args.length; i++) {
     if (args[i] != undefined) {
     result=result+'::'+args[i];
     }
     }
     }
     return result;
     }
     var u = Java.use('com.tencent.mm.sdk.platformtools.u');
     /!*    var Xlog = Java.use('com.tencent.mm.xlog.Xlog');
     Xlog.logWrite2.implementation=function(args){
     for(var i=0;i<args.length;i++){
     console.log('arg'+i+':'+args[i]);
     }
     var result = this.logWrite2(args);
     return result;
     }*!/
     u.i.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function (arg0, arg1, arg2) {

     console.log('i:' + arg1+he(arg2) );
     console.log('msg: '+ format(arg1, arg2))
     // var arg0new = Xlog.DE(arg0);
     //  console.log('tag2:' + arg0new);
     var result = this.i(arg0, arg1, arg2);
     return result;
     }
     u.d.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function (arg0, arg1, arg2) {
     console.log('d:' + arg1+he(arg2) );
     console.log('msg: '+ format(arg1, arg2))
     // var arg0new = Xlog.DE(arg0);
     //  console.log('tag2:' + arg0new);
     var result = this.d(arg0, arg1, arg2);
     return result;
     }
     u.w.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function (arg0, arg1, arg2) {
     console.log('w:' + arg1+he(arg2) );
     console.log('msg: '+ format(arg1, arg2))
     // var arg0new = Xlog.DE(arg0);
     //  console.log('tag2:' + arg0new);
     var result = this.w(arg0, arg1, arg2);
     return result;
     }
     u.e.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation = function (arg0, arg1, arg2) {
     console.log('e:' + arg1+he(arg2) );
     console.log('msg: '+ format(arg1, arg2))
     // var arg0new = Xlog.DE(arg0);
     //  console.log('tag2:' + arg0new);
     var result = this.e(arg0, arg1, arg2);
     return result;
     }*/

//[0x24, 0x26, 0x28, 0x2A] ==> "$&C*"
    function byteToString(arr) {
        var str = '';
        if (arr == null) return str;
        for (var i = 0; i < arr.length; i++) {
            var tmp = (arr[i] & 0xFF).toString(16);
            if (tmp.length == 1) tmp = '0' + tmp;
            str = str + '' + tmp;
        }
        return str;
    }

    const String = Java.use("java.lang.String");
    const TextUtils = Java.use("android.text.TextUtils");
    const JsonObject = Java.use('org.json.JSONObject');
    const Object = Java.use('java.lang.Object');
    const Boolean = Java.use('java.lang.Boolean');
    /*    JsonObject.getBoolean.overload('java.lang.String').implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.getBoolean(arg0);
     if (arg0 == 'IsSuccess') result = true;
     console.log('result:' + result);
     return result;
     }*/
    /*    JsonObject.get.overload('java.lang.String').implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.get(arg0);
     console.log('result:' + result);
     return result;
     }*/
    /*    String.equals.overload('java.lang.Object').implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.equals(arg0);
     console.log('result:' + result);
     return result;
     }
     String.contains.overload('java.lang.CharSequence').implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.contains(arg0);
     console.log('result:' + result);
     return result;
     }
     TextUtils.equals.overload('java.lang.CharSequence', 'java.lang.CharSequence').implementation = function (arg0, arg1) {
     console.log('msg:' + arg0+':'+arg1);
     var result = this.equals(arg0, arg1);
     console.log('result:' + result);
     return result;
     }
     TextUtils.isEmpty.overload('java.lang.CharSequence').implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.isEmpty(arg0);
     console.log('result:' + result);
     return result;
     }*/
    /*    function getvalue(srcObj, castClass, valueName) {
     const field = Java.cast(srcObj.getClass(), castClass).getField(valueName);
     field.setAccessible(true);
     return field.get(srcObj);
     }

     const mm = Java.use('com.tencent.mm.protocal.MMProtocalJni');
     const pb = Java.use('com.tencent.mm.pointers.PByteArray');
     const pi = Java.use('com.tencent.mm.pointers.PInt');
     mm.pack.overload('[B', 'com.tencent.mm.pointers.PByteArray', '[B', '[B', 'java.lang.String', 'int', 'int', 'int', '[B', '[B', '[B', 'boolean').implementation =
     function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
     console.log('msg0:' + byteToString(arg0));
     const field = Java.cast(arg1.$handle, pb).value;
     console.log('msg1:' + byteToString(field));
     console.log('msg2:' + byteToString(arg2));
     console.log('msg3:' + byteToString(arg3));
     console.log('msg4:' + arg4);
     console.log('msg5:' + arg5);
     console.log('msg6:' + arg6);
     console.log('msg7:' + arg7);
     console.log('msg8:' + byteToString(arg8));
     console.log('msg9:' + byteToString(arg9));
     console.log('msga:' + byteToString(arg10));
     console.log('msgb:' + arg11);
     var result = this.pack(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11);
     console.log('result:' + result);
     return result;
     }
     mm.unpack.overload('com.tencent.mm.pointers.PByteArray', '[B', '[B', 'com.tencent.mm.pointers.PByteArray', 'com.tencent.mm.pointers.PInt', 'com.tencent.mm.pointers.PInt').implementation =
     function (arg0, arg1, arg2, arg3, arg4, arg5) {
     console.log('msg0:' + byteToString(Java.cast(arg0.$handle, pb).value));
     console.log('msg1:' + byteToString(arg1));
     console.log('msg2:' + byteToString(arg2));
     console.log('msg3:' + byteToString(Java.cast(arg3.$handle, pb).value));
     console.log('msg4:' + Java.cast(arg4.$handle, pi).value);
     console.log('msg5:' + Java.cast(arg5.$handle, pi).value);
     var result = this.unpack(arg0, arg1, arg2, arg3, arg4, arg5);
     console.log('result:' + result);
     return result;
     }*/
    /*    const db = Java.use('net.sqlcipher.database.SQLiteOpenHelper');
     db.getReadableDatabase.implementation = function (arg0) {
     console.log('msg:' + arg0);
     var result = this.getReadableDatabase(arg0);
     console.log('result:' + result);
     return result;
     }*/
    // var IabResult=Java.use("com.mobirix.payment.google.IabResult");

    /*     g.a.overload('java.lang.String').implementation=function (arg0) {
     console.log('msg:'+arg0);
     var result = this.a(arg0);
     console.log('result:' + result);
     return result;
     }
     g.a.overload('java.lang.String','java.lang.String').implementation=function (arg0,arg1) {
     console.log('msg0:'+arg0);
     console.log('msg1:'+arg1);
     var result = this.a(arg0,arg1);
     console.log('result:' + result);
     return result;
     }
     g.b.overload('java.lang.String','java.lang.String').implementation=function (arg0,arg1) {
     console.log('msg0:'+arg0);
     console.log('msg1:'+arg1);
     var result = this.a(arg0,arg1);
     console.log('result:' + result);
     return result;
     }
     g.a.overload('long','java.lang.String','java.lang.String').implementation=function (arg0,arg1,arg2) {
     console.log('msg0:'+arg0);
     console.log('msg1:'+arg1);
     console.log('msg2:'+arg2);
     var result = this.a(arg0,arg1,arg2);
     console.log('result:' + result);
     return result;
     }*/
    /*
     jsx.a.overload('[B').implementation = function (arg0) {
     var result = this.a(arg0);
     // console.log('msg:');
     console.log('result:' + result);
     return result;
     }
     */
    Interceptor.attach(Module.findExportByName("libc.so", "system"), {
        onEnter: function (args) {
            console.log("system() called!" + args[0]);
        },
        onLeave: function (retval) {

        }
    });
    const Runtime = Java.use('java.lang.Runtime');
    const NullPointerException = Java.use("java.lang.NullPointerException");
    const Exception = Java.use("java.lang.Exception");
    // const o = Java.use("com.tencent.mtt.browser.x5.x5webview.o");
    // o.onSavePassword.overload('android.webkit.ValueCallback', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'boolean').implementation = function (
    //     a1,a2,a3,a4,a5,a6,a7
    // ) {
    //     console.log(',a2:'+a2+',a3:'+a3+',a4:'+a4+',a5:'+a5+',a6:'+a6+',a7:' + a7);
    //     var result = this.onSavePassword(a1,a2,a3,a4,a5,a6,a7);
    //     // console.log('msg:');
    //     console.log('result:' + result);
    //     return result;
    // }
    // //com.tencent.smtt.sdk
    // const WebView = Java.use("com.tencent.smtt.sdk.WebView");
    // WebView.getX5WebViewExtension.implementation = function ( ) {
    //     var result = this.getX5WebViewExtension();
    //     // console.log('msg:');
    //     console.log('result:' + result.getClass());
    //     return result;
    // }

    // const c = Java.use("com.uc.framework.ui.widget.dialog.c");
    // c.onClick.implementation = function (arg0) {
    //     var result = this.onClick(arg0);
    //     // console.log('msg:');
    //     this.onStart();
    //     console.log('msg:' + this.fNb.value);
    //     return result;
    // }
    // const mu = Java.use("com.uc.browser.webwindow.mu");
    // mu.b.implementation = function (arg0, arg1) {
    //     console.log('msg:' + arg0);
    //     var result = this.b(arg0,arg1);
    //     console.log('msg:' + this.fNb.value);
    //     return result;
    // }
    // const h = Java.use("com.uc.framework.ui.widget.dialog.h");
    // h.a.overload('com.uc.framework.ui.widget.dialog.q').implementation = function (arg0) {
    //     console.log('msgq:' + arg0);
    //     var result = this.a(arg0);
    //     // console.log('msg:');
    //     return result;
    // }
    // h.a.overload('com.uc.framework.ui.widget.dialog.u').implementation = function (arg0) {
    //     console.log('msgu:' + arg0);
    //     var result = this.a(arg0);
    //     // console.log('msg:');
    //     return result;
    // }
    // const StatsModel = Java.use('com.UCMobile.model.StatsModel');
    // StatsModel.tf.implementation = function (arg0) {
    //     console.log('tf:' + arg0);
    //     // var result = this.tf(arg0);
    //     // console.log('msg:');
    //     return null;
    // }
    // const mu = Java.use('com.uc.browser.webwindow.mu');
    // mu.b.implementation = function (arg0, arg1) {
    //     console.log('arg0:' + arg0);
    //     console.log('arg1:' + arg1);
    //     console.log('valuecallback:' + this.rcl.value)
    //     const webviewm = Java.use('org.chromium.android_webview.m');
    //     webviewm.onReceiveValue.implementation = function (arg0) {
    //         console.log('arg0:' + arg0);
    //     }
    //     var result=this.b(arg0,arg1);
    //     return result;
    // }
    // const b = Java.use("com.uc.framework.ui.widget.d.b");
    // b.onClick.implementation = function (arg0) {
    //     console.log('cSk:' + this.cSk.value);
    //     var result = this.onClick(arg0);
    //     // console.log('msg:');
    //     return result;
    // }
    // const kv=Java.use("com.uc.browser.webwindow.kv");
    // kv.a.implementation=function (arg0,arg1) {
    //     console.log("fsss:"+this.fss.value);
    //     return false;
    // }
    // const o = Java.use("com.uc.webkit.o");
    // o.onReceiveValue.implementation = function (arg0) {
    //     var result = this.onReceiveValue(arg0);
    //     // console.log('msg:');
    //     return result;
    // }
    //
    // const er = Java.use("com.uc.webkit.er");
    // er.handleMessage.implementation = function (arg0) {
    //     console.log('msgwhat:' + arg0.what.value);
    //     console.log('msgarg1:' + arg0.arg1.value);
    //     var result = this.handleMessage(arg0);
    //     return result;
    // }

    // function Uint162Str(arraybuffer) {
    //     return String.fromCharCode.apply(null, new Uint16Array(arraybuffer));
    // }


    // Interceptor.attach(Module.findExportByName("libnativehelper.so", "jniRegisterNativeMethods"), {
    //     onEnter: function (args) {
    //         var numMethod = args[3].toInt32();
    //         var className = args[1];
    //         var methods = Memory.readByteArray(args[2], 10000);
    //         console.log("jniRegisterNativeMethods :classname:" + Memory.readUtf8String(className));
    //         console.log("jniRegisterNativeMethods :numMethod:" + numMethod);
    //         console.log("jniRegisterNativeMethods :Method1:" + methods);
    //         console.log(methods.byteLength);
    //         console.log(hexdump(methods, { offset: 0, length: 10000, header: false, ansi: false }));
    //     },
    //     onLeave: function (retval) {
    //
    //     }
    // });

    // Interceptor.attach(Module.findExportByName("libsqlite.so", "sqlite3_open"), {
    //     onEnter: function (args) {
    //         var sqlStr = Memory.readUtf8String(args[0]);
    //         console.log("sqlite3_open:" + sqlStr);
    //     },
    //     onLeave: function (retval) {
    //
    //     }
    // });
    // Interceptor.attach(Module.findExportByName("libsqlite.so", "sqlite3_exec"), {
    //     onEnter: function (args) {
    //         var sqlStr = Memory.readUtf8String(args[1]);
    //         console.log("sqlite3_exec:" + sqlStr);
    //     },
    //     onLeave: function (retval) {
    //
    //     }
    // });
    // Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
    //     onEnter: function (args) {
    //         var sqlStr = Memory.readUtf8String(args[0]);
    //         console.log("fopen:" + sqlStr);
    //     },
    //     onLeave: function (retval) {
    //
    //     }
    // });
    // const BRService = Java.use("com.miui.backup.service.BRService");
    // BRService.backupPackages.overload('java.util.ArrayList', 'boolean', 'boolean', 'boolean', 'int', 'java.lang.String').implementation = function (items, isRetransfer, encrypt, isAutoBackup, bakFilesType, basePath) {
    //     console.log("-->backupPackages(items=" + items + ",isRetransfer=" + isRetransfer + ",encrypt:" + encrypt + ";isAutoBackup:" + isAutoBackup + ";bakFilesType:" + bakFilesType + ";basePath:" + basePath + ");");
    //     var result = this.backupPackages(items, isRetransfer, encrypt, isAutoBackup, bakFilesType, basePath);
    //     return result;
    // }
    // const File = Java.use("java.io.File");
    // File.delete.implementation = function () {
    //     console.log("-->delete(file:" + this.getName() + ");");
    //     return true;
    // }
    // const BRFile = Java.use("com.miui.backup.net.BRFile");
    // BRFile.valueOf.overload('java.lang.String').implementation = function (jsonText) {
    //     console.log("-->valueOf(jsonText:" + jsonText + ");");
    //     return this.valueOf(jsonText);
    // }
    // BRFile.valueOf.overload('java.io.File').implementation = function (file) {
    //     console.log("-->valueOf(file:" + file + ");");
    //     return this.valueOf(file);
    // }
    // BRFile.toJson.implementation = function () {
    //     var result = this.toJson();
    //     console.log("-->toJson():" + result);
    //     return result;
    // }
    // const BRFileClient = Java.use("com.miui.backup.net.BRFileClient");
    // BRFileClient.send.implementation = function (file, normalizedPath) {
    //     console.log("-->send(file:" + file.getName() + ";normalizedPath:" + normalizedPath + ");");
    //     return this.send(file, normalizedPath);
    // }
    // const BackupLog = Java.use("com.miui.backup.BackupLog");
    // BackupLog.v.implementation = function (tag, logMe) {
    //     console.log("-->v(tag=" + tag + ",logMe=" + logMe + ")");
    //     return this.v(tag, logMe);
    // }
    // BackupLog.d.implementation = function (tag, logMe) {
    //     console.log("-->d(tag=" + tag + ",logMe=" + logMe + ")");
    //     return this.d(tag, logMe);
    // }
    // BackupLog.i.implementation = function (tag, logMe) {
    //     console.log("-->i(tag=" + tag + ",logMe=" + logMe + ")");
    //     return this.i(tag, logMe);
    // }
    // BackupLog.w.overload('java.lang.String', 'java.lang.String').implementation = function (tag, logMe) {
    //     console.log("-->w(tag=" + tag + ",logMe=" + logMe + ")");
    //     return this.w(tag, logMe);
    // }
    // BackupLog.e.overload('java.lang.String', 'java.lang.String').implementation = function (tag, logMe) {
    //     console.log("-->e(tag=" + tag + ",logMe=" + logMe + ")");
    //     return this.e(tag, logMe);
    // }
    // const m = Java.use("h.c.d.a.F.m");
    // m.a.overload('android.database.sqlite.SQLiteDatabase', 'java.lang.String').implementation = function (arg0, arg1) {
    //     console.log("-->a(sql=" + arg0 + ",key=" + arg1 + ")");
    //     var result = this.a(arg0, arg1);
    //     console.log("-->result:" + result);
    //     return result;
    // }
    // const y=Java.use("h.c.d.a.y.a.a.y")
    // y.a.overload('[B').implementation = function (arg0) {
    //     console.log("-->a(data=" + arg0 +  ")");
    //     var result = this.a(arg0, arg1);
    //     console.log("-->result:" + result);
    //     return result;
    // }
    // const m = Java.use("jp.naver.line.android.db.j");
    // m.a.overload('android.database.sqlite.SQLiteDatabase', 'java.lang.String').implementation = function (arg0, arg1) {
    //     console.log("-->a(sql=" + arg0 + ",key=" + arg1 + ")");
    //     var result = this.a(arg0, arg1);
    //     console.log("-->result:" + result);
    //     return result;
    // }
    // m.a.overload('android.database.sqlite.SQLiteDatabase', 'java.lang.String', 'java.lang.String').implementation = function (arg0, arg1, arg2) {
    //     console.log("-->a(sql=" + arg0 + ",key=" + arg1 + ",value=" + arg2 + ")");
    //     var result = this.a(arg0, arg1);
    //     console.log("-->result:" + result);
    //     return result;
    // }
    // const y=Java.use("h.c.d.a.y.a.a.y")
    // y.a.overload('[B').implementation = function (arg0) {
    //     console.log("-->a(data=" + arg0 +  ")");
    //     var result = this.a(arg0, arg1);
    //     console.log("-->result:" + result);
    //     return result;
    // }
    // const SQLiteDatabase = Java.use("android.database.sqlite.SQLiteDatabase")
    // SQLiteDatabase.insertOrThrow.implementation = function (table, nullColumnHack, values) {
    //     if (table == "keyword") {
    //         var result = this.insertOrThrow(table, nullColumnHack, values);
    //     } else {
    //         console.log("-->insertOrThrow(table=" + table + ",nullColumnHack=" + nullColumnHack + ",values=" + values + ")");
    //         var result = this.insertOrThrow(table, nullColumnHack, values);
    //         console.log("-->result:" + result);
    //     }
    //
    // }
    // SQLiteDatabase.insert.implementation = function (table, nullColumnHack, values) {
    //     if (table == "keyword") {
    //         var result = this.insert(table, nullColumnHack, values);
    //     } else {
    //         console.log("-->insert(table=" + table + ",nullColumnHack=" + nullColumnHack + ",values=" + values + ")");
    //         var result = this.insert(table, nullColumnHack, values);
    //         console.log("-->result:" + result);
    //     }
    //
    // }
    //     SQLiteDatabase.update.implementation = function (table, nullColumnHack, values,whereArgs) {
    //     if (table == "keyword") {
    //         var result = this.update(table, nullColumnHack, values,whereArgs);
    //     } else {
    //         console.log("-->update(table=" + table + ",nullColumnHack=" + nullColumnHack + ",values=" + values + ")");
    //         var result = this.update(table, nullColumnHack, values,whereArgs);
    //         console.log("-->result:" + result);
    //     }
    //
    // }
    // SQLiteDatabase.execSQL.overload('java.lang.String').implementation = function (sql) {
    //     console.log("-->execSQL(sql=" + sql + ")");
    //     var result = this.execSQL(sql);
    //     console.log("-->result:" + result);
    // }
    // SQLiteDatabase.replaceOrThrow.implementation = function (table, nullColumnHack, values) {
    //     if (table == "keyword") {
    //         var result = this.replaceOrThrow(table, nullColumnHack, values);
    //     } else {
    //         console.log("-->replaceOrThrow(table=" + table + ",nullColumnHack=" + nullColumnHack + ",values=" + values + ")");
    //         var result = this.replaceOrThrow(table, nullColumnHack, values);
    //         console.log("-->result:" + result);
    //     }
    //
    // }
    const fileCrypt = Java.use("com.huawei.android.backup.service.a.a.a.b")
    fileCrypt.a.overload('java.lang.String', 'java.io.InputStream', 'java.io.OutputStream', 'java.lang.String', 'java.lang.String').implementation = function (arg0,arg1,arg2,arg3,arg4) {
        console.log("-->a(password=" + arg0+";enMsg1:"+arg3+";enMsg2:"+arg4);
        var result = this.a(arg0,arg1,arg2,arg3,arg4);
        console.log("-->result:" + result);
    }


});