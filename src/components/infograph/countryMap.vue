<template>
  <div id="chart-container" ref="chartdiv">
    <div id="chart-tooltip"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import mongoliaLow from "@amcharts/amcharts4-geodata/mongoliaLow";

export default {
  name: "countryMap",
  data() {
    return {
      chosenProvince: null,
      provinces: [
        { id: "MN-1", name: "Улаанбаатар", value: 1766, color: "#009ad7" },
        { id: "MN-035", name: "Орхон", value: 108 },
        { id: "MN-037", name: "Дархан-Уул", value: 149 },
        { id: "MN-039", name: "Хэнтий", value: 69 },
        { id: "MN-041", name: "Хөвсгөл", value: 141 },
        { id: "MN-043", name: "Ховд", value: 76 },
        { id: "MN-046", name: "Увс", value: 103 },
        { id: "MN-047", name: "Төв", value: 53 },
        { id: "MN-049", name: "Сэлэнгэ", value: 99 },
        { id: "MN-051", name: "Сүхбаатар", value: 57 },
        { id: "MN-053", name: "Өмнөговь", value: 56 },
        { id: "MN-055", name: "Өвөрхангай", value: 141 },
        { id: "MN-057", name: "Завхан", value: 65 },
        { id: "MN-059", name: "Дундговь", value: 38 },
        { id: "MN-061", name: "Дорнод", value: 90 },
        { id: "MN-063", name: "Дорноговь", value: 56 },
        { id: "MN-064", name: "Говьсүмбэр", value: 27 },
        { id: "MN-065", name: "Говь-Алтай", value: 66 },
        { id: "MN-067", name: "Булган", value: 38 },
        { id: "MN-069", name: "Баянхонгор", value: 67 },
        { id: "MN-071", name: "Баян-Өлгий", value: 38 },
        { id: "MN-073", name: "Архангай", value: 96 },
      ],
    };
  },
  mounted() {
    // Create chart instance
    const chart = am4core.create("chart-container", am4maps.MapChart);
    chart.geodata = mongoliaLow;
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Configure map polygon series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = "{customName}: {value}";
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.propertyFields.customName = "name";
    polygonTemplate.fill = am4core.color("#66c2e7");
    polygonTemplate.stroke = am4core.color("#FFFFFF");
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.nonScalingStroke = true;
    // Use custom property for province name
    // Bind the customName property to the province name

    // Set up province data
    polygonSeries.data = this.provinces;

    // Set up province colors
    polygonSeries.data = this.provinces;
    polygonTemplate.propertyFields.fill = "color";

    // Set up province hover state
    const hoverState = polygonTemplate.states.create("hover");
    hoverState.properties.fill = am4core.color("#99d7ef"); // Yellow background color on hover

    // // Enable chart's scrollbar when there are many map areas
    // chart.chartScrollbar = new am4core.Scrollbar();

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chart-container {
  width: 100%;
  height: 400px;
}
#chart-tooltip {
  display: flex;
  align-items: center;
  position: absolute;
  display: none;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  pointer-events: none;
}
</style>
