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
      <div class="ml-auto block p-4">
        <font-awesome-icon
          icon="circle-xmark"
          class="text-4xl cursor-pointer"
          @click="closeChat()"
        />
      </div>
      <form
        class="w-11/12 h-full flex flex-col m-10 items-center"
        @submit.prevent="setUsername()"
      >
        <p class="text-left text-3xl font-extrabold">
          Welcome to the support chat
        </p>
        <input
          type="text"
          class="text-white w-full p-2 rounded mt-4 bg-[#1c1c27] border-[#1c1c27]"
          placeholder="Username*"
          v-model="username"
          required
        />
        <button
          type="submit"
          class="text-black w-full p-2 rounded mt-2 font-semibold bg-white border-[#1c1c27]"
        >
          Submit
        </button>
        <p class="mt-3">
          *Insert your username to let us identify you. This can be invented.
        </p>
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

      <div class="w-full overflow-auto h-full" ref="messages">
        <p class="text-left bg-[#1c1c27] ml-3 mr-3 p-2 rounded">
          Welcome to the support chat! Please wait for a response.
        </p>

        <p
          v-for="(message, i) in messages"
          :key="message.id"
          :class="{
            'bg-[#1c1c27] w-fit p-2 rounded mt-3': true,
            'ml-auto mr-3': message.bot,
            'mr-auto ml-3': !message.bot,
          }"
        >
          {{ message.content }}
        </p>
      </div>

      <form class="w-11/12 mx-auto mt-auto m-3" @submit.prevent="submit()">
        <div class="flex gap-2 justify-center items-center w-full mt-4">
          <input
            type="text"
            class="text-white w-full p-2 rounded bg-[#1c1c27] border-[#1c1c27]"
            placeholder="Type your message..."
            placeholder:text-white
            v-model="text"
          />
          <button type="submit" class="bg-white text-black rounded w-16 h-10">
            <font-awesome-icon icon="paper-plane"></font-awesome-icon>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { vOnClickOutside } from "@vueuse/components";

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
      }, 1000);
    }
  },
  methods: {
    openChat() {
      this.open = true;
    },
    closeChat() {
      this.open = false;
    },
    async submit() {
      if (!this.text || this.text.trim().length == 0) return;

      if (!this.secret) {
        await axios
          .post("http://api.michelemanna.me/new", {
            username: this.username,
          })
          .then((res) => {
            this.secret = res.data.secret;
            localStorage.setItem("secret", this.secret);
            this.fetchMessages();
            setInterval(() => {
              this.fetchMessages();
            }, 1000);
          });
      }

      axios
        .post("http://api.michelemanna.me/messages?secret=" + this.secret, {
          text: this.text,
        })
        .then(() => {
          this.fetchMessages();
        });

      this.text = "";
    },
    fetchMessages() {
      axios
        .get("http://api.michelemanna.me/messages?secret=" + this.secret)
        .then((res) => {
          this.messages = res.data.reverse();
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
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
