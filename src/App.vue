<template>
  <div class="container">
    <div
      class="d-flex justify-content-center flex-column align-items-center mx-auto pt-5 h-100 w-100 mb-4"
    >
      <div class="input-group mb-3">
        <AppInput v-model="packageName" @update:model-value="handleSearch" />

        <p v-if="isLoading">Loading...</p>
        <p v-else-if="error">{{ error }}</p>
        <p v-else-if="!showList">Nothing to show...</p>

        <ul v-else class="list-group w-100">
          <AppPackageItem
            v-for="pkg in paginatedPackages"
            :key="pkg.name"
            :package="pkg"
            @open-modal="handleInfo(pkg)"
          />
        </ul>
      </div>

      <AppPagination
        v-if="paginatedPackages.length && showList && !isLoading"
        :total-items="packages.length"
        :per-page="10"
        :page-size="10"
        :current-page="currentPage"
        @previous-page="previousPage"
        @next-page="nextPage"
      />
    </div>

    <AppModal :pkg="pkgInfo" :class="{ 'd-block': showPkgInfo }" @close="showPkgInfo = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useStore } from 'vuex'
import { usePagination } from './composables/pagination'
import AppModal from './components/AppModal.vue'
import AppInput from './components/AppInput.vue'
import AppPackageItem from './components/AppPackageItem.vue'
import AppPagination from './components/AppPagination.vue'

const store = useStore()
const { currentPage, itemsPerPage, previousPage, nextPage } = usePagination()

const packageName = ref('')

const showPkgInfo = ref(false)
const pkgInfo = ref([])

const isLoading = computed(() => store.state.isLoading)
const error = computed(() => store.state.error)
const packages = computed(() => store.getters.packages)

const paginatedPackages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return Array.from(packages.value).slice(start, end)
})

const showList = computed(() => {
  if (packages.value) {
    return packageName.value.length > 2
  }
  return false
})

const handleSearch = useDebounceFn(() => {
  if (packageName.value.length < 3) {
    store.commit('SET_PACKAGES', [])
    return
  }

  store.dispatch('searchPackage', packageName.value.trim().toLowerCase())
}, 300)

const handleInfo = (pkg) => {
  showPkgInfo.value = true
  pkgInfo.value = { ...pkg }
}
</script>

<style lang="scss" scoped>
.input-group {
  max-width: 700px;
}
</style>
