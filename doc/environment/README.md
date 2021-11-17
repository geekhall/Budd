# 项目环境

_Read this in other languages:_
[_English_](README.en-US.md)

## 软件版本

|Dependencies|Version|
|----|----|
|Anaconda|4.10.1|
|Python|3.8.12|
|pip|21.2.4|
|@vue/cli|4.5.15|
|Django|3.2.9|

## 搭建初始化环境

### 后端工程

1. 创建一个虚拟环境来管理依赖

```bash
# 创建虚拟环境
conda create --name budd python=3.8

# 激活虚拟环境
conda activate budd
```

也可以使用`Python3`直接创建虚拟环境

```bash
# 创建虚拟环境
python3 -m budd ./

# 激活虚拟环境
source ./bin/activate
```

2. 安装Django (Install Django)

```bash
conda activate budd
pip install django
```

3. 创建并初始化Django项目

```bash
(budd) django-admin startproject backend .
```

创建工程后目录结构：

```txt
├── backend
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
└── requirements.txt
```

4. 创建MySQL数据库

```sql
-- 创建数据库
CREATE DATABASE IF NOT EXISTS your_dbname DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

-- 创建用户
CREATE USER 'your_username'@'%' IDENTIFIED BY 'your_password';

-- 权限配置
GRANT ALL ON your_dbname.* TO 'username'@'%';
```

5. 修改数据库为MySQL

编辑`backend/settings.py`文件

注释掉原来的SqLite部分，添加MySQL配置内容：

```python
DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.getenv('mysql_budd_database'),
        'HOST': os.getenv('mysql_budd_host'),
        'PORT': os.getenv('mysql_budd_port'),
        'USER': os.getenv('mysql_budd_username'),
        'PASSWORD': os.getenv('mysql_budd_password')
    }
}

```

然后将以下内容添加至环境变量：

```bash
export mysql_budd_host="127.0.0.1"
export mysql_budd_database="database name"
export mysql_budd_port="3306"
export mysql_budd_username="your username"
export mysql_budd_password="your password"
```

注意：这里仅为配置示例，请根据自身环境修改。

6. 运行Django迁移命令

```bash
python manage.py migrate
```

注意执行前需要使用`pip install mysqlclient`来安装`mysqlclient`

输出：

```txt
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying sessions.0001_initial... OK
```

5. 创建一个超级用户

```bash
python manage.py createsuperuser
```

6. 运行

```bash
python manage.py runserver
```

7. 创建blog应用

```bash
python manage.py startapp blog
```

现在你的目录结构应该是这样的：

```txt
├── backend
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── blog
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── manage.py
```

8. 启用Blog 应用（Enable the Django Blog Applicatioin）

```python
INSTALLED_APPS = [
    # ...
    'blog',
]
```

### 前端工程

1. 安装@vue/cli

略

2. 创建前端工程

```bash
vue create frontend
```

选择Vue3工程

将`node_modules`文件夹添加至`.gitignore`文件中

```bash
cd frontend
yarn serve
```

## 常用操作

### 收集静态文件

```bash
python manage.py collectstatic
```

### uwsgi 启动python应用程序

```bash
uwsgi --http :4000 --wsgi-file test.py
uwsgi --http :4000 --module hello.wsgi --virtualenv=/root/Env/mwd
```

### 导出python依赖包

```bash
pip freeze > requirements.txt
```

### 开启gulp任务

```bash
cd front
gulp
```
