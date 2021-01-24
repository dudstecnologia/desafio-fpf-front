<template>
  <span>
      <b-button size="sm" variant="info" @click="modalState = !modalState">Gerenciar Participantes</b-button>

      <b-modal title="Gerenciar Participantes" v-model="modalState" size="lg" hide-footer>
        <b-form class="mb-3" @submit.prevent="onSubmit" inline>
          <b-form-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="Nome do Participante" v-model="form.nome" required></b-form-input>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </b-form>

        <tabela-participantes />
      </b-modal>
  </span>
</template>

<script>
import TabelaParticipantes from './TabelaParticipantes'
import { mapMutations } from 'vuex'

export default {
  name: 'GerenciarParticipantes',
  components: {
    TabelaParticipantes
  },
  data () {
    return {
      modalState: false,
      form: {
        nome: ''
      }
    }
  },
  methods: {
    ...mapMutations('participantes', [
      'addParticipante'
    ]),
    onSubmit () {
      this.$http.post('/participantes', this.form)
        .then(({ data }) => {
          this.addParticipante(data)
          this.form = ''
        })
        .catch(() => {

        })
    }
  }
}
</script>
