<template>
  <h1>Cadastro - {{ $route.params.id }}</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.getParticipantesApi()
  },
  methods: {
    ...mapActions('participantes', [
      'getParticipantesApi'
    ])
  }
}
</script>
