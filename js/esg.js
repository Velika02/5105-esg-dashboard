function updateESGCharts() {
  const company = document.getElementById("companySelect").value;
  document.getElementById("barChart").src = `charts/${company}_bar.html`;
  document.getElementById("lineChart").src = `charts/${company}_line.html`;
  document.getElementById("heatmapChart").src = `charts/${company}_heatmap.html`;
}
