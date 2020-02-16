<template>
  <li class="nly-blog-sider-menu-item">
    <a class="nly-blog-sider-menu-title">
      <i :class="iconClass" v-if="icon"> </i>
      <p>
        <slot />
      </p>
      <i class="nly-blog-sider-menu-arrow"> </i>
    </a>
  </li>
</template>

<script>
export default {
  name: "AccordionNavTree",
  props: {
    icon: {
      type: String
    }
  },
  computed: {
    iconClass: function() {
      return ["nly-blog-sider-menu-icon", this.icon];
    }
  }
};
</script>
