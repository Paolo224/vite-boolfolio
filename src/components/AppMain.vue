<script>
import { store } from '../store.js';
export default {
  name: 'AppMain',

  data() {
    return {
      store,
    }
  },

  methods: {

  },

  created() {

  },
};

</script>

<template>
  <main class="container p-3">
    <div class="row">
      <div class="col-12" v-for="project in store.projects">
        <div class="card mb-2">
          <div class="card-body">
            <h5 class="card-title">{{ project.Nome_progetto }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ project.Descrizione_progetto }}</h6>
            <p class="card-text">{{ project.Data_inizio_progetto }}</p>
            <p class="card-text">{{ project.Data_fine_progetto }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
