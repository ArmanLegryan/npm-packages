<template>
  <div class="d-flex align-items-center">
    <button
      class="btn btn-secondary me-2"
      :disabled="currentPage === 1"
      @click="$emit('previousPage')"
    >
      Previous
    </button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button
      class="btn btn-secondary ms-2"
      :disabled="currentPage === totalPages"
      @click="$emit('nextPage')"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

defineEmits(['previousPage', 'nextPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.pageSize))
</script>
