<template>
  <div class="table-responsive">
    <b-table :fields="fields" :items="projetos" :busy="carregandoTabela" head-variant="light">
      <template #cell(id)="data">
        <b-button variant="primary" size="sm" :to="{ name: 'cadastro', params: { id: data.item.id } }">
          <i class="fa fa-edit"></i>
        </b-button>
        <b-button class="ml-1" variant="danger" size="sm" @click="alertaExclusao(data.item)">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
      <template #cell(risco)="data">
        <b-badge :variant="classRiscos[data.item.risco]">{{ textoRiscos[data.item.risco] }}</b-badge>
      </template>
      <template #table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Buscando projetos...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carregandoTabela: false,
      projetos: [],
      textoRiscos: ['Baixo', 'Médio', 'Alto'],
      classRiscos: ['success', 'warning', 'danger'],
      fields: [
        { key: 'id', label: 'Ação' },
        { key: 'nome', label: 'Nome' },
        { key: 'data_inicio', label: 'Data de Início' },
        { key: 'data_termino', label: 'Data de Término' },
        { key: 'valor', label: 'Valor' },
        'risco'
      ]
    }
  },
  mounted () {
    this.getProjetosApi()
  },
  methods: {
    getProjetosApi () {
      this.carregandoTabela = true
      this.$http.get('/projetos')
        .then(({ data }) => {
          this.projetos = data
        })
        .catch(() => {

        })
        .then(() => {
          this.carregandoTabela = false
        })
    },
    alertaExclusao (projeto) {
      this.$swal.fire({
        title: 'Atenção',
        text: `Confirma a exclusão de "${projeto.nome}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
      }).then((res) => {
        if (res.isConfirmed) {
          this.excluirProjeto(projeto.id)
        }
      })
    },
    excluirProjeto (id) {
      this.$http.delete(`/projetos/${id}`)
        .then(() => {
          this.projetos = this.projetos.filter((p) => p.id !== id)
          this.$swal.fire('Perfeito', 'Excluído com sucesso', 'success')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Ocorreu um erro ao excluir', 'error')
        })
    }
  }
}
</script>
