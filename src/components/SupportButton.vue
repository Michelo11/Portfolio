<template>
  <div
    :class="{
      'fixed rounded-2xl bottom-0 right-0 m-4 bg-[#235bdd] flex flex-col transition-all duration-100 delay-100 ease-in-out': true,
      'w-16 h-16 close': !open,
      'w-[20rem] h-[35rem] block open': open,
      'opacity-0': !loaded,
    }"
    v-on-click-outside="closeChat"
  >
    <button class="w-full m-auto" @click="openChat()">
      <font-awesome-icon v-if="!open" icon="message" class="text-2xl" />
    </button>
    <div
      v-if="!usernameSent && !secret && open"
      class="w-full h-full flex flex-col justify-center items-center"
    >
      <form class="w-11/12 mx-auto" @submit.prevent="setUsername()">
        <input
          type="text"
          class="bg-white text-black w-full p-2 rounded-xl"
          placeholder="Username"
          v-model="username"
        />
      </form>
    </div>
    <div
      v-if="(usernameSent || secret) && open"
      class="w-full h-full flex flex-col"
    >
      <div class="ml-auto block p-4">
        <font-awesome-icon
          icon="circle-xmark"
          class="text-4xl cursor-pointer"
          @click="closeChat()"
        />
      </div>

      <div class="w-full overflow-auto h-full">
        <p
          v-for="(message, i) in messages"
          :key="message.id"
          :class="{
            'text-right': message.bot,
            'text-left': !message.bot,
            'text-center': i === 0,
          }"
        >
          {{ message.content }}
        </p>
      </div>

      <form class="w-11/12 mx-auto mt-auto m-3" @submit.prevent="submit()">
        <input
          type="text"
          class="bg-white text-black w-full p-2 rounded-xl"
          placeholder="Text"
          v-model="text"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { vOnClickOutside } from '@vueuse/components'

export default {
  data() {
    return {
      open: false,
      loaded: false,
      text: "",
      username: null,
      usernameSent: false,
      secret: null,
      messages: [],
    };
  },
  directives: {
    onClickOutside: vOnClickOutside,
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 300);

    this.secret = localStorage.getItem("secret");
    if (this.secret) {
      this.fetchMessages();

      setInterval(() => {
        this.fetchMessages();
      }, 5000);
    }
  },
  methods: {
    openChat() {
      this.open = true;
    },
    closeChat() {
      this.open = false;
    },
    submit() {
      if (!this.text) return;

      if (this.secret) {
        axios
          .post("http://localhost:8000/messages?secret=" + this.secret, {
            text: this.text,
          })
          .then(() => {
            this.fetchMessages();
          });
      } else {
        axios
          .post("http://localhost:8000/new", {
            username: this.username,
            text: this.text,
          })
          .then((res) => {
            this.secret = res.data.secret;
            localStorage.setItem("secret", this.secret);
            this.fetchMessages();
          });
      }

      this.text = "";
    },
    fetchMessages() {
      axios
        .get("http://localhost:8000/messages?secret=" + this.secret)
        .then((res) => {
          this.messages = res.data.reverse();
        })
        .catch(() => {
          this.secret = null;
          localStorage.removeItem("secret");
        });
    },
    setUsername() {
      this.usernameSent = true;
    },
  },
};
</script>

<style scoped>
@keyframes open {
  0% {
    width: 4rem;
    height: 4rem;
  }
  100% {
    width: 20rem;
    height: 35rem;
  }
}

@keyframes close {
  0% {
    width: 20rem;
    height: 35rem;
  }
  100% {
    width: 4rem;
    height: 4rem;
  }
}

.close {
  animation: close 0.5s;
}

.open {
  animation: open 0.5s;
}
</style>
