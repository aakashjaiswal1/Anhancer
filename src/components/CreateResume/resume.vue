<template>
  <div>
    <Logo />
    <hr>
    <div class="sidenav">
      <div id='hello' v-for="item in sideItems" :key="item" v-on:click="updateVal(item)">{{ item['text'] }}</div>
    </div>
    <div class="main">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo';
import basicComponent from './basicComponent';
import educationComponent from './educationComponent';
import experienceComponent from './experienceComponent';
import certificationComponent from './certificationComponent';

export default {
  data (){
    return {
      componentId: 'basicComponent',
      sideItems: [{
        'text': 'Basic Information',
        'componentName': 'basicComponent'
      },
      {
        'text': 'Education',
        'componentName': 'educationComponent'
      },
      {
        'text': 'Experience',
        'componentName': 'experienceComponent'
      },
      {
        'text': 'Certification',
        'componentName': 'certificationComponent'
      }]
    }
  },
  components: {
    Logo,
    basicComponent,
    educationComponent,
    experienceComponent,
    certificationComponent
  },
  methods: {
    updateVal: function(item){
      this.componentId = item['componentName'];
    }
  }
}

</script>

<style>
body{
  background-color: black;
  color: white;
}

hr{
  width: 100%;
  height: 2px;
  background-color: #51dbc9;
}

.sidenav {
  height: 100%;
  width: 200px;
  margin-top: 74px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(73, 73, 73);
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav #hello {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 1.2em;
  color: #dfdfdf;
  display: block;
}

.sidenav #hello:hover {
  color: #f1f1f1;
  cursor: pointer;
}

.sidenav #hello:active{
  background-color: rgba(0, 255, 255, 0.596);
  color:white;
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  margin-top: 74px;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-left: 10px;
  overflow-y: scroll;
  background-color: rgb(36, 35, 35);
}
</style>