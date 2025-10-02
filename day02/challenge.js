let phone = "628781100330"; 

if (phone.length >= 10 && phone.length <= 13) {
  let masked = phone.slice(0, -3) + "***";
  console.log("Masked phone:", masked);
} else if (phone.length < 10 || phone.length > 13) {
  console.log("Nomor telepon tidak valid"); 
} else if (phone.number === NaN) {
  console.log("Nomor telepon tidak valid");
}