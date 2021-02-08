/* Genera 10 mail tramite api e
stampale in una lista */

var app = new Vue({
    el: '#app',
    data: {
        emails: []
    },
    mounted() {
        //Ciclo per richiamare 10 volte
        for (let i = 0; i < 10; i++){

            //Chiamata API e-mail random e push in array
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( result => {
                    this.emails.push(result.data.response)
                });
        }
    }
});