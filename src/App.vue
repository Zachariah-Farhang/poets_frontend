<template>
  <div>
    <Toast style="max-width:calc(100% - 40px)" />

    <div class="fixed-top" v-if="this.store.loaders.progress">
      <ProgressBar mode="indeterminate" style="height: .5em" />
    </div>

    <div class="overlay" v-if="this.store.loaders.main">
      <ProgressSpinner strokeWidth="4" animationDuration=".9s" />
    </div>
    <!-- <Menubar
      :model="items"
      class="p-2">
      <template #start>
        <img alt="logo" src="@/assets/logo.png" height="40" class="p-mr-2">
      </template>
      <template #end>
        <Button label="Primary" icon="pi pi-power-off" class="p-button-text" style="color:var(--text-color)" />
      </template>
    </Menubar> -->

    <router-view/>
  </div>
</template>

<script>
// import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';
import ProgressBar from 'primevue/progressbar';
// import Menubar from 'primevue/menubar';

export default {
  data() {
    return {
      store: window.reactStore
    }
  },
  components:{
    ProgressSpinner,
    ProgressBar,
    Toast
    // Button,
    // Menubar
  }
}
</script>

<style lang="css">
  .overlay {
    position: fixed;
    display: flex;
    align-content: center ;
    align-items: center ;
    top: 0 ;
    left: 0 ;
    right: 0 ;
    bottom: 0 ;
    background-color: rgba(255, 255, 255, 0.7) ;
    z-index: 2;
  }
</style>