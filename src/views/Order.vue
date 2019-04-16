<template>
<div>
    <br> <br> <br>
  <div v-if="user" class="header">
      <h2>Welcome, {{user.name}}!</h2>
      <br>  
      <a href="#" class="pure-button" @click="logout">Logout</a>
      <br> <br>
      <a href="#" class="pure-button" @click="toggleUpload">Create New Order</a>
            <br> <br>
      <router-link to="/vieworders" class="pure-button">View Old Orders</router-link>
    <uploader :show="show" @escape="escape" />
  </div>
  <div v-else>
      <br><br>
    <p>If you would like to place an order, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
    <br><br>
        <img alt="Vue logo" src="../assets/logo.png">
  </div>
</div>
</template>

<script>
import Uploader from '@/components/Uploader.vue'
export default {
  name: 'orders',
  components: {
    Uploader,
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
    created() {
    this.$store.dispatch("getUser");
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
        escape() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
  }
}
</script>

<style scoped>
h2 {
    text-align: center;
}

.header a {
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>