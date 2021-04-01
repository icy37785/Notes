### 初始化

进入项目,用 `go mod init github.com/xxx/xxx`

### 添加依赖

添加依赖:  `go get github.com/xxx/xxx`
添加指定版本: ` go get github.com/xxx/xxx@v1.6.2`
添加指定版本范围:  `go get github.com/xxxx/xxx@'<v1.6.2'`
添加指定commit的版本 git commit:  `go get github.com/xxxx/xxx@q2516faf3`

### 升级依赖

升级 major 版本: `go get -u github.com/xxx/xxx`
升级全部依赖的 minor 或 patch 版本: `go get -u`
升级全部依赖的 patch 版本: `go get -u=patch`

### 补全清理依赖

`go mod tidy` 这个命令会下载缺失依赖，并清理无用的依赖（包括清理 go.mod 中的记录）