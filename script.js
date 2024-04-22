const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/9.jpg'
        }
    },
    methods: {
        getRandUser(){
            // console.log(this.firstName);
            this.firstName = 'Jane',
            this.lastName = 'Dane',
            this.email = 'jane@gmail.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/5.jpg'
        }
    } 
})

app.mount('#app')