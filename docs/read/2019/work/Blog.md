# 阅读博客所得

- 关于JS作用域
  JS内部有一个全局作用域，其他的作用域被方法切割或被块`{}`切割（es6）
  用`var`声明的变量会挂在到全局作用域，`const` `let`则不然
  示例
  ```js
    <script>
      const bar = 1;
      var foo = 2;
    </script>
    <script>
      console.log(window.bar) // undefined
      console.log(window.foo) // 2
    </script>
  ```