function init() {
    new Vue({
        el: '#app',
        data: {
            profile: {
                name: 'Stefano',
                avatar: 'profilo.png',
            },

            contacts: [{
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Ilaria',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            selectedContact: "",

            newMsg: "",
        },

        methods: {

            getTime: function () {

                var now = new Date();
                var nowStr = now.getDate() + '/' +
                    now.getMonth() + '/' +
                    now.getFullYear() + ' ' +
                    now.getHours() + ':' +
                    now.getMinutes() + ':' +
                    now.getSeconds();

                return nowStr
            },

            searchName: function () {

                console.log('ciao');
            },

            showMsg: function (contact) {

                this.selectedContact = "";

                this.selectedContact = contact;
            },

            writeMsg: function () {

                if (this.newMsg.length > 0) {

                    let message = {

                        date: this.getTime(),
                        text: this.newMsg,
                        status: 'sent'

                    }

                    this.selectedContact.messages.push(message);

                }
                this.newMsg = '';
                
                this.autoReply();                
            },
            
            autoReply: function () {

                // dichiaro una var che mi seleziona il contatto prima che parte 
                // il setTimeout in quanto cosi anche se cambio contatto 
                // il push verrà fatto sempre dentro la chat giusta.

                var trueContact = this.selectedContact.messages
                
                setTimeout(() => {
                    let message = {
                        
                        date: this.getTime(),
                        text: 'ciao',
                        status: 'received'
                        
                    }
                    
                    trueContact.push(message);                    
                }, 2000);           
            },




        },

        updated() {
            let container = this.$el.querySelector("#scrollBottom");
            container.scrollTop = container.scrollHeight;
        },
    });
}


document.addEventListener('DOMContentLoaded', init);