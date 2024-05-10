<template>
  <div class="hello" ref="chartdiv" id="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  name: "schools",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root.setThemes([am5themes_Animated.new(root)]);
    root._logo.dispose();
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "2020 он",
        value1: 28879,
        value2: 3705,
        value3: 30412,
        value4: 11160,
        value5: 3168,
      },
      {
        category: "2021 он",
        value1: 34811,
        value2: 3695,
        value3: 35008,
        value4: 13366,
        value5: 3241,
      },
      {
        category: "2022 он",
        value1: 32091,
        value2: 3720,
        value3: 35653,
        value4: 12607,
        value5: 3159,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    let totalExaminee = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Нийт шалгуулагч",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value3",
        categoryXField: "category",
      })
    );
    totalExaminee.columns.template.setAll({
      tooltipText: "{name},{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });
    totalExaminee.data.setAll(data);

    let inscribed = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "МУИС-д бүртгүүлэгч",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value4",
        categoryXField: "category",
      })
    );
    inscribed.columns.template.setAll({
      tooltipText: "{name},{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });
    inscribed.data.setAll(data);

    let ingoing = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "МУИС-д элсэгч",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value5",
        categoryXField: "category",
      })
    );
    ingoing.columns.template.setAll({
      tooltipText: "{name},{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });
    ingoing.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    this.root = root;
  },

  // beforeDestroy() {
  //   if (this.root) {
  //     this.root.dispose();
  //   }
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 326px;
}
</style>
