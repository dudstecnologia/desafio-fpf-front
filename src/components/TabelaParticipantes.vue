<template>
  <b-table small :fields="fields" :items="getParticipantes" responsive="sm" head-variant="light" fixed>
    <template #cell(id)="data">
      <b-button @click="alertaExclusao(data.item)" size="sm" variant="danger">Excluir</b-button>
      <span class="ml-3">{{ data.item.nome }}</span>
    </template>
  </b-table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

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
    ...mapMutations('participantes', [
      'deleteParticipante'
    ]),
    alertaExclusao (participante) {
      this.$swal.fire({
        title: 'Atenção',
        text: `Confirma a exclusão de "${participante.nome}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
      }).then((res) => {
        if (res.isConfirmed) {
          this.excluirParticipante(participante.id)
        }
      })
    },
    excluirParticipante (id) {
      this.$http.delete(`/participantes/${id}`)
        .then(() => {
          this.deleteParticipante(id)
          this.$swal.fire('Perfeito', 'Excluído com sucesso', 'success')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Ocorreu um erro ao excluir', 'error')
        })
    }
  },
  computed: {
    ...mapGetters('participantes', [
      'getParticipantes'
    ])
  }
}
</script>
