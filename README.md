## 使用方法

![Alt text](./images/info.png)


1.  请先确保已经安装Gulp(需要 Node.js 环境) ，建议采用下面的代码全局安装

		$ npm install --global gulp 

2. 进入你的项目文件夹下`clone` 本 git 项目

		$ git clone https://github.com/Jeff2Ma/JGulp.git

   `clone` 后建议删除残留的`.git` 缓存文件夹，方便添加自己的Git 版本信息管理：
   
  		$ rm -rf .git  
		
3. 安装相关Node 模块

	在项目文件夹目录下通过下面命令安装相关Node 模块

		npm install 

4. 按照个人的项目需求，重命名`JGulp` 文件夹为你自己的项目英文名称，填写`Project.md `文件（`Project.md`文件在项目最终打包的时候会自动重命名为`README.md`保存在`build` 文件夹），填写`package.json` 文件的项目名称部分。如果需要进一步的个性化，可以编辑`gulpfile.js` 文件。

5. 进行相关配置（如果有需要用到相关功能）：为了安全，将重要的配置信息保存到项目目录下的一个json 文件中，名为 `config.json`，该文件示例代码如下：

		{
			"project" : "Gulp", 	
			"localserver" : {
    			"host" : "localhost",
    			"port" : "8081"
  			},
 			"tinypngapi": "Tinypng API KEY",
 			"sftp" : {
    			"host" : "8.8.8.8",
    			"user" : "username",
   				"port" : "22",
    			"key" : "~/.ssh/sdfsfdsf",
    			"remotePath" :"/"
 			}
		}   
相关内容（项目别名、本地服务器域名+端口、[Tinypng API KEY](https://tinypng.com/developers)、ftp相关信息）请自行配置，为保证安全，`config.json`文件已经添加到`.gitignore `文件中。
		
6. 然后捏，就基本上可以的了，默认任务：

		$ gulp
	
7. 如果项目已经完成，可以通过`build` 命令进行项目相关文件收集，项目文件最终会汇集到项目目录下的`build` 文件夹中方面进一步操作

		$ gulp build

	如果需要调用Tinypng 的图片压缩，那么命令需改为：

		$ gulp build2

8. 打包`build` 文件夹下的项目文件，会自动生成`项目别名-xxxx.zip` 的文件（`xxxx` 为打包时候的时间）供交付使用或进行下一阶段的开发

		$ gulp zip
		
9. 如果要上传到远程服务器进行线上调试，可以通过该命令自动上传（需提前在 `config.json`做好配置 ）：

		$ gulp upload 