<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';
export default {
    name: 'ProjectList',
    components: {
        AppProject,
    },
    data() {
        return {
            projects: '',
            urlAddress: 'http://127.0.0.1:8000/api/projects',
        }
    },

    methods: {
        getProjects() {
            axios.get(this.urlAddress, {
                params: {
                }
            })
                .then((response) => {
                    this.projects = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error);
                });
        }
    },

    created() {
        this.getProjects();
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <AppProject v-for="project in projects" :project="project" />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>