<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  name: "app",
  components: {
    AppHeader,
  },
}
</script>