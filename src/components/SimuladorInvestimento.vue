<template>
  <span>
    <b-button type="button" variant="success" @click="modalState = !modalState" :disabled="valor <= 0">Simular Investimento</b-button>

    <b-modal title="Simulador de Investimento" v-model="modalState" hide-footer>
      <b-form class="mb-3" @submit.prevent="onSubmit" inline>
        <b-form-input type="number" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Investimento" v-model="investimento" required></b-form-input>
        <b-button type="submit" variant="primary" :disabled="investimento <= 0">Calcular</b-button>
      </b-form>
    </b-modal>
  </span>
  
</template>

<script>
export default {
  name: 'SimuladorInvestimento',
  props: ['valor', 'risco'],
  data () {
    return {
      modalState: false,
      investimento: '',
      resultado: 0
    }
  },
  methods: {
    onSubmit () {
      let validate = true

      let riscos = [
        { r: 0, p: 5, t: 'baixo'},
        { r: 1, p: 10, t: 'mediano' },
        { r: 2, p: 20, t: 'alto' }
      ]

      if (parseInt(this.investimento) > parseInt(this.valor)) {
        validate = false
        this.$swal.fire('Ops!', 'O Valor do investimento não pode ser maior que o valor do projeto', 'error')
      }

      let retornoInvestimento = ((parseInt(this.valor) - parseInt(this.investimento)) / parseInt(this.investimento)) * 100

      riscos.forEach((ri) => {
        if (this.risco == ri.r && retornoInvestimento < ri.p) {
          validate = false
          this.$swal.fire('Ops!', `No risco ${ri.t}, o retorno deve ser de ${ri.p}% do valor do investimento.`, 'error')
        }
      })

      if (validate) {
        this.$emit('atualizar-retorno', Math.trunc(retornoInvestimento))

        this.investimento = ''
        this.modalState = false
      }
    }
  }
}
</script>
