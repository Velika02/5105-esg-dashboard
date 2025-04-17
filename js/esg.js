function updateESGCharts() {
  const companySelect = document.getElementById("companySelect");
  const company = companySelect.value;
  const companyName = companySelect.options[companySelect.selectedIndex].text;

  // 更新图表 iframe
  document.getElementById("barChart").src = `charts/${company}_bar.html`;
  document.getElementById("lineChart").src = `charts/${company}_line.html`;
  document.getElementById("heatmapChart").src = `charts/${company}_heatmap.html`;

  // ✅ 更新导航栏显示公司名称
  document.getElementById("selectedCompany").textContent = companyName;
}
