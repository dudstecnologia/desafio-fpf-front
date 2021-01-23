<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
    <b-navbar-brand to="/">Cadastro de Projetos</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">Projetos</b-nav-item>
            <b-nav-item to="/cadastro">Cadastro</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>
