<template>
  <li class="list-group-item py-3 px-4" @click="$emit('openModal')">
    <p class="fw-bold mb-0 fs-5 title">{{ package.name }}</p>
    <p v-if="package.description" class="mt-2 mb-0 title">{{ package.description }}</p>
  </li>
</template>

<script setup>
defineProps({
  package: {
    type: Object,
    required: true
  }
})

defineEmits(['openModal'])
</script>

<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
  transition: all 0.4s ease;

  .title {
    text-overflow: ellipsis;
    display: block;
    min-width: 100px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background-color: #ececec;
  }
}
</style>
