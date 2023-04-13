<template>
  <input
    :value="modelValue"
    type="text"
    class="form-control w-100 py-2 px-4 mb-5 rounded-2"
    placeholder="Search for NPM packages"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])
</script>
