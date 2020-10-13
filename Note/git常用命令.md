## 常用 git 命令

### 高频使用的命令

```shell
# 下载一个项目和它的整个代码历史
$ git clone [url]
# 添加当前目录的所有文件到暂存区
$ git add .
# 提交暂存区到仓库区
$ git commit -m [message]
# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]
# 上传本地指定分支到远程仓库
$ git push [remote] [branch]
# 查看所有远程库的远程地址
$ git remote -v
# 同步fork的上游仓库
$ git remote add upstream [源项目 URL]
# 同步更新仓库内容
$ git fetch upstream
# 检查fork的本地 [main] 分支
$ git checkout [main]
# 将来自 upstream/main 的更改合并到本地 main 分支中。
$ git merge upstream/main
# 修改作者名
$ git commit --amend --author='Author Name <email@address.com>'
```



### git 配置

```shell
# Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。
# 显示当前的Git配置
$ git config --list
# 编辑Git配置文件
$ git config -e [--global]
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```



