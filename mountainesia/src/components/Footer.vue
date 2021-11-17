<template>
 <HFooter></HFooter>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Footer',
  components: {
    HFooter
  }
}
</script>

<style scoped>
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-top: 15px;
    background-color: #FFCE45;
    color: rgb(44, 44, 44);
    text-align: center;
}
</style>
