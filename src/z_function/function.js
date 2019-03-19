
/**
 * 
 * 原型
 */
function proto () {
    var A = function () {
        this.title = 'hello word';
        this.say = function () {
            console.error('t ', this.title);
        }
    };
    A.prototype = {
        say: function () {
            console.error('p ' + this.title);
        }
    }
    var AA = new A();
    var BB = new A();
    AA.title += 'a'
    console.error(BB.say());
};

/**
 * 
 * setTimeout与Promise优先级 
 * Promise大于setTimeout
 */

function setTimeout () {

    setTimeout(() => {console.error(4)}, 0);
    var p = new Promise(resolve => {
        console.error(1);
        for(let i =0; i<10000; i++){i == 9999 &&resolve();}
        console.error(2);
    }).then(()=> {console.error(5)});
    console.error(3);

    // setTimeout(function(){
    //     console.log(1);
    // },0);
    // new Promise(function executor(resolve){
    //     resolve();
    // }).then(function(){
    //     console.log(2);
    // })

}

/**
 * apply call 
 */

 function applyCallBind () {
    this.prototype = {
        oneApply: function () {
            let num = [1,2];
            let str = ['3', '4'];
            num.push.apply(num, str);
            console.log(num);
        }
    }
    console.log(this.prototype.oneApply());
 }

applyCallBind();
