import { ref } from 'vue'

export const usePagination = () => {
  const currentPage = ref(1)
  const itemsPerPage = 10

  function previousPage() {
    currentPage.value--
  }

  function nextPage() {
    currentPage.value++
  }

  return {
    currentPage,
    itemsPerPage,
    previousPage,
    nextPage
  }
}
