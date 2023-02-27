
module.exports = function towelSort (matrix) {
  const result = [];
  if (!matrix){
    return [];
  }
  if (matrix.length == 0){
    return [];
  }  
  for (let i=0;i<matrix.length;i++){
    if (i%2){
      for (let i3=matrix[i].length-1;i3>=0;i3--){
        result.push(matrix[i][i3])
      }
      
    } else {
      for (let i2=0;i2<matrix[i].length;i2++){
        result.push(matrix[i][i2])
      }
    }
  }
  return result;
}
