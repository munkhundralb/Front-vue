<template>
  <div ref="chartdiv" id="chartdiv">
    <select
      class="form-select mb-4"
      aria-label="Default select example"
      v-model="selectedOption"
      @change="updateChart()"
    >
      <option
        v-for="option in chartDataOptions"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <div id="chart-div"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: "schools",
  setup() {
    const chartdiv = ref(null);
    let chart = null;
    const selectedOption = ref(0);
    const chartDataOptions = [
      { label: "2022 он", value: 0 },
      { label: "2021 он", value: 1 },
      { label: "2020 он", value: 2 },
    ];

    const createChart = () => {
      const root = am5.Root.new(chartdiv.value);
      /* remove amchart logo */
      root._logo.dispose();
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
        })
      );

      // Set data
      const data = [
        {
          category: "Англи хэл",
          value: 628.7,
        },
        {
          category: "Биологи",
          value: 613.3,
        },
        {
          category: "Газарзүй",
          value: 628.3,
        },
        {
          category: "Математик",
          value: 631.7,
        },
        {
          category: "Монгол улсын түүх",
          value: 641,
        },
        {
          category: "Монгол хэл",
          value: 638.7,
        },
        {
          category: "Нийгмийн тухай мэдлэг",
          value: 643.5,
        },
        {
          category: "Орос хэл",
          value: 750.3,
        },
        {
          category: "Физик",
          value: 633.7,
        },
        {
          category: "Хими",
          value: 622.3,
        },
      ];

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15,
      });

      xRenderer.grid.template.setAll({
        location: 1,
      });

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "category",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          min: 0,
          max: 800,
          renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1,
          }),
        })
      );

      // Create series
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "category",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
        })
      );

      series.columns.template.setAll({
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0,
      });
      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });

      xAxis.data.setAll(data);
      series.data.setAll(data);

      // Make stuff animate on load
      series.appear(1000);
      chart.appear(1000, 100);
    };

    const updateChart = () => {
      console.log("selected option" + selectedOption.value);
      if (chart) {
        switch (selectedOption.value) {
          case 0:
            // Update chart data or settings for Option 1
            chart.series.each((series) => {
              series.data.setAll([
                {
                  category: "Англи хэл",
                  value: 628.7,
                },
                {
                  category: "Биологи",
                  value: 613.3,
                },
                {
                  category: "Газарзүй",
                  value: 628.3,
                },
                {
                  category: "Математик",
                  value: 631.7,
                },
                {
                  category: "Монгол улсын түүх",
                  value: 641,
                },
                {
                  category: "Монгол хэл",
                  value: 638.7,
                },
                {
                  category: "Нийгмийн тухай мэдлэг",
                  value: 643.5,
                },
                {
                  category: "Орос хэл",
                  value: 750.3,
                },
                {
                  category: "Физик",
                  value: 633.7,
                },
                {
                  category: "Хими",
                  value: 622.3,
                },
              ]);
            });
            break;
          case 1:
            // Update chart data or settings for Option 2
            chart.series.each((series) => {
              series.data.setAll([
                {
                  category: "Англи хэл",
                  value: 625,
                },
                {
                  category: "Биологи",
                  value: 609.8,
                },
                {
                  category: "Газарзүй",
                  value: 631,
                },
                {
                  category: "Математик",
                  value: 634.8,
                },
                {
                  category: "Монгол улсын түүх",
                  value: 644.8,
                },
                {
                  category: "Монгол хэл",
                  value: 642.6,
                },
                {
                  category: "Нийгмийн тухай мэдлэг",
                  value: 649.1,
                },
                {
                  category: "Орос хэл",
                  value: 735.2,
                },
                {
                  category: "Физик",
                  value: 637.7,
                },
                {
                  category: "Хими",
                  value: 638.6,
                },
              ]);
            });
            break;
          case 2:
            // Update chart data or settings for Option 3
            chart.series.each((series) => {
              series.data.setAll([
                {
                  category: "Англи хэл",
                  value: 622.6,
                },
                {
                  category: "Биологи",
                  value: 602,
                },
                {
                  category: "Газарзүй",
                  value: 613.5,
                },
                {
                  category: "Математик",
                  value: 623.7,
                },
                {
                  category: "Монгол улсын түүх",
                  value: 636.9,
                },
                {
                  category: "Монгол хэл",
                  value: 633.5,
                },
                {
                  category: "Нийгмийн тухай мэдлэг",
                  value: 640,
                },
                {
                  category: "Орос хэл",
                  value: 729.5,
                },
                {
                  category: "Физик",
                  value: 630.8,
                },
                {
                  category: "Хими",
                  value: 627.6,
                },
              ]);
            });
            break;
        }
      }
    };

    onMounted(() => {
      createChart();
    });

    onUnmounted(() => {
      if (chart) {
        chart.dispose();
      }
    });

    return {
      chartdiv,
      selectedOption,
      chartDataOptions,
      updateChart,
    };
  },
};
</script>

<style>
#chartdiv {
  width: 100%;
  height: 450px;
}
</style>
