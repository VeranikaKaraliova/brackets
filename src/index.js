module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('')
      let newArrPush =[]
      let newArrShift =[]
      for(let i=0; i<strArr.length/2; i++){
        newArrPush.push([strArr[i], (strArr[strArr.length-i-1])])
        newArrShift.unshift([strArr[i], (strArr[strArr.length-i-1])])
      }
      if( newArrPush.join('') === bracketsConfig.join('') || newArrShift.join('') === bracketsConfig.join('')){
          return true
      }else return false
}
