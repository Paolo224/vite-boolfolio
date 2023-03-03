<script>
export default {
  name: 'AppProject',

  props: {
    'project': {
      type: Object,
      required: true
    }
  },

  data() {
    return {

    }
  },
};

</script>

<template>
  <div class="col-4 d-flex align-items-stretch">
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">{{ project.Nome_progetto }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ project.Descrizione_progetto }}</h6>
        <p class="card-text">{{ project.Data_inizio_progetto }}</p>
        <p class="card-text">{{ project.Data_fine_progetto }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
