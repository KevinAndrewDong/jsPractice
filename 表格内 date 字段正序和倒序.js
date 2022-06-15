var data = [{
    name: "音乐1",
    time: "2017-08-18 13:23:21",
},{
    name: "音乐2",
    time: "2018-03-18 19:23:21",
},{
    name: "音乐3",
    time: "2019-03-24 19:23:21",
},{
    name: "音乐4",
    time: "2017-05-16 19:23:21",
},{
    name: "音乐5",
    time: "2020-12-12 19:23:21",
}];
//时间排序
//prop：对象数组排序的键，
//align：排序方式，"positive"正序，"inverted"倒序。
function compare(prop,align){
    return function(a,b){
        var value1=a[prop];
        var value2=b[prop];
        if(align=="positive"){//正序
            return new Date(value1)-new Date(value2);
        }else if(align=="inverted"){//倒序
            return new Date(value2)-new Date(value1);
        }
    }
}
data.sort(compare('time','positive'));
console.log(data);