import { reactive, computed, watch } from 'vue'
import { translations } from './translations.js'

const langState = reactive({
  lang: typeof window !== 'undefined' ? localStorage.getItem("lang") || "pl" : "pl",
  get t() {
    return translations[this.lang]
  }
})

watch(
  () => langState.lang,
  (newLang) => {
    localStorage.setItem('lang', newLang)
  }
)

export default langState
