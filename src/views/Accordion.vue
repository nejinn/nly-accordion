<template>
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

    <NLY-accordionNavTree icon="nlyblog nly-blog-book" v-nly-accordion.zzz>
      一颗
    </NLY-accordionNavTree>
    <NLY-accordionNavCollapse id="zzz">
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        数据
      </NLY-accordionNavItem>
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        小白菜
      </NLY-accordionNavItem>
    </NLY-accordionNavCollapse>

    <NLY-accordionNavTree icon="nlyblog nly-blog-book" v-nly-accordion.ccc>
      测试
    </NLY-accordionNavTree>
    <NLY-accordionNavCollapse id="ccc">
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        黄色
      </NLY-accordionNavItem>
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        蓝色
      </NLY-accordionNavItem>
    </NLY-accordionNavCollapse>

    <NLY-accordionNavTree icon="nlyblog nly-blog-book" v-nly-accordion.ddd>
      大巴
    </NLY-accordionNavTree>
    <NLY-accordionNavCollapse id="ddd">
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        上车
      </NLY-accordionNavItem>
      <NLY-accordionNavItem icon="nlyblog nly-blog-home">
        不开车就下车
      </NLY-accordionNavItem>
    </NLY-accordionNavCollapse>
  </NLY-accordionNav>
</template>

<script>
export default {
  name: "accordion"
};
</script>

<style lang="less">
.flex-column {
  flex-direction: column !important;
}
.nly-blog-sider-nav {
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  list-style: none;

  .nly-blog-sider-menu {
    margin-top: 1rem;
    list-style: none;

    &.menu-tree {
      margin-top: 0;
      margin-left: 1rem;
    }

    .nly-blog-sider-menu-item {
      padding: 0 1rem 0 1rem;

      &.open {
        > .nly-blog-sider-menu-title {
          i.nly-blog-sider-menu-arrow {
            transform: translateY(-2px);
          }
          i.nly-blog-sider-menu-arrow::after {
            transform: rotate(-45deg) translateX(-2px);
          }
          i.nly-blog-sider-menu-arrow::before {
            transform: rotate(45deg) translateX(2px);
          }
        }
      }
    }

    .nly-blog-sider-menu-title:hover {
      color: #0fbcf9;
      transition: color 0.3s ease-in;

      .nly-blog-sider-menu-arrow::after {
        background-color: #0fbcf9;
      }
      .nly-blog-sider-menu-arrow::before {
        background-color: #0fbcf9;
      }
    }

    .nly-blog-sider-menu-title {
      // color: inherit;
      white-space: nowrap;
      cursor: pointer;
      display: block;
      color: #f97f51;
      position: relative;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      transition: color 0.3s ease-in;

      .nly-blog-sider-menu-icon {
        // font-size: 1.8rem;
        margin-right: 0.5rem;
        color: inherit;
        // vertical-align: -0.3rem;
      }

      p {
        display: inline-block;
        // font-size: 1.3rem;
        color: inherit;
      }

      .nly-blog-sider-menu-arrow {
        position: absolute;
        top: 50%;
        right: 16px;
        width: 10px;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .nly-blog-sider-menu-arrow::before {
        transform: rotate(-45deg) translateX(2px);
        position: absolute;
        width: 6px;
        height: 1.5px;
        background-color: #f97f51;
        border-radius: 2px;
        transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        content: "";
      }

      .nly-blog-sider-menu-arrow::after {
        transform: rotate(45deg) translateX(-2px);
        position: absolute;
        width: 6px;
        height: 1.5px;
        background-color: #f97f51;
        border-radius: 2px;
        transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        content: "";
      }
    }
  }
}
</style>
