<template>
  <section class="map-section">
    <h2 class="section-title">Nasza globalna obecność</h2>
    <p class="section-subtitle">
      Świadczymy usługi offshore w strategicznych regionach całego świata.
    </p>
    <div id="chartdiv" class="map-container"></div>
    <div class="cta-wrapper">
      <button class="cta-button" @click="goToProjects">
        Zobacz nasze realizacje
      </button>
    </div>
  </section>
</template>

<script setup>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

let root;
const router = useRouter();

const goToProjects = () => {
  router.push("/projects"); // Zmień na odpowiednią ścieżkę
};

const highlightedCountries = [
  "NO", "BR", "NG", "US", "GB", "IN", "ID", "AE", "SA",
  "MX", "CN", "VN", "MY", "EG", "CA", "KZ", "AU", "DZ", "AR"
];

onMounted(() => {
  root = am5.Root.new("chartdiv");
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(
    am5map.MapChart.new(root, {
      projection: am5map.geoMercator(),
      panX: "none",
      panY: "none",
      wheelX: "none",  // ⛔ wyłączenie zoomu
      wheelY: "none",
      pinchZoom: false
    })
  );

  const polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"], // 🧊 Antarktyda wylatuje
      valueField: "value",
      calculateAggregates: true,
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
    fill: am5.color("#bfbfbd"),
    stroke: am5.color("#ffffff"),
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color("#d63830"),
  });

  polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
    const id = target.dataItem?.dataContext?.id;
    return highlightedCountries.includes(id) ? am5.color("#d63830") : fill;
  });
});

onBeforeUnmount(() => {
  if (root) root.dispose();
});
</script>

<style scoped>
.map-section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #bfbfbd;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.map-container {
  width: 100%;
  height: 600px;
  border-radius: 16px;
  margin: 0 auto 2rem;
}

.cta-wrapper {
  margin-top: 1rem;
}

.cta-button {
  background-color: #d63830;
  color: #ffffff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background-color: #a52222;
}
</style>
