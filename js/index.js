$(function(){
    $(".uls li").click(function(){
        $(this).children("ul").slideToggle();
        $(this).children("ul").addClass("f1");
    })
})

window.onload = function(){
    var myChart = echarts.init(document.querySelector('.sub-title-content-left'));
    var option = {
        title: {
            text: ''
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#fff'
                }
            }
        },
        legend: {
            data:[]
        },
        toolbox: {
            feature: {}
        },
        grid: {
            left: '0',
            right: '2%',
            bottom: '3%',
            containLabel: true,
            y2:200
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['Jan 00','Jan 01','Jan 02','Jan 03','Jan 04','Jan 05','Jan 06'],
                axisLabel:{interval: 0}//横轴信息全部显示
            }
        ],
        yAxis : [
            {
                splitLine:{
                    lineStyle:{color:['#e8e8e8']}
                },
                type : 'value'
            }
        ],
        series : [
            {
                name:'',
                type:'line',
                smooth: true, //折线变为圆的
                color:['#a8e3d6'],
                stack: '',
                areaStyle: {},
                data:[18,  72, 6,40, 19, 84, 8]
            },
            {
                name:'',
                type:'line',
                smooth: true, 
                color:['#9abcc3'],
                stack: '',
                areaStyle: {},
                data:[81,22,67,9,120,0,10]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    var myChart1 = echarts.init(document.querySelector('.sub-title-content-right'));
    var option1 = {
        title: {
            text: 'Top Campaign Performance',
            textStyle: {color:['#bdbdbd']},
            top:25,
            left:'10%'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#fff'
                }
            }
        },
        legend: {
            data:[]
        },
        grid: {
            left: '8%',
            right: '6%',
            bottom: '10%',
            containLabel: true
        },
        xAxis : [
            {
                show:false,
                type : 'value',
                boundaryGap : false,
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis : [
            { 
                type : 'category',
                data:['Bill boards','Conventional Media','Twitter Campaign','Facebook Campaign'],
                axisLine:{show:false},
                axisTick:{show:false}
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:12,
                color:['#1ABB9C'],
                data:[8,6,10,12]
            },
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:12,
                barHeight:18,
                color:['#eee'],
                data:[6,8,4,2]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);

    var myChart2 = echarts.init(document.querySelector('.sub-title-content2-left-con'));
    var option2 = {
        title: {
            text: 'App Usage across versions',
            textStyle: {color:['#73879c'],fontWeight:100},
            top:25
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#fff'
                }
            }
        },
        legend: {
            data:[]
        },
        grid: {
            left: '2%',
            right: '8%',
            bottom: '0%',
            containLabel: true
        },
        xAxis : [
            {
                show:false,
                type : 'value',
                boundaryGap : false,
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis : [
            { 
                type : 'category',
                data:['0.1.5.6','0.1.5.5','0.1.5.4','0.1.5.3','0.1.5.2'],
                axisLine:{show:false},
                axisTick:{show:false}
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:18,
                color:['#1ABB9C'],
                itemStyle: {//柱状图上方显示数据
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#73879c'
                            },
                            position:'right'
                        }
                    }
                },
                data:[1,3,23,53,123]
            },
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:18,
                color:['#eee'],
                data:[129,127,107,77,7]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);


    var myChart3 = echarts.init(document.querySelector('.sub-title-content2-center-con'));
    var option3 = {
    title : {
        text: 'Top 5              Device       Progress',
        x:'left',
        y:20,
        textStyle:{
            color: '#73879c',
            fontSize:14,
            fontWeight:100
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y:'center',
        data:['IOS 30%','Android 10%','Blackb.. 20%','Symbian 15%','Others 30%']
    },
    color:['#bdc3c7','#9b59b6','#e74c3c','#26b99a','#3498db'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '60%'],
            center: ['28%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:15, name:'Symbian 15%'},
                {value:20, name:'Blackb.. 20%'},
                {value:30, name:'Others 30%'},
                {value:10, name:'Android 10%'},
                {value:30, name:'IOS 30%'}
            ]
        }
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option3);
    
    var myChart4 = echarts.init(document.querySelector('.as-r'));
    var option4 = {
        title: {
            text: 'Profile\n Completion',
            x: 'center',
            y:10,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 100,
                fontSize: 16,
                color:"#73879c"
            }
        },
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {}
        },
        series: [
            {
                type: 'gauge',
                center:['50%','70%'],
                radius:50,
                min:0,
                max:100,
                splitNumber:10,
                detail: {
                    textStyle:{
                        fontSize:18
                    }
                },
                axisLine: {            // 坐标轴线  
                    lineStyle: {       // 属性lineStyle控制线条样式  
                        color: [[0.6, '#1abc9c'], [1, '#f0f3f3']]
                    }  
                },  
                axisTick:{show:false},
                axisLabel:{show:false},
                splitLine:{show:false},
                data: [{value: 55, name: ''}]
            }
        ]
    };
    myChart4.setOption(option4);

    window.onresize = function () {  //适应页面
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize(); 
        myChart4.resize();
    }

    //天气
    var skycons = new Skycons({
        'color':'#73879c',
        "resizeClear":true
    });
    skycons.add('PARTLY_CLOUDY_DAY',Skycons.PARTLY_CLOUDY_DAY);
    skycons.add('clear-day','clear-day');
    skycons.add('rain','rain');
    skycons.add('snow','snow');
    skycons.add('sleet','sleet');
    skycons.add('wind','wind');
    skycons.add('cloudy','cloudy');
    skycons.play();
}