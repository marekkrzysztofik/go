<template>
  <section class="map-section">
    <h2 class="section-title">Nasze projekty na świecie</h2>
    <p class="section-subtitle">
      Realizacje GLOBAL Offshore w strategicznych lokalizacjach przemysłu offshore.
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
const projects = [
  { title: "Bergen, Norwegia", longitude: 5.33, latitude: 60.39 },
  { title: "Stavanger, Norwegia", longitude: 5.73, latitude: 58.97 },
  { title: "Rio de Janeiro, Brazylia", longitude: -43.17, latitude: -22.91 },
  { title: "Macaé, Brazylia", longitude: -41.78, latitude: -22.37 },
  { title: "Lagos, Nigeria", longitude: 3.38, latitude: 6.52 },
  { title: "Port Harcourt, Nigeria", longitude: 7.01, latitude: 4.78 },
  { title: "Houston, USA", longitude: -95.36, latitude: 29.76 },
  { title: "New Orleans, USA", longitude: -90.07, latitude: 29.95 },
  { title: "Aberdeen, UK", longitude: -2.09, latitude: 57.15 },
  { title: "Great Yarmouth, UK", longitude: 1.73, latitude: 52.61 },
  { title: "Mumbai, Indie", longitude: 72.88, latitude: 19.07 },
  { title: "Visakhapatnam, Indie", longitude: 83.22, latitude: 17.69 },
  { title: "Dubaj, ZEA", longitude: 55.27, latitude: 25.20 },
  { title: "Abu Zabi, ZEA", longitude: 54.37, latitude: 24.47 },
  { title: "Dammam, Arabia Saudyjska", longitude: 50.10, latitude: 26.43 },
  { title: "Dhahran, Arabia Saudyjska", longitude: 50.15, latitude: 26.30 },
  { title: "Perth, Australia", longitude: 115.85, latitude: -31.95 },
  { title: "Darwin, Australia", longitude: 130.84, latitude: -12.46 },
  { title: "Kuala Lumpur, Malezja", longitude: 101.69, latitude: 3.14 },
  { title: "Bintulu, Malezja", longitude: 113.03, latitude: 3.17 }
];

onMounted(() => {
  root = am5.Root.new("chartdiv");
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(
    am5map.MapChart.new(root, {
      projection: am5map.geoMercator(),
      panX: "none",
      panY: "none",
      wheelX: "none",
      wheelY: "none",
      pinchZoom: false
    })
  );

  const polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
    fill: am5.color("#e0e0e0"),
    stroke: am5.color("#999"),
    strokeWidth: 0.3
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color("#d63830"),
    fillOpacity: 0.3
  });
  const pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {
      latitudeField: "latitude",
      longitudeField: "longitude"
    })
  );

  pointSeries.bullets.push(() => {
    const circle = am5.Circle.new(root, {
      radius: 6,
      tooltipText: "{title}",
      tooltipY: 0,
      fill: am5.color("#d63830"),
      stroke: am5.color("#ffffff"),
      strokeWidth: 2
    });

    return am5.Bullet.new(root, {
      sprite: circle
    });
  });

  pointSeries.data.setAll(projects);
});

onBeforeUnmount(() => {
  if (root) root.dispose();
});
</script>

<style scoped>
.map-section {
  background-color: #ffffff;
  color: #001120;
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
  color: #555;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.map-container {
  width: 92vw;
  height: 600px;
  border-radius: 16px;
  margin: 0 auto;
  background-color: #ffffff;
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
