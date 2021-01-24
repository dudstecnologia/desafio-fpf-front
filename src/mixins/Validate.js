export default {
  methods: {
    validarFormProjeto () {
      let valido = true
      let msg = ''

      Object.keys(this.form).forEach((key) => {
        let type = typeof this.form[key]
        let value = this.form[key]

        if (key === 'valor') {
          let number = value.replace(/[^0-9.]+/, '')

          if (number <= 0 || number === '') {
            valido = false
            msg = 'Informe um valor válido'
          }
        }

        if (type === 'string' && value === '' || type === 'object' && value.length <= 0) {
          valido = false
          msg = 'Todos os campos são obrigatórios'
        }
      })

      if (!valido) {
        this.$swal.fire({
          icon: 'error',
          title: 'Ops!',
          html: msg
        })
      }

      return valido
    }
  }
}