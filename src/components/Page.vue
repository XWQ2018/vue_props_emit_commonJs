<template>
    <div class="Page">
        <!-- - canvas(id="myChart" width="800" height="800" ) -->
        <h3>这是page页面</h3>
        <p>{{date | dateFormate}}</p>
        <h4>{{date}}</h4>
    </div>
</template>

<script>
import Chart from "Chart.js";
window.onload = function() {
    var ctx = document.getElementById("myChart");
    Chart.defaults.global.defaultFontColor = "red";
    Chart.defaults.global.defaultFontSize = 20;
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "年度总额", //标题
                    data: [12, 19, 3, 5, 2, 3], //数据
                    backgroundColor: [
                        //每条数据对应的背景颜色
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            animation: {
                // animateRotate:true,   //以旋转的方式启动
                animateScale: true //动画从中心向外缩放图表
            }
            // scales: {           //轴线是否显示
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero:true
            //         }
            //     }]
            // }
        }
    });
};

export default {
    name: "Page",
    data() {
        return {
            msg: "",
            date: "2018年12月26日"
        };
    },
    filters: {
        dateFormate(value) {
            console.log(value);
            return value.substr(2);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
</style>
