<!--地图-->
<template>
  <view-template class="a1-v21" :interval="30" @interval="loadData">
    <div class="v21-type-cut" :class="{'type-roam': !tempFlag}" @click="tempFlag = !tempFlag"></div>
    <div :is="tempView"></div>
  </view-template>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import './v21.scss';

  import gis from './gis.vue';
  import roam from './roam.vue';

  export default {
    props: {},
    data() {
      return {
        tempFlag: true
      }
    },
    computed: {
      tempView() {
        if (this.tempFlag) {
          return gis;
        } else {
          return roam;
        }
      }
    },
    mounted() {
    },
    methods: {
      loadData() {}
    },
    watch: {
    },
    components: {
      gis,
      roam
    },
    beforeDestroy() {
    }
  }
</script>
