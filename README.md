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
	- concat 创建一个新数组，将array与任何数组 或 值连接在一起。 (未实现 数组扁平化实现方式)
	- difference 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。![](/static/img/check.png)
	- differenceBy 这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。![](/static/img/check.png)
	- differenceWith 这个方法类似 _.difference，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个(arrVal, othVal)。这个方法会返回一个新数组。(未实现)
	- drop 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）![](/static/img/check.png)
	- dropRight 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
	- dropRightWhile 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
	- dropWhile 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
	- dropRightWhile 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
	- fill 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
	- findIndex 该方法类似 _.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
	- findLastIndex 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。
	- head 获取数组 array 的第一个元素。
	- indexOf 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
	- initial 获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。
	- intersection 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）
	- intersectionBy 这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
	- intersectionWith 这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。
	- join 将 array 中的所有元素转换为由 separator 分隔的字符串。
	- last 获取array中的最后一个元素。


### 结尾
- 少年负壮气 奋烈自有时
- 壮士何慷慨 志向欲八方
- 将军陷阵志 有死而无生 (赴死之日 就在今天) 德玛西亚皇子
- 百战疲劳壮士哀
- 山河不足重 重在遇知己
- 金戈铁马定江山
- 复仇千里如咫尺
- 两度冲阵容救危主
- 受命于败军之际 奉命于危难之间
- 山高水远 后会有期
