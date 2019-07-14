## 项目介绍

### 目的
项目初衷是为了锻炼阅读源码，学习算法的能力。充实一下枯燥的代码生涯。本项目用于学习交流，并不是为了生产需要

### 项目参考
项目参考的是loadsh官网，文件的目录路径是根据官网API设计的

### 项目重要提示
本项目代码不能用作生产环境，仅供学习参考，欢迎学习交流，谢谢


- Array
    - chunk 将数组（array）拆分成多个 size 长度的区块 ![](/static/img/check.png)
	- compact 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。 ![](/static/img/check.png)
	- concat 创建一个新数组，将array与任何数组 或 值连接在一起。 (未实现)
	- difference 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。![](/static/img/check.png)
	- differenceBy 这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。![](/static/img/check.png)

