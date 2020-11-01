# Note

### WSL2 出现“参考的对象类型不支持尝试的操作”的解决方法。

以管理员身份运行 CMD ，输入：

> netsh winsock reset

重启计算机即可修复。

### 开启 bbr

修改系统变量

> echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
> echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

保存生效

> sysctl -p

查看内核是否开启 bbr

> sysctl net.ipv4.tcp_available_congestion_control

查看 bbr 是否启动

> lsmod | grep bbr

### 更改 ssh 端口

首先,我们需要编辑文件 `/etc/ssh/sshd_config` ,找到下面这行：

>  #Port 22 

改成

>  Port 32322

即可,其中 32322 是你要改成的新端口,如果你想设为 1888 ,则这里填写 1888 .记得去掉 Port 前面的注释符#.
然后,执行下面的命令即可生效.

>  systemctl restart ssh 