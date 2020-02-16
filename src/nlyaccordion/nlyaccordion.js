import Vue from "vue";

/**
 * 差集函数
 */
function getDifference(allCollapseId, idKeys) {
  let mixArray = [];
  allCollapseId.forEach(item => {
    if (idKeys.indexOf(item) == -1) {
      mixArray.push(item);
    }
  });
  return mixArray;
}

Vue.directive("nly-accordion", function(el, binding, vnode) {
  /**
   * 初始化指令时监控collapseStatus事件,collapseStatus事件由NLY-accordionNavCollapse组件发出,有2个参数,
   * 一个是NLY-accordionNavCollapse事件props参数id,
   * 一个是NLY-accordionNavCollapse折叠状态show
   * function(a,b)中a是show,b是id
   */
  vnode.context.$root.$on("collapseStatus", function(a, b) {
    // 将所有提交collapseStatus事件的NLY-accordionNavCollapse组件的id放入allCollapseId
    if (allCollapseId.indexOf(b) == -1) {
      allCollapseId.push(b);
    }

    /**
     * 获取当前指令的modifiers,如果当前指令的modifiers中包含提交collapseStatus事件的NLY-accordionNavCollapse组件的id
     * 则初始化挂载指令的组件或者element的class，且修改当前指令modifiers为对应的show值
     * 对应的初始化show为true,则在当前挂载指令的element的class中添加open
     * 对应的初始化show为false,则在当前挂载指令的element的class中移除open
     */
    let idKeys = Object.keys(binding.modifiers);
    if (idKeys.indexOf(b) != -1) {
      binding.modifiers[String(b)] = a;
      if (a) {
        el.classList.add("open");
      } else {
        el.classList.remove("open");
      }
    }
  });

  /**
   * 新建一个array储存组件NLY-accordionNavCollapse的id
   * 注意会先执行这里的代码再执行上面的代码。
   */
  let allCollapseId = [];

  /**
   * 点击事件
   */
  el.onclick = function() {
    // 获取指令的modifiers
    let idKeys = Object.keys(binding.modifiers);
    // 求出modifiers和储存所有id的数组的差集
    let mixArray = getDifference(allCollapseId, idKeys);

    /**
     * 循环当前指令的modifiers,并循环当前挂载指令实例的父组件的所有子组件
     * 以组件的id找出指令对应的组件,执行对应的展开折叠动作
     */
    idKeys.forEach(idKeysItem => {
      vnode.componentInstance.$parent.$children.forEach(childrenItem => {
        if (childrenItem.id == idKeysItem) {
          if (binding.modifiers[idKeysItem]) {
            childrenItem.show = false;
            el.classList.remove("open");
          } else {
            childrenItem.show = true;
            el.classList.add("open");
          }
        }
      });
    });
    /**
     * 判断当前指令的modifiers是否有对应的NLY-accordionNavCollapse组件
     * 如果有就执行关闭其他NLY-accordionNavCollapse组件的动作,如果没有,就不进行操作
     */
    idKeys.forEach(idKeysItem => {
      if (allCollapseId.indexOf(idKeysItem) != -1) {
        mixArray.forEach(mixArrayItem => {
          vnode.componentInstance.$parent.$children.forEach(childrenItem => {
            if (childrenItem.id == mixArrayItem) {
              childrenItem.show = false;
              el.classList.remove("open");
            }
          });
        });
      }
    });
  };
});
