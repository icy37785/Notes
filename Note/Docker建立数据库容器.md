## Docker 安装数据库

### 安装 Postgresql

#### Docker 安装 Postgresql

拉取 postgresql 镜像: `docker pull postgres`

也可以选用集成zhparser的版本 `docker pull abcfy2/zhparser:13-alpine`

然后运行 postgresql

> docker run -d -p 5432:5432 --name postgresql -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=pg123456 postgres

#### 环境变量

1. POSTGRES_PASSWORD(数据库密码)
2. POSTGRES_USER(数据库用户名,未指定则默认用户为`postgres`)
3. POSTGRES_DB(数据库名)

####  参数说明
```shell
-d：表示在后台启动容器；
-p 5432:5432：容器内部的 5432 端口映射主机的 5432 端口；
--name postgresql：将容器命名为 postgresql
-v /home/user/pgdata:/var/lib/postgresql/data：挂载目录，其中 /home/user/pgdata 是宿主机的目录
-e POSTGRES_PASSWORD=123：数据库 postgres 密码设置为 123
```

> docker run -d -p 5432:5432 --name=postgresql -v /home/user/pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=123 postgres

### 安装 pgadmin4

#### Docker 安装 pgadmin4

拉取 pgadmin4 镜像: `docker pull dpage/pgadmin4`

然后运行 pgadmin4

> docker run -d -p 5433:80 --name pgadmin4 -e PGADMIN_DEFAULT_EMAIL=test@123.com -e PGADMIN_DEFAULT_PASSWORD=123456 dpage/pgadmin4

打开浏览器访问 pgadmin4: http://localhost:5433/

输入我们设置的邮箱 `test@123.com` 和密码 `123456`

连接 server : 默认 username 是 postgres，password 是上面设置的 pg123456 注意，因为 pgadmin 运行在 docker 里，所以 host 不能写 localhost。host.docker.internal 代表[宿主机](https://cloud.tencent.com/product/cdh?from=10680)器，或者用宿主机IP。



### 安装 Redis

#### Docker 安装 Redis

拉取 Redis 镜像: ` docker pull redis`

#### 快速启动 Redis(方法一)

> docker run -itd --name redis-test -p 6379:6379 redis

#### 配置 Redis 并启动(方法二)

从官方下载配置文件

> wget https://raw.githubusercontent.com/redis/redis/6.0/redis.conf

修改 `redis.conf` 配置文件

主要配置如下:

``` conf
bind 127.0.0.1       #注释掉这部分，使redis可以外部访问
daemonize no         #用守护线程的方式启动
requirepass 你的密码  #给redis设置密码
appendonly yes       #redis持久化　　默认是no
tcp-keepalive 300    #防止出现远程主机强迫关闭了一个现有的连接的错误 默认是300
```

创建 Redis 挂载目录并将配置文件复制进去

> mkdir /redis
>
> mkdir /redis/data
>
> cp -p redis.conf /redis/

运行 Reids

> docker run -p 6379:6379 --name redis -v /redis/redis.conf:/etc/redis/redis.conf  -v /redis/data:/data -d redis redis-server /etc/redis/redis.conf

通过 redis-cli 链接测试使用 redis 服务

> docker exec -it redis /bin/bash



