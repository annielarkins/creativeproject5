<template>
  <div class="about">
  <br> <br> <br>
    <div v-if="user">
    <h1>Order History for {{this.user.name}} ({{this.user.username}})</h1>
    <order-gallery :orders="orders" />
    </div>
    <div v-else>
    <br> <br>
    <p> You must be logged in to view orders. </p>
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import OrderGallery from '@/components/OrderGallery.vue'
export default {
  name: 'orders',
  components: {
        OrderGallery,
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    orders() {
      return this.$store.state.orders;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyOrders");
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
        async uploadFinished() {
      this.show = false;
      try {
        this.error = await this.$store.dispatch("getMyOrders");
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>