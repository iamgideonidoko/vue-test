const app = Vue.createApp({
    // template: `<h2>I am a template</h2>`
    data() {
        return {
            title: 'God',
            showBooks: false,
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title;
            this.showBooks = true;
        }
    },
    computed: {
        getName() {
            return 'name';
        }
    }
});

app.mount('#app');