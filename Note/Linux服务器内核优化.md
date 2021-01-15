# Linux 服务器内核调优

> vim /etc/security/limits.conf
>
> soft nofile 65535
> hard nofile 65535
> soft nproc 65535
> hard nproc 65535



## /etc/sysctl.conf

fs.file-max=65535