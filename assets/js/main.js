var firstTopChart;
var secondTopChart;
(function () {
  /**
   * Increment & Decrement Burn number
   */

  const inc = document.getElementById("burn-increment");
  const input = document.getElementById("burn-number");
  const dec = document.getElementById("burn-decrement");

  inc.addEventListener("click", () => {
    input.value =
      (parseInt(input.value) > 0 ? parseInt(input.value) : 0) + 1000;
  });

  dec.addEventListener("click", () => {
    if (input.value > 0) {
      input.value = parseInt(input.value) - 1000;
    }
  });

  /**
   * Generate Daily burn chart & Daily total supply
   */
  var topCharts = document.querySelectorAll(".daily-chart");
  firstTopChart = echarts.init(document.getElementById("daily-burn"), null, {
    height: 150,
  });
  secondTopChart = echarts.init(
    document.getElementById("daily-total-supply"),
    null,
    {
      height: 150,
    }
  );
  let symbols = [
    "image://data:image/svg+xml,%3Csvg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23' cy='23' r='10.75' stroke='%23FF5C16' stroke-width='0.5' stroke-dasharray='1 1'/%3E%3Cg filter='url(%23filter0_d_0_1)'%3E%3Ccircle cx='23' cy='23' r='8' fill='%23FF5C16' fill-opacity='0.5' shape-rendering='crispEdges'/%3E%3C/g%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_0_1' x='0' y='0' width='46' height='46' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='7.5'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.360784 0 0 0 0 0.0862745 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A",
    "image://data:image/svg+xml,%3Csvg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23' cy='23' r='10.75' stroke='%2300B0CE' stroke-width='0.5' stroke-dasharray='1 1'/%3E%3Cg filter='url(%23filter0_d_0_1)'%3E%3Ccircle cx='23' cy='23' r='8' fill='%2300B0CE' fill-opacity='0.5' shape-rendering='crispEdges'/%3E%3C/g%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Ccircle cx='23' cy='23' r='4' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_0_1' x='0' y='0' width='46' height='46' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='7.5'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0.690196 0 0 0 0 0.807843 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A",
  ];
  let shadowColors = ["#FF571B", "#1FC610"];
  let topChartsColors = ["#FF571B", "#1FC610"];
  let topChartsData = [
    [
      20000, 12500, 31750, 45003, 33001, 20016, 42794, 25000, 65619, 38664,
      32468, 48027, 15000, 22500, 17500, 13500, 10002, 37926, 15000, 20000,
    ],
    [
      102179699, 102167199, 102135449, 102090446, 102057445, 102037429,
      101994635, 101969635, 101904016, 101865352, 101832884, 101784857,
      101769857, 101747357, 101729857, 101716357, 101706355, 101668429,
      101653429, 101633429,
    ],
  ];
  let days = [
    "01/31/2023, 00:00:40",
    "02/01/2023, 00:00:40",
    "02/02/2023, 00:00:22",
    "02/03/2023, 00:00:22",
    "02/04/2023, 00:00:54",
    "02/05/2023, 00:00:54",
    "02/06/2023, 00:00:54",
    "02/07/2023, 00:00:54",
    "02/08/2023, 00:00:12",
    "02/09/2023, 00:00:27",
    "02/10/2023, 00:00:27",
    "02/11/2023, 00:00:27",
    "02/12/2023, 00:00:27",
    "02/13/2023, 00:00:27",
    "02/14/2023, 00:00:27",
    "02/15/2023, 00:00:27",
    "02/16/2023, 00:00:27",
    "02/17/2023, 00:00:27",
    "02/18/2023, 00:00:27",
    "02/18/2023, 22:56:27",
  ];
  function generateTopCharts(
    chart,
    xAxis,
    yAxis,
    topChartsColor,
    shadowColor,
    symbol,
    speed_day,
    index
  ) {
    let option = {
      tooltip: {
        trigger: "axis",
        backgroundColor: "#282d2f",
        borderColor: "#282d2f",
        width: 100,
        textStyle: {
          width: 10,
          fontWeight: 400,
          fontSize: window.innerWidth <= 992 ? 10 : 18,
          color: "#FFFFFF",
        },
        extraCssText: "border-radius: 16px;padding:14px;",
        axisPointer: {
          type: "cross",
          label: {
            show: false,
          },
        },
        formatter: function (params) {
          return `${moment(params[0].name).format(
            "DD/MM/YYYY"
          )}<br /> ${kFormatter(params[0].value)} DEXT`;
        },
      },
      grid: {
        left: index == 0 ? 45 : 70,
        right: 50,
        top: 24,
        bottom: 40,
      },
      xAxis: {
        type: "category",
        data: xAxis,
        axisTick: {
          show: true,
          length: 23,
          interval: Math.round(xAxis.length / 1),
        },
        axisLabel: {
          color: "rgba(255, 255, 255, 0.75)",
          hideOverlap: true,
          showMaxLabel: window.innerWidth <= 992 ? null : false,
          align: "left",
          verticalAlign: "center",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: window.innerWidth <= 992 ? 10 : 13,
          padding: 0,
          interval:
            window.innerWidth < 1400
              ? Math.round(xAxis.length / 4)
              : Math.round(xAxis.length / 6),
          margin: 18,
          formatter: function (value, index) {
            return moment(value).format("DD/MM");
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
      },
      yAxis: {
        type: "value",
        scale: index == 0 ? 0 : 10,
        axisLabel: {
          hideOverlap: true,
          padding: 8,
          fontFamily: "Inter",
          color: "rgba(255, 255, 255, 0.75)",
          fontWeight: 400,
          formatter: function (value) {
            return kFormatter(value);
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        splitLine: {
          show: false,
        },
        alignTicks: true,
        axisTick: {
          show: true,
          interval: Math.round(yAxis.length / 1),
          length: 12,
          alignWithLabel: true,
        },
      },
      series: [
        {
          data: yAxis,
          type: "line",
          smooth: 0.6,
          symbol: "none",
          markPoint: {
            symbol: symbol,
            symbolKeepAspect: true,
            data: [
              {
                type: "max",
                valueIndex: 0,
              },
            ],
            silent: true,
            label: {
              show: true,
              position: window.innerWidth <= 992 ? "top" : "bottom",
              distance:
                window.innerWidth <= 992
                  ? 30
                  : yAxis[yAxis.length - 1] == Math.min(...yAxis) ||
                    yAxis[yAxis.length - 1] - Math.min(...yAxis) < 50
                  ? -10
                  : 5,
              color: "white",
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: 14,
              backgroundColor: "rgba(17, 27, 34, 0.8)",
              padding: [6, 11],
              borderRadius: 30,
              formatter: function (value) {
                if (index == 0) {
                  return parseFloat(speed_day) !== NaN &&
                    typeof parseFloat(speed_day) == "number"
                    ? parseFloat(speed_day).toFixed(2) + "%/y"
                    : speed_day + "%/y";
                } else {
                  return parseFloat(speed_day) !== NaN &&
                    typeof parseFloat(speed_day) == "number"
                    ? kFormatter(parseFloat(speed_day)) + " DEXT/y"
                    : kFormatter(speed_day) + " DEXT/y";
                }
              },
            },
          },
          markLine: {
            symbol: "none",
            data: [
              [
                {
                  xAxis: xAxis[xAxis.length - 1],
                  yAxis: window.innerWidth <= 992 ? Math.max(...yAxis) : 0,
                },
                {
                  xAxis: xAxis[xAxis.length - 1],
                  yAxis: yAxis[yAxis.length - 1],
                },
              ],
            ],
            silent: true,
            label: {
              show: false,
            },
            lineStyle: {
              color: topChartsColor,
              width: 1,
              type: "dotted",
              miterLimit: 27,
            },
            animationDelay: 1000,
          },
          lineStyle: {
            color: topChartsColor,
            width: 4,
            shadowColor: shadowColor,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 15,
          },
        },
      ],
    };
    option && chart.setOption(option);
  }
  for (let index = 0; index < topCharts.length; index++) {
    generateTopCharts(
      index == 0 ? firstTopChart : secondTopChart,
      days,
      topChartsData[index],
      topChartsColors[index],
      shadowColors[index],
      symbols[index],
      "0.008",
      index
    );
  }

  /**
   * Generate Round Charts
   */
  let roundChartsColors = ["#ff571c", "#20c60e"];
  let roundCharts = document.querySelectorAll(".round-chart");
  let roundChartsValues = [5.69, 1.31];
  function generateRoundChart(chart, value, color, shadowBlurVal) {
    let option = {
      series: [
        {
          type: "gauge",
          center: ["50%", "65%"],
          startAngle: 180,
          endAngle: 0,
          padding: 0,
          max: 10,
          splitNumber: 1,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            itemStyle: {
              color: color,
              borderColor: color,
              borderWidth: 1,
              shadowBlur: shadowBlurVal,
              shadowColor: color,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
            },
          },
          axisLine: {
            lineStyle: {
              width: 12,
              color: [[1, "#44525a"]],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            distance: -44,
            fontFamily: "Roboto",
            fontSize: 11,
            fontWeight: 300,
            color: "#fff",
            formatter: function (value) {
              return value + "%";
            },
          },
          data: [
            {
              value: parseFloat(value).toFixed(2),
              name: parseFloat(value).toFixed(2) + "%",
              title: {
                color: "white",
                offsetCenter: ["0%", "-20%"],
                fontSize:
                  window.innerWidth > 1500 || window.innerWidth <= 992
                    ? 20
                    : 12,
                fontWeight: 500,
                fontFamily: "Inter",
              },
              detail: {
                show: true,
                fontSize:
                  window.innerWidth > 1500 || window.innerWidth <= 992
                    ? 16
                    : 10,
                fontWeight: 300,
                fontFamily: "Inter",
                color: "#fff",
                offsetCenter: ["0%", "10%"],
                formatter: function (value) {
                  return "per year";
                },
              },
            },
          ],
          radius: "70%",
          title: {
            fontSize: 14,
          },
        },
      ],
    };
    option && chart.setOption(option);
  }
  for (let index = 0; index < roundCharts.length; index++) {
    const element = roundCharts[index];
    generateRoundChart(
      echarts.init(element, null, {
        width: window.innerWidth > 1500 || window.innerWidth <= 992 ? 170 : 140,
        height:
          window.innerWidth > 1500 || window.innerWidth <= 992 ? 170 : 140,
      }),
      roundChartsValues[index],
      roundChartsValues[index] < 5
        ? roundChartsColors[0]
        : roundChartsValues[index] < 12.5
        ? roundChartsColors[1]
        : roundChartsValues[index] < 20
        ? roundChartsColors[2]
        : roundChartsColors[3],
      roundChartsValues[index] > 20 ? 18 : 10
    );
  }

  // format numbers fn
  function kFormatter(num) {
    return Math.abs(num) > 999999
      ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M"
      : Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
      : Math.sign(num) * Math.abs(num);
  }
  let numbers = document.querySelectorAll(".number.format");
  numbers.forEach((element) => {
    element.innerHTML = kFormatter(parseFloat(element.innerHTML));
  });
  // decode lists
  function htmlDecode(str) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent;
  }
})();

window.addEventListener("resize", function () {
  firstTopChart.resize();
  secondTopChart.resize();
});
