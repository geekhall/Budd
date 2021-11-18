# 项目环境

_Read this in other languages:_
[_English_](README.en-US.md)

## 主要软件版本

|Dependencies|Version|
|----|----|
|Anaconda|4.10.1|
|Python|3.8.12|
|pip|21.2.4|
|Node|15.4.0|
|@vue/cli|4.5.15|
|Django|3.2.9|
|Vue|3.2.16|
|Vite|2.6.14|
|Yarn|1.22.17|

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
cd backend
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

1. 命令行工具（@vue/cli）

Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。
它为现代前端工作流提供了功能齐备的构建设置。
只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

```bash
# 安装
yarn global add @vue/cli@next
# OR
npm install -g @vue/cli@next
```

运行以下命令，检测是否安装成功

```bash
vue -V
```

说明是安装成功的，这里注意以下，@vue/cli的版本一定要大于4.0才能创建vue3的项目，若版本较低，记得升级。

注：

* Vue2版本: yarn global add vue-cli
* Vue3版本: yarn global add @vue/cli

2. Vite

Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。

3. 创建前端工程

* Vue方式

```bash
# 创建工程
vue create frontend

# 运行
cd frontend
yarn serve
```

* 使用Vite快速创建Vue项目：

使用npm：

```bash
# npm 6.x
$ npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```

使用 yarn

```bash
# 创建工程，这里<project-name> 为frontend
yarn create vite <project-name> --template vue

# 运行
cd <project-name>
yarn
yarn dev    # 3000端口
```

将`node_modules`文件夹添加至`.gitignore`文件中

3. 添加项目依赖的组件

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install vue-router@next vuex@next element-plus axios --save

# Yarn
$ yarn add vue-router@next vuex@next element-plus axios -S

# pnpm
$ pnpm install vue-router@next vuex@next element-plus axios
```

### 集成element plus

修改`main.js`为如下：

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
// createApp(App).mount('#app')

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

### 前端获取项目中的环境变量

```bash
# vue2获取环境变量：
process.env.VUE_APP_ENV

# vue3+ vite 获取环境变量：
import.meta.env
```

## 使用到的vscode 插件

|VSCode Plugin| 作用 |
|----|----|
|markdownlint|用于检查markdown语法格式是否规范。|
|Volar|Vue语言特色高性能工具。|
|Prettier|代码格式化美化工具。|
|ESLint|语法检查工具。|
