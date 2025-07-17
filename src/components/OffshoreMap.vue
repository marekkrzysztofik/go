<template>
  <section class="map-section">
    <h2 class="section-title">{{ langState.t.main.mapTitle }}</h2>
    <p class="section-subtitle">
      {{ langState.t.main.mapSubtitle }}
    </p>
    <div id="chartdiv" class="map-container"></div>
  </section>
</template>

<script setup>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import langState from '@/lang/langState'

let root;
const router = useRouter();
const goToProjects = () => {
  router.push("/projects");
};
const projects = [
  // Europa
  { title: "Gdynia, Polska", longitude: 18.56, latitude: 54.52 },
  { title: "Gdańsk, Polska", longitude: 18.64, latitude: 54.38 },
  { title: "Szczecin, Polska", longitude: 14.55, latitude: 53.43 },
  { title: "Rotterdam, Holandia", longitude: 4.48, latitude: 51.92 },
  { title: "Amsterdam, Holandia", longitude: 4.90, latitude: 52.37 },
  { title: "Hamburg, Niemcy", longitude: 9.99, latitude: 53.55 },
  { title: "Bremerhaven, Niemcy", longitude: 8.58, latitude: 53.54 },
  { title: "Aberdeen, UK", longitude: -2.09, latitude: 57.15 },
  { title: "Great Yarmouth, UK", longitude: 1.73, latitude: 52.61 },
  { title: "Esbjerg, Dania", longitude: 8.45, latitude: 55.47 },
  { title: "Stavanger, Norwegia", longitude: 5.73, latitude: 58.97 },
  { title: "Bergen, Norwegia", longitude: 5.33, latitude: 60.39 },
  { title: "Marsylia, Francja", longitude: 5.38, latitude: 43.30 },
  { title: "La Rochelle, Francja", longitude: -1.15, latitude: 46.16 },
  { title: "Neapol, Włochy", longitude: 14.25, latitude: 40.85 },
  { title: "Ravenna, Włochy", longitude: 12.20, latitude: 44.42 },
  { title: "Barcelona, Hiszpania", longitude: 2.17, latitude: 41.38 },
  { title: "Las Palmas, Hiszpania", longitude: -15.43, latitude: 28.13 },

  // Afryka (RPA zamiast Nigerii)
  { title: "Kapsztad, RPA", longitude: 18.42, latitude: -33.93 },
  { title: "Durban, RPA", longitude: 31.02, latitude: -29.86 },
  { title: "Port Elizabeth, RPA", longitude: 25.60, latitude: -33.96 },

  // Bliski Wschód / Azja
  { title: "Dubaj, ZEA", longitude: 55.27, latitude: 25.20 },
  { title: "Abu Zabi, ZEA", longitude: 54.37, latitude: 24.47 },
  { title: "Dammam, Arabia Saudyjska", longitude: 50.10, latitude: 26.43 },
  { title: "Mumbai, Indie", longitude: 72.88, latitude: 19.07 },

  // Ameryka Płd i Płn
  { title: "Rio de Janeiro, Brazylia", longitude: -43.17, latitude: -22.91 },
  { title: "Macaé, Brazylia", longitude: -41.78, latitude: -22.37 },
  { title: "Houston, USA", longitude: -95.36, latitude: 29.76 },
  { title: "New Orleans, USA", longitude: -90.07, latitude: 29.95 },

  // Australia
  { title: "Perth, Australia", longitude: 115.85, latitude: -31.95 }
];

onMounted(() => {
  if (import.meta.env.SSR) return
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
  color: var(--title);
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--redtitle);
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--subtitle);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.map-container {
  width: 92vw;
  height: 600px;
  border-radius: 16px;
  margin: 0 auto;
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

@media (max-width: 500px) {
  .map-container {
    width: 92vw;
    height: 300px;
    border-radius: 16px;
    margin: 0 auto;
  }
}
</style>
