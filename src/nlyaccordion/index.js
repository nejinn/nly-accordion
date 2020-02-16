import AccordionNav from "./AccordionNav.vue";
import AccordionNavItem from "./AccordionNavItem.vue";
import AccordionNavTree from "./AccordionNavTree.vue";
import AccordionNavCollapse from "./AccordionNavCollapse.vue";

export default {
  install: Vue => {
    Vue.component("NLY-accordionNav", AccordionNav);
    Vue.component("NLY-accordionNavItem", AccordionNavItem);
    Vue.component("NLY-accordionNavTree", AccordionNavTree);
    Vue.component("NLY-accordionNavCollapse", AccordionNavCollapse);
  }
};
