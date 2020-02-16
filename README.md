# nly-accordion

>支持初始化撑开多个折叠版,点击任意一个之后会将其他撑开的都关闭。
>初始撑开为props 参数visible=true
>后续会更新支持多个不同手风琴，支持开启手风琴模式

* ####先看效果：

![效果图](https://upload-images.jianshu.io/upload_images/9915084-a04496d16d1d1049.gif?imageMogr2/auto-orient/strip)


> * 支持初始化撑开多个折叠版,点击任意一个之后会将其他撑开的都关闭。
> * 初始撑开为props 参数visible=true
> * 后续会更新支持多个不同手风琴，支持开启手风琴模式

# 结构
- * ######边侧导航栏结构

```html
<!-- 由于本身是封装的一个边侧导航栏,所有组件中有
NLY-accordionNav
NLY-accordionNavItem
NLY-accordionNavTree
 -->
<NLY-accordionNav>
  <NLY-accordionNavItem icon="nlyblog nly-blog-home">
    Nejinn
  </NLY-accordionNavItem>
  <NLY-accordionNavTree icon="nlyblog nly-blog-book" v-nly-accordion.sss>
    Nejinn
  </NLY-accordionNavTree>
  <NLY-accordionNavCollapse id="sss" visible>
    <NLY-accordionNavItem icon="nlyblog nly-blog-home">
      lerity
    </NLY-accordionNavItem>
    <NLY-accordionNavItem icon="nlyblog nly-blog-home">
      blog
    </NLY-accordionNavItem>
  </NLY-accordionNavCollapse>
</NLY-accordionNav>
```

- * ###### 只有手风琴折叠版的结构

```html
<任意元素 v-nly-accordion.collapseId>
</任意元素元素>
<NLY-accordionNavCollapse id='collapseId'>
    ...嵌套元素,随意插入
</NLY-accordionNavCollapse>

demo:
<div v-nly-accordion.collapse1>点击我收起或展开 collapse1</div>
<NLY-accordionNavCollapse id='collapse1'>
  <a>我是折叠版中的元素</a>
</NLY-accordionNavCollapse>

<div v-nly-accordion.collapse2>点击我收起或展开collapse2</div>
<NLY-accordionNavCollapse id='collapse2'>
  <a>我是折叠版中的元素</a>
</NLY-accordionNavCollapse>
使用这种结构的时候,请注意自己写css。可以在accordion.vue中修改就行。
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
