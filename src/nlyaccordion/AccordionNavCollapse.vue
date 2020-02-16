<template>
  <collapse>
    <ul class="nly-blog-sider-menu menu-tree" v-show="show">
      <slot />
    </ul>
  </collapse>
</template>

<script>
import collapse from "./collapse.js";
export default {
  name: "AccordionNavCollapse",
  components: {
    collapse: collapse
  },
  data() {
    return {
      show: this.visible
    };
  },
  model: {
    prop: "visible",
    event: "input"
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    id: {
      type: [String, Number]
    }
  },
  created() {
    // var _this = this;

    this.show = this.visible;
    console.log("collapseStatus", this.show);

    this.$nextTick(function() {
      this.emitState();
    });
  },
  computed: {},
  methods: {
    emitState: function emitState() {
      this.$root.$emit("collapseStatus", this.show, this.id);
    }
  },
  mounted() {},
  watch: {
    visible: function(newval, oldval) {
      if (newval != oldval) {
        this.show = newval;
      }
    },
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  }
};
</script>
