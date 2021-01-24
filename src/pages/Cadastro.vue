<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome do Projeto">
        <b-form-input v-model="form.nome" required></b-form-input>
      </b-form-group>

      <div class="row">
        <b-form-group class="col-md-6" label="Data de Início">
          <b-form-input v-model="form.data_inicio" required></b-form-input>
        </b-form-group>

        <b-form-group class="col-md-6" label="Data de Término">
          <b-form-input v-model="form.data_termino" required></b-form-input>
        </b-form-group>
      </div>

      <div class="row">
        <b-form-group class="col-md-6" label="Valor">
          <b-form-input v-model="form.valor" required></b-form-input>
        </b-form-group>

        <b-form-group class="col-md-6" label="Risco">
          <b-form-select v-model="form.risco" :options="riscos" required></b-form-select>
        </b-form-group>
      </div>

      <div>
        <div>
          <label class="mr-2">Participantes</label>
          <gerenciar-participantes />
        </div>

        <b-form-group>
          <v-select v-model="form.participantes" :options="getParticipantes" :reduce="p => p.id" label="nome" multiple>
            <template #search="{attributes, events}"><input class="vs__search" :required="true" v-bind="attributes" v-on="events" /></template>
          </v-select>
        </b-form-group>
      </div>

      <b-button class="mr-2" variant="success">Simular</b-button>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import GerenciarParticipantes from '../components/GerenciarParticipantes'
import { mapActions, mapGetters } from 'vuex'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    GerenciarParticipantes,
    vSelect
  },
  data () {
    return {
      form: {
        nome: '',
        data_inicio: '',
        data_termino: '',
        valor: '',
        risco: 0,
        participantes: []
      },
      riscos: [
        { value: 0, text: 'Baixo' },
        { value: 1, text: 'Médio' },
        { value: 2, text: 'Alto' }
      ]
    }
  },
  mounted () {
    this.getParticipantesApi()
  },
  methods: {
    ...mapActions('participantes', [
      'getParticipantesApi'
    ]),
    onSubmit () {
      alert('teste')
    }
  },
  computed: {
    ...mapGetters('participantes', [
      'getParticipantes'
    ])
  }
}
</script>
