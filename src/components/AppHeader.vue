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
            <ul class="m-0 p-0">
                <li class="m-0 p-0" :class="this.$route.name === 'home' ? 'attivo' : ''">
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li class="m-0 p-0" :class="this.$route.name === 'about' ? 'attivo' : ''">
                    <router-link :to="{ name: 'about' }">
                        About
                    </router-link>
                </li>
                <li class="m-0 p-0" :class="this.$route.name === 'projects' ? 'attivo' : ''">
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
            width: calc(100% / 3);
            text-align: center;

            a {
                color: black;
                text-decoration: none;
            }

            a:hover {
                color: green;
                font-weight: 700;
            }
        }
    }
}

.attivo {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}
</style>