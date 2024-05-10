<template>
  <div ref="chartdiv" id="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  name: "schools",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root._logo.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        layout: root.horizontalLayout,
      })
    );

    // Define data
    const data = [
      {
        category: "2020 он",
        value2: 635.3,
      },
      {
        category: "2021 он",
        value2: 645.1,
      },
      {
        category: "2022 он",
        value2: 643.7,
      },
    ];

    // Create X-axis
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        min: 400,
        max: 800,
        strictMinMax: true,
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        categoryField: "category",
      })
    );
    yAxis.data.setAll(data);

    let avg = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Дундаж",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value2",
        categoryYField: "category",
      })
    );

    avg.columns.template.setAll({
      tooltipText: "{name}: {valueX}",
      height: am5.percent(40),
      tooltipX: 0,
    });
    avg.data.setAll(data);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    this.root = root;
  },

  // beforeDestroy() {
  //   if (this.root) {
  //     this.root.dispose();
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 350px;
}
</style>
