<template>
  <div>
    
    <div style="height:0">
      <div style="height:200px;background-color:var(--blue-100)"></div>
    </div>

    <div class="p-3 mt-3 mb-3" style="max-width: 400px;margin:auto">
      <Card
        style="border-top:3px solid var(--primary-color)">
        <template #content>
          <h4 class="text-center">Register</h4>
          <p
            class="text-center">Please fill out all feilds to register</p>
          <Message
            v-for="(m,key) in msgs"
            :key="key"
            :severity="m.type">{{ m.msg }}</Message>
          <form action="#" method="post" @submit.prevent="submit">
            <div class="p-fluid">
              <span class="p-float-label mt-4" style="width:100%">
                <InputText id="name" v-model="name" :class="{'p-invalid':EIM}"/>
                <label for="name">Full name</label>
              </span>
              <span class="p-float-label mt-4" style="width:100%">
                <InputText id="username" v-model="username" :class="{'p-invalid':EIM}"/>
                <label for="username">Email</label>
              </span>
              <small v-if="EIM" class="p-error">{{ EIM }}</small>
              <span class="p-float-label mt-4" style="width:100%">
                <Password :feedback="false" toggleMask id="password" v-model="password" :class="{'p-invalid':PIM}"/>
                <label for="password">New password</label>
              </span>

              <ToggleButton
                class="mt-3"
                v-model="isShaayr"
                onLabel="I Shaayr"
                offLabel="I Reader"
                onIcon="pi pi-pencil"
                offIcon="pi pi-user"
                style="width: 10em" />
              
              <small v-if="PIM" class="p-error">{{ PIM }}</small>
            </div>
            
            <p class="mt-2">
              <router-link style="color:var(--blue-500)" :to="{name:'Login'}">Sign in?</router-link>
            </p>
            
            <Toolbar class="p-0 pt-3">
              <template #left>
                <Button
                  label="New account"
                  icon="pi pi-plus"
                  class="p-button-text p-button-sm" />
              </template>

              <template #right>
                <Button
                  type="submit"
                  label="Submit"
                  class="p-button-sm"
                  icon="pi pi-angle-right"
                  iconPos="right" />
              </template>
            </Toolbar>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Message from 'primevue/message';
import ToggleButton from 'primevue/togglebutton';

export default {
  data() {
    return {
      isShaayr:false,
      name:null,
      username:null,
      password:null,
      PIM:null,
      EIM:null,
      msgs:[
        // {
        //   type:'success',
        //   msg:'The provided crdentiol does not match our records!'
        // }
      ]
    }
  },
  methods: {
    submit(){
      window.reactStore.progress(true)
      window.reactStore.user = {
        isShaayr:this.isShaayr,
        name: this.name,
        username: this.username,
        password: this.password
      }
      setTimeout(()=>{
        this.$toast.add({severity:'success', summary: 'Account created', detail:'Your account created successfuly', life: 3000});
        this.$router.push({name:'Home'});
        window.reactStore.progress(false)
      },1000)
    }
  },
  components:{
    InputText,
    Card,
    Toolbar,
    Button,
    Password,
    Message,
    ToggleButton
  }
}
</script>