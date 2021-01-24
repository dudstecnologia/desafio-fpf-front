export default {
  methods: {
    validarFormProjeto () {
      if (!this.formValido) {
        this.$swal.fire({
          icon: 'error',
          title: 'Ops!',
          text: 'Todos os campos são obrigatórios'
        })
      }

      return this.formValido
    }
  },
  computed: {
    formValido () {
      let valido = true

      Object.keys(this.form).forEach((key) => {
        let type = typeof this.form[key]
        let value = this.form[key]

        if (key === 'valor') {
          let number = value.replace(/[^0-9.]+/, '')

          if (number <= 0 || number === '') {
            valido = false
          }
        }

        if (type === 'string' && value === '' || type === 'object' && value.length <= 0) {
          valido = false
        }
      })

      return valido
    }
  }
}