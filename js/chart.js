window.onload = function(){
    var myChart = echarts.init(document.querySelector('.box-con'));
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '2%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['January','February','March','April','May','June','July'],
                axisLabel:{interval:0}//x轴全部显示
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'',
                type:'line',
                color:'#b3cdd2',
                areaStyle: {},
                lineStyle:{
                    normal:{
                        color:'#4e8a96',
                        width:3
                    }
                },
                smooth:true,
                data:[81, 22, 66, 10, 100, 3, 2]
            },
            {
                name:'',
                type:'line',
                color:'#bce9e0',
                areaStyle: {},
                lineStyle:{
                    normal:{
                        color:'#64cdb7',
                        width:3
                    }
                },
                smooth:true,
                data:[30, 73, 8, 40, 20, 85, 9]
            }
        ]
    };
    myChart.setOption(option);

    var myChart1 = echarts.init(document.querySelector('.ss1'));
    var option1 = {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        grid: {
            left: '1%',
            right: '1%',
            bottom: '2%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['January','February','March','April','May','June','July'],
                axisLabel:{interval:0}
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                color:'#26b99a',
                barWidth:20,
                data:[51,30,40,28,91,50,46]
            },
            {
                name:'',
                type:'bar',
                color:'#03586a',
                barWidth:20,
                data:[41,56,25,49,71,33,11]
            }
        ]
    };
    myChart1.setOption(option1);

    var myChart2 = echarts.init(document.querySelector('.ss2'));
    var option2 = {
        tooltip: {
            trigger: 'axis'
        },
        radar: [
            {
                indicator: [
                    {text: 'Eating', max: 100},
                    {text: 'Running', max: 100},
                    {text: 'Cycling', max: 100},
                    {text: 'Coding', max: 100},
                    {text: 'Designing', max: 100},
                    {text: 'Sleeping', max: 100},
                    {text: 'Drinking', max: 100}
                ],
                radius: 95,
                center: ['50%','50%'],
            }
        ],
        series: [
            {
                type: 'radar',
                symbol:'circle',
                 tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal:{
                        color:'#cddee1', 
                        lineStyle:{
                            color:'#2a6f7e',
                            width:5
                        },
                        areaStyle: {type: 'default',color:'#cddee1'}
                    }
                },
                data: [
                    {
                        value: [65,40,55,56,81,90,59],
                        name: ''
                    }
                ]
            },
            {
                type: 'radar',
                symbol:'circle',
                 tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal:{
                        color:'#c1ebe2', 
                        lineStyle:{
                            color:'#46c3a9',
                            width:5
                        },
                        areaStyle: {type: 'default',color:'#c1ebe2'}
                    }
                },
                data: [
                    {
                        value: [28, 100, 27, 96, 19,40,48],
                        name: ''
                    }
                ]
            }
        ]
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(document.querySelector('.ss3'));
    var option3 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:['#455c73','#9b59b6','#bdc3c7','#26b99a','#3498db'],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['45%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:310},
                    {value:150},
                    {value:368},
                    {value:380},
                    {value:335}
                ]
            }
        ]
    };
    myChart3.setOption(option3);

    var myChart4 = echarts.init(document.querySelector('.ss4'));
    var option4 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#455c73','#9b59b6','#bdc3c7','#26b99a','#3498db'],
        series : [
            {
                type: 'pie',
                radius : '75%',
                center: ['50%', '50%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:328},
                    {value:150},
                    {value:380},
                    {value:430},
                    {value:310}
                ]
            }
        ]
    };
    myChart4.setOption(option4);
    
    var myChart5 = echarts.init(document.querySelector('.ss5'));
    var option5 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : true,
        color:['#455c73','#9b59b6','#bdc3c7','#26b99a','#3498db'],
        series : [
            {
                name:'',
                type:'pie',
                radius : [10, 100],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data:[
                    {value:328},
                    {value:150},
                    {value:380},
                    {value:430},
                    {value:300}
                ]
            }
        ]
    };
    myChart5.setOption(option5);

    window.onresize = function () {  //适应页面
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize(); 
        myChart4.resize();
        myChart5.resize();
    }
}
