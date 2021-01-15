# Nginx 常用插件

## 插件地址

### Brotli 插件

> cd /root
> git clone https://github.com/google/ngx_brotli

### ngx_cache_purge

https://github.com/nginx-modules/ngx_cache_purge/releases 看最新版本号

> https://github.com/nginx-modules/ngx_cache_purge/archive/2.5.1.tar.gz 



## 自编译 Nginx

执行命令 `nginx -V` , configure arguments 即为现有的参数；

追加参数 `--add-module=第三方插件路径` ,然后执行 `make && make install` 重新编译 Nginx.

如需执行平滑升级 (热部署)，make 之后请不要 make install：

> mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.old cp objs/nginx /usr/local/nginx/sbin/nginx make upgrade

## lnmp 更新 Nginx

编辑 lnmp 安装包下的 lnmp.conf ，在 Nginx_Modules_Options='' 的单引号内加上 `--add-module=第三方插件路径` 保存 `./upgrade.sh nginx`