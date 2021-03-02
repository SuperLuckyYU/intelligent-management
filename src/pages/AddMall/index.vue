<template>
  <div class="draggable-wrapper">
    <a-tooltip>
      <template slot="title">
        添加元素
      </template>
      <a-icon
        class="add-btn"
        theme="twoTone"
        type="plus-circle"
        @click="handleAddclick" />
    </a-tooltip>
    <a-tooltip>
      <template slot="title">
        删除所选元素
      </template>
      <a-icon
        class="delete-btn"
        theme="twoTone"
        two-tone-color="#eb2f96"
        type="delete"
        @click="handleDeleteClick" />
    </a-tooltip>
    <vue-draggable-resizable
      class-name="draggable-item"
      :grid="[20,20]"
      :w="item.w"
      :h="item.h"
      :x="item.x"
      :y="item.y"
      :active="item.active"
      @dragging="onDrag(index, ...arguments)"
      @resizing="onResize(index, ...arguments)"
      @activated="onActivated(index)"
      @deactivated="onDeactivated(index)"
      v-for="(item, index) in layouts"
      :key="index" />
  </div>
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name: 'AddMall',
  components: {
    VueDraggableResizable,
  },
  data () {
    return {
      layouts: [
        {
          w: 100,
          h: 100,
          x: 0,
          y: 0,
          active: false,
        },
      ],
      currentActivedIndex: '',
    }
  },
  methods: {
    handleAddclick () {
      this.layouts.push({
        w: 100,
        h: 100,
        x: 0,
        y: -100 * this.layouts.length,
        active: true,
      })
    },
    handleDeleteClick () {
      this.layouts.splice(this.currentActivedIndex, 1)
    },
    onResize (i, x, y, w, h) {
      this.layouts[i].x = x
      this.layouts[i].y = y
      this.layouts[i].w = w
      this.layouts[i].h = h
    },
    onDrag (i, x, y) {
      this.layouts[i].x = x
      this.layouts[i].y = y
    },
    onActivated (i) {
      this.layouts[i].active = true
      this.currentActivedIndex = i
    },
    onDeactivated (i) {
      this.layouts[i].active = false
    },
  },
}
</script>

<style lang="scss">
  .draggable-wrapper {
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
    position: relative;
    overflow: hidden;
    .add-btn {
      position: absolute;
      top: 10px;
      right: 50px;
      cursor: pointer;
    }
    .delete-btn {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }
    .draggable-item {
      border: none;
      background-color: rgb(191, 191, 191) ;
      text-align: center;
    }
  }
</style>
