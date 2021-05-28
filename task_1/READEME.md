#### 完成内容

1、下载并学习了git的部分操作

2、学会了GitHub的使用

3、安装了git，vs code，typora等软件

4、学习了Markdown语法

5、搭建了个人网站

#### git的一些操作

```
git init 
```

创建一个.git的子目录，该目录内含有初始化的仓库中所有的必须文件。

```
git add
```

向暂存区提交文件。

```
git commit -m"  "
```

将暂存区的文件提交到本地仓库中，“ ”内的内容为对提交内容的注释。

```
git clone 仓库地址
```

将远程仓库中克隆到本地仓库。

```
git status
```

查看文件状态

```
git config --global user.name""
git config --global user.email
```

设置用户名和邮件地址

```
git config --list
```

检查配置信息。

```
git push
```

将修改后的文件提交到远程仓库。

#### Markdown语法

##### 1.标题分级

'#'的个数表示标题的级数。一级标题 #一级，##二级标题，###三级....

##### 2.字体设置斜体、粗体、删除线

文字两端分别加一个‘*’表示倾斜。

 如：*啊哈哈*

文字两端分别加两个‘*’表示加粗。

如：**啊哈哈**

文字两端分别加三个‘*’表示倾斜并加粗

如：***啊哈哈***

文字两端分别加‘_'同样表示倾斜。

如：_啊哈哈_

文字两端分别加’~~'表示删除线

如：~~啊哈哈~~

##### 3.连接

###### 1.插入本地图片链接

![图片描述](图片路径)

![](D:\图片2\qq_pic_merged_1605445487235.jpg)示例：

![个人博客](D:\图片2\个人博客.png)

![](D:\图片2\GitHub.png)

![示例2](D:\图片2\git.png)

###### 2.插入互联网上的图片

![图片描述](网络图片路径)

###### 3.自动链接

只要是用<>包起来， Markdown 就会自动把它转成链接。

也可以直接写链接

https://2020210466.github.io/

##### 5.代码

```java
import java.util.Scanner;
public class Array {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        String str;
        System.out.println("请输入数据（每个数据用空格隔开）");
        str = in.nextLine();//输入字符串
        String[] arr  = str.split(" ");//用split方法跳过空格
        int[] score= new int[arr.length];
        int i,j;
        for(j = 0; j<score.length;j++)
        {
            score[j] = Integer.parseInt(arr[j]);//将字符串转化为整型
        }
        //从小到大排序
        for(i=1;i<score.length;i++)
        {
            for (j = 0; j < score.length; j++)
            {
                if(score[i]<score[j])
                {
                    int tempt=score[i];
                    score[i]=score[j];
                    score[j]=tempt;
                }
            }

        }
        for(i=0;i<score.length;i++)
            System.out.print(score[i]+"\t");//输出
    }
}
```

三个‘`'+语言+代码即可
