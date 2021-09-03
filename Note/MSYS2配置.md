### Windows Terminal 配置

字体用的是 [JetBrains Mono](https://www.jetbrains.com/zh-cn/lp/mono/)。（附上了JetBrains Mono Regular Nerd Font Complete.ttf）

#### 清单

```json
{
    "guid": "{71160544-14d8-4194-af25-d05feeac7233}",
    "name": "MSYS2",
    "commandline": "D:\\msys64\\msys2_shell.cmd -msys -defterm -no-start -full-path -here -shell zsh",
    "icon": "D:\\msys64\\msys2.ico",
    "startingDirectory": "%CD%",
    "closeOnExit": "always",
    "colorScheme": "Dracula",
    "fontFace": "JetBrains Mono",
    "fontSize": 10
}
```



### Zsh

使用 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 扩展。

#### 主题

- [Powerlevel10k](https://github.com/romkatv/powerlevel10k)

#### 插件

- [Fast Syntax Highlighting](https://github.com/zdharma/fast-syntax-highlighting)

### 环境变量

#### MSYS2 使用 Windows 的环境变量

> MSYS2_PATH_TYPE=inherit

#### Windows 使用 MSYS2 中的 Git

配置文件我已经打包到了 `MSYS2-cmd.zip` 文件夹中，解压后将目录增加到环境变量中即可



### 使用om-my-zsh 的 autosuggestions  插件粘贴在终端很慢情况

使用om-my-zsh 的 autosuggestions  插件

导致 鼠标往 terminal 粘贴文字很慢，出现打字机效果的文字输入

解决方案在 .zshrc 文件加入以下代码

``` shell
# 解决复制粘贴出现很慢情况
pasteinit() {
OLD_SELF_INSERT=${${(s.:.)widgets[self-insert]}[2,3]}
 zle -N self-insert url-quote-magic
}

pastefinish() {
 zle -N self-insert $OLD_SELF_INSERT
}
 
zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish
```



