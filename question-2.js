// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;
inventory.push({
  name: "Orange",
  price: 20,
  quantity: 300
});
function invenPrice (totalPrice, inven) {
  return totalPrice + inven.price;
}
function invenQuantity (totalQuantity, inven) {
  return totalQuantity + inven.quantity;
}
totalQuantity = inventory.reduce(invenQuantity, 0);
totalPrice = inventory.reduce(invenPrice, 0);

let totalInvenPrice = (totalPrice * totalQuantity);

console.log("จำนวนสินค้าทั้งหมดในสต๊อก : " + totalQuantity + " ชิ้น");
console.log("มูลค่ารวมของสินค้าทั้งหมดในสต๊อก : " + totalInvenPrice + " บาท");

