export default {
  site:{
    color:{
      main: '#00838f'
    },
    domain:'http://192.168.2.236:3000'
  },
  url(path){
    return this.site.domain+path
  }
}