<template>
  <div ref="chartdiv" id="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default {
  name: "schools",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root._logo.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.slices.template.setAll({
      tooltipText: "{name}, {value}",
    });

    series.slices.template.setAll({
      strokeWidth: 1,
      stroke: am5.color(0xffffff),
    });

    series.labels.template.setAll({
      // textType: "circular",
      centerX: 0,
      centerY: 0,
    });

    // Add a label to the center of the chart
    let label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        text: "3407", // Customize the number here
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        fontSize: 30,
        fontWeight: "bold",
      })
    );

    // Set data
    series.data.setAll([
      {
        value: 1644,
        category: "ШУС",
        name: "Шинжлэх ухааны сургууль",
      },
      {
        value: 17,
        category: "МТЭС",
        name: "Мэдээллийн технологи, электроникийн сургууль",
      },
      { value: 595, category: "БС", name: "Бизнесийн сургууль" },

      {
        value: 12,
        category: "ИТС",
        name: "Инженер технологийн сургууль",
      },

      { value: 160, category: "ХЗС", name: "Хууль зүйн сургууль" },
      {
        value: 2,
        category: "ЗС",
        name: "Завхан сургууль",
      },
      {
        value: 157,
        category: "ОУХНУС",
        name: "Олон улсын харилцаа, нийтийн удирдлагын сургууль",
      },
      {
        value: 5,
        category: "ХС",
        name: "Ховд аймаг дахь сургууль",
      },
      {
        value: 798,
        category: "ХШУИС",
        name: "Хэрэглээний шинжлэх ухаан, инженерчлэлийн сургууль",
      },

      { value: 17, category: "ДС", name: "Дорнод аймаг дахь сургууль" },
    ]);

    // Create legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    series.appear(1000, 100);
  },
  // beforeDestroy() {
  //   if (this.root) {
  //     this.root.dispose();
  //   }
  // },
};
</script>

<style>
#chartdiv {
  width: 100%;
  height: 422px;
}
</style>
