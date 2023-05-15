const { createApp } = Vue;

createApp({
  data() {
    return {
      active__element: 0,
      contacts: [
        {
          id: 0,
          name: "John",
          contact__photo: "./img/avatar_1.jpg",
          messages: [],
        },
        {
          id: 1,
          name: "Albert",
          contact__photo: "./img/avatar_2.jpg",
          messages: [],
        },
        {
          id: 2,
          name: "Kokori",
          contact__photo: "./img/avatar_3.jpg",
          messages: [],
        },
      ],
      // chatt
      message__commit: "",
      message__push: "",
      //active chatt
      chat__active: "",
      chat__active__photo: "",
    };
  },
  methods: {
    returnIndex(event, i) {
      index = event.target.id;
      this.active__element = index;
      this.chat__active = this.contacts[index].name;
      this.chat__active__photo = this.contacts[index].contact__photo;
      console.log(index);
    },
    sendMsg(event, i) {
      this.message__push = this.message__commit;
      this.contacts[this.active__element].messages.push({
        content: this.message__push,
      });
      console.log(this.message__push);
    },
  },
}).mount("#app");
