<template>
  <div>
    <Menubar
      :model="items"
      class="p-2">

      <template #start>
        <img alt="logo" src="@/assets/logo.png" height="40" class="p-mr-2">
      </template>

      <template #end>
        <Button @click="logout()" label="Logout" icon="pi pi-power-off" class="p-button-text" style="color:var(--text-color)" />
      </template>

    </Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

export default {
  methods: {
    logout(){
      window.reactStore.user = null
      this.$router.push({name:'Login'})
    }
  },

  data() {
    return {
      items:[
        {
          label:'Home',
          to:'/',
          icon:'pi pi-fw pi-home',
        },
        {
          label:'Posts',
          to:'/posts',
          icon:'pi pi-fw pi-file'
        }
      ]
    }
  },

  components:{
    Button,
    Menubar,
  }
}
</script>
