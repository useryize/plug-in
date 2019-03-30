// let User = {
//     count: 1,
//     action: {
//         getCoint: function () {
//             return this.count;
//         }
//     }
// }
// var getCoint = User.action.getCoint;
// var action = User.action
// setTimeout(() => {
//     console.log(User.action.getCoint());
// });
// console.log(getCoint()); 

// undefined
// undefined   setTimeout



function interceptMoney (mny, cutFloat) {
    // mny 待转换金额； cutFloat： 保留小数位
    let money = '--';
    if (mny && mny !== 'undefined') {
        mny = cutFloat ? mny.toFixed(cutFloat) : mny;
        mny = mny + '';
        money = mny.indexOf('.') !== -1 ? mny.replace(/(\d{1,3})(?=(\d{3})+\.)/g, '$1,') : mny.replace(/(\d{1,3})(?=(\d{3})+\b)/g, '$1,');
    }
    console.log(money)
    // return money;
}



function toThousands(mny, cutFloat) {
    let money = '--';
    if (mny && mny !== 'undefined') {
        mny = cutFloat ? mny.toFixed(cutFloat) : mny;
        money 
    }
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+\b)/g, '$1,');
}


function arr () {
    let arr = [12, 15, 9, 20, 6, 31, 24, 6, 15];
    let newArr = [];
    arr.forEach((item) => {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item);
        }
    });
    newArr.sort(function (a,b) {
        return a-b;
    })
    console.error(newArr);
}




class observation {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    set name (val) {
        change(name, val);
        name = val;
    }
}
function change(oldVal, newVal) {
    console.log('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
}
let targetObj = new observation(28, 'YIZE');


targetObj.name = 'newYize';
console.info(targetObj)


