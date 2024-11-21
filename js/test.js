function calculateTotalPrice(order) {
  let total=0;
  for (let i = 0; i < order.length; i++) {
  
      total += order[i]
    

  }
  return total
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
