const validator = function (obj,vueComponentObject) {
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (typeof value === 'array') {
          value.forEach(item => {
            switch (item) {
              case 'required':
                if (
                  !vueComponentObject[key] ||
                  !vueComponentObject[key].trim()
                ) {
                  return {
                    item: key,
                    msg: key+' is required',
                    type: 'required'
                  } ;
                }
                break;
              default:
                throw 'Unkown validation type '+item
            }
          })
        } else if (typeof value === 'string') {
          switch (value) {
            case 'required':
              if (
                !vueComponentObject[key] ||
                !vueComponentObject[key].trim()
              ) {
                return {
                  item: key,
                  msg: key+' is required',
                  type: 'required'
                } ;
              }
              break;
            default:
              throw 'Unkown validation type '+value
          }
        }
      }
    }
    return true
  } else {
    throw 'validator param 1 must be type of object' ;
  }
}

export default validator