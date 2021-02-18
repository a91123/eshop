import { ref, onMounted, onUnmounted } from 'vue'
// Ref類型可由 import vue 獲得
const UseClickOutside = (elementRef) => {
  const isClickOutside = ref(false)
  const handler = (e) => {
    if (elementRef) {
      if (elementRef.value.contains(e.target)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
export default UseClickOutside
