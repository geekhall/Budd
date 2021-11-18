# Issues

_Read this in other languages:_
[_简体中文_](README.md)

## Software install

* Error when installing mysqlclient in mac environment

Error while executing `pip install mysqlclient`：

```txt
ld: library not found for -lzstd
clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: command 'gcc' failed with exit status 1
```

Possible reason：

Can not find lib zstd，
Check if your brew is not in default location do this to
check where you have installed `homebrew`：

```bash
brew --prefix
output: /opt/homebrew
```

Resolve：

```bash
export LDFLAGS="-L/opt/homebrew/lib -L/opt/homebrew/opt/openssl/lib"
export CPPFLAGS="-I/opt/homebrew/include -I/opt/homebrew/opt/openssl/include"
```

and then do the pip install again :`pip install mysqlclient`。
