<template>
  <div>
    <NavBar />

    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
