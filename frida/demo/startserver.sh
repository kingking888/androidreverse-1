adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
adb shell su -c "setenforce 0"
adb shell su -c "chmod 777 /data/local/tmp/fs12722"
adb shell su -c "./data/local/tmp/fs12722"