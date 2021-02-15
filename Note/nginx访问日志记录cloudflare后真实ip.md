# cloudflare 后显示真实 ip

安装 `http_realip_module` 模块，然后在 `/etc/nginx/nginx.conf` 的`http{}` 内加入

```nginx
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/12;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2a06:98c0::/29;
set_real_ip_from 2c0f:f248::/32;

real_ip_header CF-Connecting-IP;
```

然后增加

```nginx
map $HTTP_CF_CONNECTING_IP $clientRealIp 
{
    "" $remote_addr;
    ~^(?P<firstAddr>[a-z0-9.:]+),?.*$ $firstAddr;
}
log_format access '$clientRealIp [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '$http_user_agent $remote_addr $request_time';
```

再在同一文件下的 access_log 末尾加上 access 如

*access_log /var/log/nginx/access.log access;*