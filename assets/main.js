const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          id: 0,
          name: "John",
          contact__photo: "./img/avatar_1.jpg",
          messages: [
            {
              content: "",
            },
          ],
        },
        {
          id: 1,
          name: "Albert",
          contact__photo: "./img/avatar_2.jpg",
          messages: [
            {
              content: "",
            },
          ],
        },
      ],
      // chatt
      message__commit: "",
      message__push: "",
      message__history: [],
      //active chatt
      chat__active: "",
      chat__active__photo: "",
    };
  },
  methods: {
    debug(event) {
      const index = event.target.id;
      this.chat__active = this.contacts[index].name;
      this.chat__active__photo = this.contacts[index].contact__photo;
    },
    sendMsg(event) {
      this.message__push = this.message__commit;
      this.message__history.push({
        content: this.message__push,
      });
      console.log(this.message__history);
    },
  },
}).mount("#app");
