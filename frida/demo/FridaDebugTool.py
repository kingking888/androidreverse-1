# coding=utf-8
import frida
import sys


def on_message(message, data):
    type = message["type"]
    msg = message
    if type == "send":
        msg = message["payload"]
    elif type == 'error':
        msg = message['stack']
    else:
        msg = message
    print(msg)

#输出frida版本
print('frida version:'+frida.__version__)
# 获取设备
device = frida.get_remote_device()
# 注入进程
#process=device.attach("com.xgtl.assistant")
#process = device.attach("com.tencent.mm")
#process=device.attach("com.ss.android.ugc.aweme")
#process=device.attach("com.qiyi.video")
#process=device.attach("com.ggeye.babymingzi")
# process=device.attach("dji.pilot")
# process=device.attach(16954)
# process=device.attach("com.yunzhan.liaobei")
# process=device.attach("com.tencent.mobileqq")
# process=device.attach("com.ss.android.ugc.live")
process=device.attach("com.ss.android.lark:p0")
#process=device.attach("com.snda.wifilocating")
#process = device.attach("louis.norootdebugtool")
#process=device.attach("com.bankcomm.maidanba")
#process=device.attach("cn.ainixiang.mynativeapplication")
#process=device.attach("com.tencent.mtt")
#process=device.attach("com.UCMobile")
#process=device.attach("com.android.chrome")
#process=device.attach("adbd")
#process=device.attach("com.miui.backup:remote")
#process=device.attach("jp.naver.line.android")
#process=device.attach("com.huawei.KoBackup:remote")
#process=device.attach("com.alibaba.android.rimet")
#process=device.attach("com.taobao.qianniu")
#process=device.attach("com.taobao.idlefish")
# process=device.attach("com.tencent.mm")
# process=device.attach("system_server")
# process=device.attach("com.tencent.wework")
# process=device.attach("com.damanguan.gamehall")
# process=device.attach("com.mostone.life")
# 创建脚本
#js = open("HookDingDing.js").read()
js = open("HookSqlcipherV3.js").read()
script = process.create_script(js)
# 绑定函数
script.on('message', on_message)
# 加载脚本
script.load()
print("FridaDebugTool running....")
# 执行脚本
sys.stdin.read()
# 命令行方式
# -f 注入时重新启动App
# frida -U -f jp.naver.line.android --no-pause -l per/louis/FridaRunJs.js
# frida -U -f com.taobao.qianniu --no-pause -l HookQianNiu.js
# frida -U -f com.taobao.idlefish --no-pause -l HookXianYu.js
# frida -U -f com.tencent.mm --no-pause -l HookQWeChat4.js
# frida -U -f com.tencent.wework --no-pause -l HookQWeChat.js
# frida -U -f com.damanguan.gamehall --no-pause -l HookLua.js
# frida -U -f com.mostone.life --no-pause -l HookSqlcipherV2.js
# frida -U -f org.thoughtcrime.securesms --no-pause -l HookSqlcipherV2.js
# frida -U -f com.ss.android.ugc.live --no-pause -l HookSqlcipherV3.js

# frida -U -f com.ss.android.lark:p0 --no-pause -l HookSqlcipherV2.js


# com.ss.android.lark





