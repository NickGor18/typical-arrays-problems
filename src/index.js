
exports.min = function min (array) {
  if(array==undefined)
  return 0;
  var min = Math.min.apply(null, array);
  if(min == Infinity)
  return 0;
  return min;
}

exports.max = function max (array) {
  if(array==undefined)
  return 0;
  var max = Math.max.apply(null, array);
  if(max == -Infinity)
  return 0;
  return max;
}

exports.avg = function avg (array) {
  if(array==undefined)
  return 0;
  let k = 0;
  for(let i=0; i<array.length; i++){
    if(array[i]==undefined){
      return 0;
    }
    k+=array[i];
  }
  if(Number.isNaN(k/array.length))
  return 0;
  return k/array.length;
}
