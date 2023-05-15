const { createApp } = Vue;

createApp({
  data() {
    return {
      // style bind
      hover: "item__container--hover",
      searchBox: "",
      // chatt
      message__commit: "",
      message__push: "",
      //active chatt
      chat__active: "",
      chat__active__photo: "",
      //CSS Classes
      d_none: "",

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
        {
          id: 3,
          name: "Bruno",
          contact__photo: "./img/avatar_4.jpg",
          messages: [],
        },
      ],
    };
  },
  methods: {
    highLightItem(event) {
      console.log("hight");
      event.target.classList.add = "item__container--hover";
      console.log(event.target);
    },
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
      this.message__commit = null;
      console.log(this.message__push);
    },
  },
  computed: {
    filteredList() {
      return this.contacts.filter((contacts) => {
        return (
          contacts.name.toLowerCase().indexOf(this.searchBox.toLowerCase()) !=
          -1
        );
      });
    },
  },
}).mount("#app");
