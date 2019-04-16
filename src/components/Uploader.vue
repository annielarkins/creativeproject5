<template>
<transition v-if="show" name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
          <h1 >Place an Order</h1>
          <p v-if="error" class="error">{{error}}</p>
          <form @submit.prevent="upload">
            <p>Enter how many tapes you need converted: </p>
            <input v-model="tapes" placeholder="# of Tapes">
            <p>Enter how many slides you need converted: </p>
            <input v-model="slides" placeholder="# of Slides">
            <p>Enter how many photos you need converted: </p>
            <input v-model="photos" placeholder="# of Photos">
            <p></p>
            <button type="button" @click="close" class="pure-button">Close</button>
            <button type="submit" class="pure-button pure-button-secondary">Submit</button>
          </form>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Uploader',
  props: {
    show: Boolean,
  },
  data() {
    return {
      tapes: 0,
      slides: 0,
      photos: 0,
      error: 0,
    }
  },
  methods: {
    fileChanged(event) {
        this.file = event.target.files[0]
    },
    close() {
        this.$emit('escape');
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('tapes', this.tapes);
        formData.append('slides', this.slides);
        formData.append('photos', this.photos);
        this.error = await this.$store.dispatch("upload", formData);
        if (!this.error) {
          this.title = '';
          this.description = '';
          this.file = null;
          this.$emit('uploadFinished');
          this.$router.push('vieworders');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  }
</script>

<style scoped>
.modal-mask {
    background-color: pink;
    padding: 20px;
    margin: 30px;
}
h1 {
    text-align:center;
}

p{
 text-align: left;
}
input {
  width: 100%;
}

textarea {
  width: 100%;
  height: 100px
}

.pure-button-secondary {
  float: right;
}
</style>