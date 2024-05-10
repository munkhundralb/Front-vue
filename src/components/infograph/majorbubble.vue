<template>
  <div ref="chartdiv" id="chartdiv">
    <div id="chart-tooltip"></div>
  </div>
</template>

<script>
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5 from "@amcharts/amcharts5";

export default {
  name: "schools",
  data() {
    return {
      schoolvalue: 100,
      schoolsalbarvalue: 75,
      salbarvalue: 50,
    };
  },
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    let data = {
      value: 0,
      children: [
        {
          name: "Бизнесийн сургууль",
          children: [
            {
              name: "Нягтлан бодох бүртгэл",
              value: 1,
            },
            {
              name: "Санхүү",
              value: 1,
            },
            {
              name: "Банк",
              value: 1,
            },
            {
              name: "Даатгал",
              value: 1,
            },
            {
              name: "Маркетинг",
              value: 1,
            },
            {
              name: "Менежмент",
              value: 1,
            },
            {
              name: "Худалдаа",
              value: 1,
            },
            {
              name: "Зочлох үйлчилгээ",
              value: 1,
            },
          ],
          value: this.schoolvalue,
        },
        {
          name: "Дорнод аймаг дахь сургууль",
          children: [
            {
              name: "Ашигт малтмалын баяжуулалтын технологи",
              value: 1,
            },
            {
              name: "Гадаад хэлний орчуулга (Хятад)",
              value: 1,
            },
            {
              name: "Түүх",
              value: 1,
            },
            {
              name: "Нягтлан бодох бүртгэл",
              value: 1,
            },
            {
              name: "Бизнесийн удирдлага",
              value: 1,
            },
            {
              name: "Газрын тосны инженерчлэл",
              value: 1,
            },
            {
              name: "Нийгмийн ажил",
              value: 1,
            },
            {
              name: "Аялал жуулчлал",
              value: 1,
            },
            {
              name: "Сэтгэл судлал",
              value: 1,
            },
            {
              name: "Мэдээллийн технологи",
              value: 1,
            },
            {
              name: "Багш, дизайн технологийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, дизайн зураг зүйн боловсрол",
              value: 1,
            },
            {
              name: "Багш, дүрслэх урлагийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, биеийн тамирын боловсрол",
              value: 1,
            },
            {
              name: "Багш, сургуулийн өмнөх боловсрол",
              value: 1,
            },
            {
              name: "Багш, хөгжмийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, мэдээлэл зүйн боловсрол",
              value: 1,
            },
            {
              name: "Багш, математикийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, физикийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, монгол хэл, уран зохиолын боловсрол",
              value: 1,
            },
            {
              name: "Багш, гадаад хэлний боловсрол (Англи)",
              value: 1,
            },
            {
              name: "Багш, бага боловсрол",
              value: 1,
            },
          ],
          value: this.schoolsalbarvalue,
        },
        {
          name: "Завхан сургууль",
          children: [
            {
              name: "Нягтлан бодох бүртгэл",
              value: 1,
            },
            {
              name: "Санхүү",
              value: 1,
            },
            {
              name: "Банк",
              value: 1,
            },
            {
              name: "Маркетинг",
              value: 1,
            },
            {
              name: "Менежмент",
              value: 1,
            },
          ],
          value: this.schoolsalbarvalue,
        },
        {
          name: "Олон улсын харилцаа, нийтийн удирдлагын сургууль",
          children: [
            {
              name: "Нийтийн удирдлага (Завхан сургууль болон ОУХНУС-ийн `2+2` жилийн хамтарсан хөтөлбөр)",
            },
            {
              name: "Олон улсын харилцаа",
              value: 1,
            },
            {
              name: "Нийтийн удирдлага",
              value: 1,
            },
          ],
          value: this.schoolvalue,
        },
        {
          name: "Ховд сургууль",
          children: [
            {
              name: "Нягтлан бодох бүртгэл",
              value: 1,
            },
            {
              name: "Санхүү",
              value: 1,
            },
            {
              name: "Эрх зүй",
              value: 1,
            },
            {
              name: "Программ хангамж",
              value: 1,
            },
            {
              name: "Барилгын инженерчлэл",
              value: 1,
            },
            {
              name: "Цахилгааны инженер",
              value: 1,
            },
            {
              name: "Уул уурхайн ашиглалтын технологи",
              value: 1,
            },
            {
              name: "Геологи",
              value: 1,
            },
            {
              name: "Газар зохион байгуулалт",
              value: 1,
            },

            {
              name: "Химийн боловсруулалтын технологи",
              value: 1,
            },
            {
              name: "Аялал жуулчлал",
              value: 1,
            },
            {
              name: "Бизнесийн удирдлага",
              value: 1,
            },

            {
              name: "Гадаад хэлний орчуулга (Англи)",
              value: 1,
            },

            {
              name: "Гадаад хэлний орчуулга (Хятад)",
              value: 1,
            },
            {
              name: "Нийгмийн ажил",
              value: 1,
            },
            {
              name: "Нийгмийн эрүүл мэнд",
              value: 1,
            },
            {
              name: "Нийтийн удирдлага",
              value: 1,
            },
            {
              name: "Ойн аж ахуй",
              value: 1,
            },
            {
              name: "Сэтгэл судлал",
              value: 1,
            },
            {
              name: "Экологи",
              value: 1,
            },
            {
              name: "Багш, дүрслэх урлагийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, дизайн технологийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, дизайн зураг зүйн боловсрол",
              value: 1,
            },
            {
              name: "Багш, биеийн тамирын боловсрол",
              value: 1,
            },
            {
              name: "Үндэсний язгуур урлаг",
              value: 1,
            },
            {
              name: "Багш, сургуулийн өмнөх боловсрол",
              value: 1,
            },
            {
              name: "Багш, хөгжмийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, бага боловсрол",
              value: 1,
            },
            {
              name: "Багш, мэдээлэл зүйн боловсрол",
              value: 1,
            },
            {
              name: "Багш, математикийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, физикийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, биологийн боловсрол",
              value: 1,
            },
            {
              name: "Багш, гадаад хэлний боловсрол (Англи)",
              value: 1,
            },
            {
              name: "Багш, гадаад хэлний боловсрол (Орос)",
              value: 1,
            },
            {
              name: "Багш, газар зүйн боловсрол",
              value: 1,
            },
            {
              name: "Багш, монгол хэл, уран зохиолын боловсрол",
              value: 1,
            },
            {
              name: "Багш, нийгмийн ухааны боловсрол",
              value: 1,
            },
            {
              name: "Багш, химийн боловсрол",
              value: 1,
            },
          ],
          value: this.schoolsalbarvalue,
        },
        {
          name: "Хууль зүйн сургууль",
          children: [
            {
              name: "Эрх зүй",
              value: 1,
            },
          ],
          value: this.schoolvalue,
        },
        {
          name: "Хэрэглээний шинжлэх ухаан, инженерчлэлийн сургууль",
          children: [
            {
              name: "Компьютерын ухаан",
              value: 1,
            },
            {
              name: "Мэдээллийн технологи",
              value: 1,
            },
            {
              name: "Программ хангамж",
              value: 1,
            },
            {
              name: "Мультимедиа технологи",
              value: 1,
            },
            {
              name: "Мэдээллийн систем",
              value: 1,
            },
            {
              name: "Хэрэглээний математик",
              value: 1,
            },
            {
              name: "Электроникийн инженерчлэл",
              value: 1,
            },
            {
              name: "Компьютерын сүлжээ",
              value: 1,
            },
            {
              name: "Сэргээгдэх эрчим хүч",
              value: 1,
            },
            {
              name: "Холбооны технологи",
              value: 1,
            },
            {
              name: "Цөмийн инженерчлэл",
              value: 1,
            },
            {
              name: "Био-инженерчлэл",
              value: 1,
            },
            {
              name: "Материал судлал, инженерчлэл ",
              value: 1,
            },
            {
              name: "Нано шинжлэх ухаан, инженерчлэл",
              value: 1,
            },
            {
              name: "Химийн инженерчлэл",
              value: 1,
            },
            {
              name: "Хүрээлэн буй орчны инженерчлэл",
              value: 1,
            },
            {
              name: "Ус судлал",
              value: 1,
            },
            {
              name: "Цаг уур судлал",
              value: 1,
            },
            {
              name: "Химийн боловсруулалтын технологи",
              value: 1,
            },
            {
              name: "Хүрээлэн буй орчин судлал",
              value: 1,
            },
            {
              name: "Ойн аж ахуй",
              value: 1,
            },
            {
              name: "Хүрээлэн буй орчин судлал (Завхан сургууль болон ХШУИС-ийн `1+3` дотоодын хамтарсан хөтөлбөр)",
              value: 1,
            },
            {
              name: "Ойн аж ахуй (Завхан сургууль болон ХШУИС-ийн `1+3` дотоодын хамтарсан хөтөлбөр)",
              value: 1,
            },
          ],
          value: this.schoolvalue,
        },
        {
          name: "Шинжлэх ухааны сургууль",
          children: [
            {
              name: "Байгалийн ухааны салбар",
              children: [
                {
                  name: "Физик электроник",
                  value: 1,
                },
                {
                  name: "Аялал жуулчлал",
                  value: 1,
                },
                {
                  name: "Байгаль орчны зайнаас тандан судлал",
                  value: 1,
                },
                {
                  name: "Биохими",
                  value: 1,
                },
                {
                  name: "Биотехнологи",
                  value: 1,
                },
                {
                  name: "Биологи",
                  value: 1,
                },
                {
                  name: "Математик",
                  value: 1,
                },
                {
                  name: "Физик",
                  value: 1,
                },
                {
                  name: "Хими",
                  value: 1,
                },
                {
                  name: "Газарзүй",
                  value: 1,
                },
                {
                  name: "Геологи",
                  value: 1,
                },
                {
                  name: "Хот ба бүс нутгийн төлөвлөлт",
                  value: 1,
                },
                {
                  name: "Газар зохион байгуулалт",
                  value: 1,
                },
                {
                  name: "Геофизик",
                  value: 1,
                },
                {
                  name: "Биологийн нөөц судлал",
                  value: 1,
                },
                {
                  name: "Экологи",
                  value: 1,
                },
                {
                  name: "Микробиологи",
                  value: 1,
                },
                {
                  name: "Хэрэглээний хими",
                  value: 1,
                },
                {
                  name: "Багш, математикийн боловсрол",
                  value: 1,
                },
                {
                  name: "Багш, физикийн боловсрол",
                  value: 1,
                },
                {
                  name: "Багш, химийн боловсрол",
                  value: 1,
                },
                {
                  name: "Багш, биологийн боловсрол",
                  value: 1,
                },
                {
                  name: "Багш, газарзүйн боловсрол",
                  value: 1,
                },
              ],
              value: this.salbarvalue,
            },
            {
              name: "Нийгмийн ухааны салбар",
              children: [
                {
                  name: "Антропологи",
                  value: 1,
                },
                {
                  name: "Археологи",
                  value: 1,
                },
                {
                  name: "Хүн ам зүй",
                  value: 1,
                },
                {
                  name: "Нийгмийн ажил",
                  value: 1,
                },
                {
                  name: "Социологи",
                  value: 1,
                },
                {
                  name: "Сэтгүүл зүй",
                  value: 1,
                },
                {
                  name: "Сэтгэл судлал",
                  value: 1,
                },
                {
                  name: "Улс төр судлал",
                  value: 1,
                },
                {
                  name: "Эдийн засаг",
                  value: 1,
                },
              ],
              value: this.salbarvalue,
            },
            {
              name: "Хүмүүнлэгийн ухааны салбар",
              children: [
                {
                  name: "Гадаад хэлний орчуулга (Англи)",
                  value: 1,
                },
                {
                  name: "Гадаад хэлний орчуулга (Орос)",
                  value: 1,
                },
                {
                  name: "Гадаад хэлний орчуулга (Солонгос)",
                  value: 1,
                },
                {
                  name: "Гадаад хэлний орчуулга (Хятад)",
                  value: 1,
                },
                {
                  name: "Гадаад хэлний орчуулга (Япон)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Америк)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Испани)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Итали)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Их британи)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Польш)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Солонгос)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Турк)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Франц)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Хятад)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Чех)",
                  value: 1,
                },
                {
                  name: "Орон судлал (Япон)",
                  value: 1,
                },

                {
                  name: "Утга зохиол судлал",
                  value: 1,
                },
                {
                  name: "Урлаг судлал",
                  value: 1,
                },
                {
                  name: "Хэл, уран зохиол (Монгол хэл)",
                  value: 1,
                },
                {
                  name: "Хэл шинжлэл (Монгол хэл)",
                  value: 1,
                },
                {
                  name: "Хэл шинжлэл (Хятад)",
                  value: 1,
                },
                {
                  name: "Багш, гадаад хэлний боловсрол (Англи)",
                  value: 1,
                },
                {
                  name: "Багш, гадаад хэлний боловсрол (Орос)",
                  value: 1,
                },
                {
                  name: "Түүх",
                  value: 1,
                },
                {
                  name: "Философи",
                  value: 1,
                },
                {
                  name: "Шашин судлал",
                  value: 1,
                },
                {
                  name: "Багш, монгол хэл, уран зохиолын боловсрол",
                  value: 1,
                },
                {
                  name: "Багш, нийгмийн ухааны боловсрол (Түүх)",
                  value: 1,
                },
              ],
              value: this.salbarvalue,
            },
          ],
          value: this.schoolvalue,
        },
      ],
    };

    // Create wrapper container
    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    let series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 1,
        legendValueText: "",
      })
    );

    // series.get("colors").setAll({
    //   step: 2,
    // });

    series.links.template.set("strength", 0.5);
    series.labels.template.setAll({
    text: "{category} [bold][/]",
    fontSize: 14,
    wrap : true,
    maxWidth: 30
  });
    series.nodes.template.set("tooltipText", "{category}"); // /{children.length!=null? 2}/

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);
    // Add legend
    let legend = container.children.push(
      am5.Legend.new(root, {
        width: am5.percent(100),
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 20,
        marginBottom: 20
      })
    );
    legend.data.setAll(series.dataItems[0].get("children"));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartdiv {
  width: 100%;
  height: 900px;
}

</style>
