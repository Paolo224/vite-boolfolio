<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',

    data() {
        return {
            store,
        }
    },

    methods: {

    },

    created() {

    },

}
</script>

<template>
    <header class="container">
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects' }">
                        Projects
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    padding: 1rem;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-around;

        li {
            list-style-type: none;
        }
    }
}
</style>