show databases 查看有什么库

show tables 查看有什么表

use 库名  [进入库]

desc 表名 查看表的结构

建立数据库：Create database 库名

删除数据库：Drop database 库名

建立表： create table 表名(字段名 字段类型，字段名2 字段类型)

删除数据表： Drop table 表名

添加表里面的字段：
  Alter table 表名 add 字段名 字段类型

删除表里面的字段：
  Alter table 表名 drop 字段名
修改表内字段名：
  alter table 表名 change 旧字段名 新字段名 新类型;

插入数据(增)：
  insert into 表名 values (值，值)

  insert into 表名(列名1，列名2) values(值1，值2)

查询语句:
  select *from 表名 where 条件

  select 字段名 from 表名 where 条件

修改数据：
  update 表名 set 列名 = 新列值 where 列名 = 旧列值

  update 表名 set 列名 = 新列值，列名2 = 新列值 where 列名 = 旧列值

删除数据
  Delete from 表 where 列名=列值
结果排序
  order by 1 排序第一个字段
  order by 字段名 排序写了字段名的这个字段
     默认升序 [asc]
     降序[desc]

分页
  limit n,m
     limit 从那里开始，取多少行数据
多行数据一起输出
     group_concat()
模糊查询：
  like %a%      查询包含a的所有值
  like a%      查询a开头的所有值
  like %a      查询a结尾的所有值

休眠函数
  sleep(2)      服务器进入摸鱼模式，故意拖2秒返回数据

查询当前所在库
  select database();
数学运算符号：
  \+ - * /
     他和PHP中没有啥区别

逻辑运算符：
  and   [满足两个条件才可以] 既要这样，又要那样
   or     [满足一个条件就可以] 这个或那个都行
联合查询： union  将两个查询语句的结果一起输出 [重复的不输出]
      union all 将两个查询语句的结果一起输出 [重复也输出]
  需要满足条件，相同列数

子查询：
  在原本的SQL语句中写小括号，优先执行一个查询语句
select*from ssg where password=(select uname from nf where id=1); => select *from ssg where password=10