<template>
<div>
<table style="width:100%">
  <tr>
    <th width="25%"># of Tapes</th>
    <th width="25%"># of Photos</th> 
    <th width="25%"># of Slides</th>
    <th width="25%">Date of Order</th>
  </tr>
  </table>
  <br>
  <div class="image" v-for="order in orders" v-bind:key="order._id">
  
  
  <table style="width:100%">
  <tr>
    <td width="25%">{{order.tapes}}</td>
    <td width="25%">{{order.photos}}</td>
    <td width="25%">{{order.slides}}</td>
    <td width="25%">{{formatDate(order.created)}}</td>
  </tr>
</table>

  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OrderGallery',
  props: {
    orders: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
  }
}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 1.2em;
}

.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

p {
  margin: 0px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}

table, th, td {
  border: 1px solid black;
}
</style>