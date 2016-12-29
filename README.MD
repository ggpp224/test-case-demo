# 单元测试

## 测试方法

### TDD
1. 在测试的辅助下， 实现功能
2. 在测试的辅助下， 重构，提高质量

    测试驱动着整个开发过程：首先，驱动代码的设计和功能的实现；其后，驱动代码的再设计和重构。
### 问题
* 开发者可能只完成满足了测试的代码，而忽略了对实际需求的实现
* 对于GUI,资料库和Web应用而言。构造单元测试比较困难，如果强行构造单元测试，反而给维护带来额外的工作量
    
### BDD
强调开发人员和非开发人员之间相互协作，用自然语言书写测试用例。 用自然语言描述代码的目的，让开发者把精力集中在代码应该怎么写，而不是技术细节上。



## web 前端测试框架
* 浏览器/node
* [qunit](http://qunitjs.com/)
* [jasmine](https://jasmine.github.io/edge/introduction)
* [mocha](https://mochajs.org/)

React:
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html)
* [enzyme](http://airbnb.io/enzyme/)

断言库：
* [should](https://github.com/tj/should.js)
* [assert](https://github.com/power-assert-js/power-assert])
* [expect](https://github.com/mjackson/expect)


## 覆盖率统计
* [istanbul](https://github.com/gotwarlost/istanbul)

ES6:
* [isparta](https://github.com/douglasduteil/isparta)
* [babel-istanbul](https://github.com/douglasduteil/istanbul-babel)


## 目的
* 找出bug ？
* 需求理解
* 需求追踪
* 提高代码质量
* 重构保证

## 开始书写单元测试
两个问题
### 测什么 ？
* 测关键点
* 覆盖率
* 逻辑、业务、ui
* 主观 和 量化

### 如何测 ？
* 代码可能性
* mock
* 手段
* UI
* 逻辑和业务



