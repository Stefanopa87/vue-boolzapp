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

            searchText: "",

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

                // questo array vuoto ci aiuta a far ciclare su tutti i nomi anche se non 
                // è stata avviata una ricerca, questo perchè ogni stringa contiene una stringa
                // vuota (deciso di default) quindi anche se array è vuoto e search è vuoto
                // il risultato di .includes() è sempre vero e quindi tutti i
                // nomi sono visibili
                const resContacts = [];
                for (let i = 0; i < this.contacts.length; i++) {

                    const contact = this.contacts[i];

                    const name = contact['name'];

                    if (name.toLowerCase()
                        .includes(this.searchText.toLowerCase())) {

                        resContacts.push(contact);
                    }
                }
                return resContacts;
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

                    var min = 0;
                    var max = 5;
                    var random = Math.floor(Math.random() * (max - min + 1)) + min;

                    var msg = ['puoi scrivere cose sensate?',
                        'certo come no, vai avanti tu..',
                        'la penso come te..',
                        'sicurmente è come dici..',
                        'ci pensiamo domani?',
                        'la vedo difficile ma ci proviamo..'];

                    let message = {

                        date: this.getTime(),
                        text: msg[random],
                        status: 'received'
                    }

                    trueContact.push(message);
                }, 1000);
            },
        },

        // questa serve per far stare lo scroll sembre lato bottom
        updated() {
            let container = this.$el.querySelector("#scrollBottom");
            container.scrollTop = container.scrollHeight;
        },
    });
}


document.addEventListener('DOMContentLoaded', init);