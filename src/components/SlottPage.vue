<template>
  <div>
    <p>Mình tên là <slot name="name" v-bind="{ row: 'row', $index: 1 }"></slot></p>
    <p>test</p>
    <slot v-bind="{ name1: 'Huyền', age: 12 }"></slot>
    <slot name="icon"> + </slot>
    <button>
      <slot name="content">hi</slot>
    </button>
  </div>
</template>