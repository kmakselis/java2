var valstybes = [
  {pavadinimas: "USA", plotas: 9833520, gyventojai: 331449281},
  {pavadinimas: "Kanada", plotas: 9984670, gyventojai: 38131104},
  {pavadinimas: "Meksika", plotas: 1972550, gyventojai: 126014024},
  {pavadinimas: "Brazilija", plotas: 8515767, gyventojai: 210147125},
  {pavadinimas: "Argentina", plotas: 2780400, gyventojai: 45605826}
];

function data(pavadinimas, plotas, gyventojai) {
  var plotasGyventojui = plotas / gyventojai * 1000000;
  console.log("Šalis: " + valstybes[i].pavadinimas + ", joje gyvena " + valstybes[i].gyventojai + " gyventojų.");
  console.log("Valstybės plotas: " + plotas + "km²" + ", plotas tenkantis vienam gyventojui: " + plotasGyventojui.toFixed(2) + " m².");
}

for (var i = 0; i < valstybes.length; i++) {
 data(valstybes[i].pavadinimas, valstybes[i].plotas, valstybes[i].gyventojai);
}
