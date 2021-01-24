<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome do Projeto">
        <b-form-input v-model="form.nome" required></b-form-input>
      </b-form-group>

      <div class="row">
        <b-form-group class="col-md-2" label="Data de Início">
          <b-form-input v-mask="'##/##/####'" v-model="form.data_inicio" required></b-form-input>
        </b-form-group>

        <b-form-group class="col-md-2" label="Data de Término">
          <b-form-input v-mask="'##/##/####'" v-model="form.data_termino" required></b-form-input>
        </b-form-group>

        <b-form-group class="col-md-3" label="Valor">
          <b-form-input type="number" v-model="form.valor" required></b-form-input>
        </b-form-group>

        <b-form-group class="col-md-2" label="Risco">
          <b-form-select v-model="form.risco" :options="riscos" required></b-form-select>
        </b-form-group>

        <b-form-group class="col-md-2" label="Retorno (%)">
          <b-form-input type="number" v-model="retornoInvestimento" readonly></b-form-input>
        </b-form-group>
      </div>

      <b-form-group :label="form.participantes.length > 0 ? 'Participantes' : ''">
        <v-select v-model="form.participantes" :options="getParticipantes" :reduce="p => p.id" label="nome" placeholder="Selecione os participantes" multiple>
          <template #search="{attributes, events}"><input class="vs__search" :required="form.participantes.length == 0" v-bind="attributes" v-on="events" /></template>
        </v-select>
      </b-form-group>

      <b-form-group>
        <gerenciar-participantes />
      </b-form-group>

      <div class="text-right">
        <simulador-investimento :valor="form.valor" :risco="form.risco" @atualizar-retorno="atualizarRetorno" />
        <b-button class="ml-2" type="submit" variant="primary" :disabled="!formValido">Salvar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import GerenciarParticipantes from '../components/GerenciarParticipantes'
import SimuladorInvestimento from '../components/SimuladorInvestimento'
import { mapActions, mapGetters } from 'vuex'
import Validate from '../mixins/Validate'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    GerenciarParticipantes,
    SimuladorInvestimento,
    vSelect
  },
  mixins: [
    Validate
  ],
  data () {
    return {
      retornoInvestimento: 0,
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
    atualizarRetorno (v) {
      this.retornoInvestimento = v
    },
    onSubmit () {
      if (!this.validarFormProjeto()) {
        return
      }
      
      console.log('Passou')
    }
  },
  computed: {
    ...mapGetters('participantes', [
      'getParticipantes'
    ])
  }
}
</script>
