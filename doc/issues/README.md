# 各种问题

_Read this in other languages:_
[_English_](README.en-US.md)

## 软件安装

* Mac环境安装mysqlclient时报错

执行`pip install mysqlclient`时报错：

```txt
ld: library not found for -lzstd
clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: command 'gcc' failed with exit status 1
```

可能的原因：

找不到zstd库，执行下面的命令看`homebrew`安装在哪里了：

```bash
brew --prefix
output: /opt/homebrew
```

解决方法：

```bash
export LDFLAGS="-L/opt/homebrew/lib -L/opt/homebrew/opt/openssl/lib"
export CPPFLAGS="-I/opt/homebrew/include -I/opt/homebrew/opt/openssl/include"
```

使环境变量生效后重新执行`pip install mysqlclient`。

* 执行`python manage.py migrate`的时候报错

```txt
 line 24, in <module>
    version_info, _mysql.version_info, _mysql.__file__
NameError: name '_mysql' is not defined
```

原因：Apple-M1芯片的conda版python虚拟环境的问题。
使用原生python，不使用虚拟环境后问题解决。

也参考了网上一些其他解决方案，比如将动态库复制等方法，实测后问题依然存在，
留待以后解决。
