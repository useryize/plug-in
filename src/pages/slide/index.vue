<template>
    <div class="slide" ref="slide">
        <div class="slide-grow" ref="slideGrow">
            <div>第一页</div>
            <div>第二页</div>
            <div>第三页</div>
        </div>
        <div class="title">插件</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isAbout: false // 滑动到左右两端是否禁止滑动
        };
    },
    created () {
        window.addEventListener('resize', () => {
            this._getSildeWidth();
        });
    },
    mounted () {
        this.$nextTick(() => {
            this._getSildeWidth();
            this._getTouch();
        });
    },
    methods: {
        _getTouch () {
            let slide = this.$refs.slide;
            let slideWidth = slide.clientWidth;
            let slideGrow = this.$refs.slideGrow;
            let slideGrowLen = slideGrow.children.length;
            /* eslint-disable */
            let startX,  // 滑动开始 X抽坐标
                moveX,   // 移动过程中 X抽坐标
                endX = 0,  // 手指X轴移动距离
                width = 0,  // 容器webkitTransform X值
                num = 0; // 记录滑动到哪一个item
            /* eslint-enable */
            slideGrow.style.transitionDuration = '.5s';
            slideGrow.style.transform = 'translateX(-0px)';
            slide.addEventListener('touchstart', (res) => {
                let translateX = slideGrow.style.transform;
                startX = res.touches[0].pageX;
                width = parseInt(translateX.substring(translateX.indexOf('(') + 1, translateX.indexOf('px)')));
                // console.error(width);
            });
            slide.addEventListener('touchmove', (res) => {
                moveX = res.touches[0].pageX;
                endX = startX - moveX;
                // 手指滑动方向 左正右负
                if (this.isAbout) {
                    // 滑动最左边，手指滑动方向为右 禁止滑动
                    if (num === 0 && endX < 0) {
                        return;
                    }
                    // 滑动到最右边，手指滑动方向为左 禁止滑动
                    if (num === slideGrowLen && endX > 0) {
                        return;
                    }
                }
                // 添加Dom动画
                slideGrow.style.transform = `translateX(${width - endX}px)`;
            });
            slide.addEventListener('touchend', (res) => {
                /* eslint-disable */
                let direction = endX > 0 ? true : false;  // 手指向左滑: true, 右： false
                /* eslint-enable */
                if (direction) {
                    // 手指左滑动
                    num >= slideGrowLen - 1 ? num = slideGrowLen - 1 : num++;
                } else {
                    // 手指右滑动
                    num === 0 ? num = 0 : num--;
                }
                slideGrow.style.transform = `translateX(${-num * slideWidth}px)`;
            });
        },
        _getSildeWidth () {
            // 初始化item宽度
            let slideWidth = +this.$refs.slide.clientWidth,
                slideGrow = this.$refs.slideGrow,
                slideGrowChildren = slideGrow.children,
                width = 0;
            for (let item of slideGrowChildren) {
                item.style.width = slideWidth + 'px';
                width += slideWidth;
                // console.log(width);
            };
            slideGrow.style.width = width + 'px';
        }
    }
};
</script>
<style >
    body{background-color: #f3f3f3}
    .slide{width: 100%;overflow: hidden;}
    .slide-grow{overflow: hidden;}
    .slide-grow > div{height: 2rem;float: left; text-align: center; background-color: #ccc;line-height: 2rem; color: #f3f3f3;font-size: .14rem}
    .slide .title {color: rgb(33, 80, 235); text-align: center; line-height: .4rem;}
    /* .slide-grow > div:nth-child(1) {background-color: rgb(17, 38, 134)}
    .slide-grow > div:nth-child(2) {background-color: #bd2222}
    .slide-grow > div:nth-child(3) {background-color: #000} */
</style>
