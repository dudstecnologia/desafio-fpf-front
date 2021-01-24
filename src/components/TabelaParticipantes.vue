<template>
  <b-table small :fields="fields" :items="getParticipantes" responsive="sm" head-variant="light" fixed>
    <template #cell(id)="data">
      <b-button @click="excluirParticipante(data.item.id)" size="sm" variant="danger">Excluir</b-button>
      <span class="ml-3">{{ data.item.nome }}</span>
    </template>
  </b-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TabelaParticipantes',
  data () {
    return {
      fields: [
        { key: 'id', label: 'Cadastrados' }
      ]
    }
  },
  methods: {
    excluirParticipante (id) {
      alert(id)
    }
  },
  computed: {
    ...mapGetters('participantes', [
      'getParticipantes'
    ])
  }
}
</script>
