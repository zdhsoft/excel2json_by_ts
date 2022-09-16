# excel2json_by_ts
- readme更新中,未完成，准备集成yargs实现命令行功能。
- 基于typescript的实现的excel2json工具
- 这个项目的目录：https://github.com/zdhsoft/excel2json_by_ts  

- 2010年的时候，我用python写了一个, 用了好些年。https://github.com/zdhsoft/excel2json 已经放弃了，现在全面使用这个版本了
- 2022年用typescript重写了一下，简化很多 https://github.com/zdhsoft/excel2json_by_ts
- 写的很匆忙，代码有点乱，注释比较少

## 使用说明
- 这个版本，会遍历指定目录下的所有excel文件
### 程序参数
```
excel2json --dir <存放配置的目录>
```
## 示例说明 
- 文件说明

|文件或目录|说明|
|:----|:----|
|test/sample.xlsx|是测试的配置excel例子|
|out|目录是生成后的目录|
|test.bat|是生成脚本。|
|excel2json.exe|是用pkg生成的, 可以直接使用。具体参考：https://zdhsoft.blog.csdn.net/article/details/124490289|

- 生成的例子1
```json
{
    "describe": "样例表-服务端",
    "sheetName": "样例表",
    "list":[
        {"id":10001,"name":"字符串名称1","is_student":true,"amount":98.99,"code_list":[1,2,3,4,5],"labels":["工程类","weman"],"ext":{"a":100,"b":"this is b"}},
        {"id":10002,"name":"字符串名称2","is_student":false,"amount":12345.01,"code_list":[6,7,8,9,10],"labels":["工程类","男"],"ext":{}},
        {"id":10003,"name":"字符串名称3","is_student":true,"amount":33,"code_list":[11,12],"labels":["人类","女"],"ext":{}}
    ]
}

```
- 生成的例子2
```json 
{
    "describe": "样例表-服务端",
    "sheetName": "sample",
    "list":[
        {"id":20001,"name":"name1👌","is_student":true,"amount":98.99,"code_list":[1,2,3,4,5],"labels":["工程类","weman🤦‍♂️"],"ext":{"a":100,"b":"this is b"}},
        {"id":20002,"name":"name2","is_student":false,"amount":12345.01,"code_list":[6,7,8,9,10],"labels":["工程类","男🤦‍♀️"],"ext":{}},
        {"id":20003,"name":"name3","is_student":true,"amount":33,"code_list":[11,12],"labels":["人类","女"],"ext":[1,2,3,4]}
    ]
}

```

## 数据类型
- 详见代码里的constant.ts中的EnumDataType定义
基本类型有：any,bool,int,number,string,object，同时还支持对应的数组类型array:any,array:bool,array:int,array:number,array:string,array:object
## 发布记录
### 1.0.0 
- 完成1.0版 
