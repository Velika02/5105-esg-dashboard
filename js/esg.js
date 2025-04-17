function updateESGCharts() {
  const companySelect = document.getElementById("companySelect");
  const company = companySelect.value;
  const companyName = companySelect.options[companySelect.selectedIndex].text;

  document.getElementById("barChart").src = `charts/${company}_bar.html`;
  document.getElementById("lineChart").src = `charts/${company}_line.html`;
  document.getElementById("heatmapChart").src = `charts/${company}_heatmap.html`;

  document.getElementById("selectedCompanyText").textContent = `You selected: ${companyName}`;
}
