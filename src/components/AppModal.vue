<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ pkg.name }}</h2>
          <button type="button" class="btn btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <p v-if="pkg.author" class="fs-5">
            Author - <span class="fw-bold">{{ pkg.author.name }}</span>
          </p>
          <p v-if="pkg.description" class="mt-2 mb-2">{{ pkg.description }}</p>
          <div class="mb-2">
            <a
              v-if="pkg?.links?.homepage"
              :href="pkg?.links?.homepage"
              class="text-decoration-none me-2"
            >
              Homepage
            </a>
            <a v-if="pkg?.links?.npm" :href="pkg.links.npm" class="text-decoration-none me-2">
              NPM
            </a>
            <a
              v-if="pkg?.links?.repository"
              :href="pkg.links.repository"
              class="text-decoration-none"
            >
              Repository
            </a>
          </div>
          <small v-if="pkg.version" class="fs-small">Latest version: {{ pkg.version }}</small>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pkg: Object,
  showModal: Boolean
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.modal {
  background-color: #070707bd;

  &-title {
    text-overflow: ellipsis;
    display: block;
    min-width: 100px;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
