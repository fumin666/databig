window.onload = function(){
    var myChart = echarts.init(document.querySelector('.hea1-con'));
    var myChart1 = echarts.init(document.querySelector('.hea1-con1'));
    var myChart2 = echarts.init(document.querySelector('.hea1-con3'));
    var option = {
        color: ['#26b99a'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : [],
                show:false,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false,
                max:12
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '90%',
                data:[1, 12, 6, 12, 16, 12, 16,12,6,12,16,20,12,16,20,6],
                barCateGoryGap:20
            }
        ]
    };
    myChart.setOption(option);
    myChart1.setOption(option);
    myChart2.setOption(option);

    var myChart3 = echarts.init(document.querySelector('.hea1-con2'));
    var option1 = {
        color:"#26b99a",
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [],
            show:false
        },
        yAxis: {
            type: 'value',
            show:false,
            max:10
        },
        series: [{
            data: [2,4,3,5,4,5,3,7,5,3,5,6],
            areaStyle: {
                color:'#eaeaea'},
            type: 'line'
        }]
    };
    myChart3.setOption(option1);

    var myChart4 = echarts.init(document.querySelector('.content-cen'));
    var option2 = {
        color:'#26b99a',
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0','1', '2','3', '4','5', '6','7', '8','9', '10','11', '12','14','16']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [2, 8,6,10,5,17,7,10,7,12,35,8,12,3,8],
            type: 'line',
            smooth: true
        }]
    };
    myChart4.setOption(option2);
    
    var myChart5 = echarts.init(document.querySelector('.sub-title-content2-left-con'));
    var option3 = {
        title: {
            text: 'App Versions',
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
                data:['1.5.6','1.5.5','1.5.4','1.5.3','1.5.2'],
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
    myChart5.setOption(option3);

    var myChart6 = echarts.init(document.querySelector('.sub-title-content2-center-con'));
    var option4 = {
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
    myChart6.setOption(option4);

    var myChart7 = echarts.init(document.querySelector('.as-r'));
    var option5 = {
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
    myChart7.setOption(option5);

    var myChart8 = echarts.init(document.querySelector('.as-t'));
    var option6 = {
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
                        color: [[0.4, '#1abc9c'], [1, '#f0f3f3']]
                    }  
                },  
                axisTick:{show:false},
                axisLabel:{show:false},
                splitLine:{show:false},
                data: [{value: 40, name: ''}]
            }
        ]
    };
    myChart8.setOption(option6);

    var myChart9 = echarts.init(document.querySelector('.kk'));
    var option7 = {
        color: ['#26b99a'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['iPhone 4','','iPhone 3GS','','iPhone 5S','','iPhone 6 Plus','','iPhone 6S Plus','','Other'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    interval:0,//横轴信息全部显示
                    rotate:30,//30度角倾斜显示
                    color:['#888888']
                },
                axisLine:{show:false},//去掉x轴
                axisTick: {show: false} //去掉x轴刻度
            }
        ],
        yAxis : [
            {
                type : 'value',
                max:3000,
                axisLabel:{color:'#888888'},
                axisLine:{show:false},//去掉y轴
                axisTick: {show: false} //去掉y轴刻度
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '80%',
                data:[350,620,200,1500,620,2100,850,2600,1500,1400]
            }
        ]
    };
    myChart9.setOption(option7);

    var myChart11 = echarts.init(document.querySelector('.chart'));
    var option8 = {
        grid: {
            left: '1%',
            right: '12%',
            bottom: 40,
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
                data: ['SSD'],
                axisLine:{show:false},
                axisTick:{show:false},
                axisLabel:{color:'#888888'}
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                stack:'总量',
                color:['#1ABB9C'],
                barWidth:12,
                data:[89]
            },
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:12,
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
                color:['#eee'],
                data:[11]
            }
        ]
    };
    myChart11.setOption(option8);

    var myChart12 = echarts.init(document.querySelector('.chart1'));
    var option9 = {
        grid: {
            left: '1%',
            right: '12%',
            bottom: 40,
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
                data: ['App'],
                axisLine:{show:false},
                axisTick:{show:false},
                axisLabel:{color:'#888888'}
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                stack:'总量',
                color:['#1ABB9C'],
                barWidth:12,
                data:[79]
            },
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:12,
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
                color:['#eee'],
                data:[21]
            }
        ]
    };
    myChart12.setOption(option9);

    var myChart13 = echarts.init(document.querySelector('.chart2'));
    var option10 = {
        grid: {
            left: '1%',
            right: '12%',
            bottom: 40,
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
                data: ['Usr'],
                axisLine:{show:false},
                axisTick:{show:false},
                axisLabel:{color:'#888888'}
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                stack:'总量',
                color:['#1ABB9C'],
                barWidth:12,
                data:[69]
            },
            {
                name:'',
                type:'bar',
                stack:'总量',
                barWidth:12,
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
                color:['#eee'],
                data:[31]
            }
        ]
    };
    myChart13.setOption(option10);

    window.onresize = function () {  //适应页面
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
        myChart9.resize();
        myChart11.resize();
        myChart12.resize();
        myChart13.resize();
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