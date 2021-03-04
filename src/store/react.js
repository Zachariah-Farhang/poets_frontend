import { reactive } from "vue";

export default reactive({
  user: null,
  loaders:{
    main:false,
    progress:false
  },
  progress(val){
    this.loaders.progress = Boolean(val) ;
  },
  mainLader(val){
    this.loaders.main = Boolean(val) ;
  }
})
