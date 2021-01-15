# Note

### WSL2 出现“参考的对象类型不支持尝试的操作”的解决方法。

以管理员身份运行 CMD ，输入：

> netsh winsock reset

重启计算机即可修复。

### 使用 -cloud 内核为小内存 VPS 升级最新 Debian

-cloud 内核的包名是 `linux-image-cloud-amd64`，也就是说，我们从官方源安装就行：

> apt update
> apt install linux-image-cloud-amd64

从 Debian 9 升级到 10，网上有很多教程，会经历改源、`dist-upgrade` 和重启。需要在 `dist-upgrade` 之后，重启之前安装 -cloud 内核。一般情况下，包管理工具会自动执行指令，配置为首选启动内核，我们留意一下就行了。

如果需要更新的内核，则需要从 backports 源安装：

> echo "deb http://deb.debian.org/debian buster-backports main" > /etc/apt/sources.list.d/buster-backports.list #添加 buster-backports 源
> apt update
> apt -t buster-backports install linux-image-cloud-amd64



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

### Jsdelivr 缓存更新慢

将 `cdn.jsdelivr.net` 替换成 `purge.jsdelivr.net` 请求一次即可刷新缓存，刷新完还是要稍微等一会会儿。

### Electron 安装 failed to install correctly

尝试手动执行

> node node_modules\electron\install.js

### 安装 docker

01.安装通过 HTTPS 添加新存储库所需的软件包：

> apt update
>
> apt install apt-transport-https ca-certificates curl software-properties-common gnupg2

02.使用以下 curl 命令导入存储库的 GPG 密钥：

> curl -fsSL https://download.docker.com/linux/debian/gpg |  apt-key add -

03.将稳定的 Docker APT 存储库添加到系统的软件存储库列表中：

> add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

$(lsb_release -cs) 将返回 Debian 发行版的名称。在这个例子总，返回的就是 buster 。

04.更新 apt 软件包列表并安装最新版本的 Docker CE(Community Edition) ：

> apt update
> apt install docker-ce

05.安装完成后， Docker 服务将自动启动。要验证它输入：

> systemctl status docker

### 安装 docker-compose

1.在 https://github.com/docker/compose/releases 看最新的版本号并进行下载

> curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

2.然后给 docker-compose 权限

> chmod +x /usr/local/bin/docker-compose

### acme.sh 命令

查看证书列表

> acme.sh --list

删除证书

> acme.sh --remove -d 

用 E-mail 注册 zerossl 证书

> acme.sh  --register-account  -m myemail@example.com --server zerossl

切换默认证书

> acme.sh --set-default-ca  --server zerossl

### 单独卸载 lnmp 里的 mysql 数据库

备份好数据，然后

> /etc/init.d/mysql stop
> rm -rf /usr/local/mysql
> rm -f /etc/init.d/mysql