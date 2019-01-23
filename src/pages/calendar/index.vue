<template>
    <section>
        <div class="header">
            <div @click="selectMonth('pre')">上个月</div>
            <div>{{focuDate.getFullYear()}}年{{focuDate.getMonth() + 1}}月{{focuDate.getDate()}}日</div>
            <div @click="selectMonth('next')">下个月</div>
            <div @click="selectMonth('today')">今天</div>
        </div>
        <div class="calendar-top">
            <div v-for="(item, index) in week" :key="index">{{item}}</div>
        </div>
        <div class="calendar-box">
            <div @click="dayClick(item, index)" v-for="(item, index) in days" :key="index" :class="{'focu': isStyle(item, 'focu'), 'gray': isStyle(item, 'gray')}">{{item.getDate()}}</div>
        </div>
    </section>
</template>

<script>
const nDate = new Date();
export default {
    data () {
        return {
            week: ['一', '二', '三', '四', '五', '六', '日'],
            days: [],
            yzYear: 1990, // 年
            yzMonth: 1, // 月
            yzDay: 1, // 日
            yzWeek: 0,
            focuDate: nDate // 变量 用于选择日期 默认为今天
        };
    },
    created () {
        this._initData();
    },
    methods: {
        // 上个月
        selectMonth (type) {
            let day = this.focuDate;
            let getMonth = '';

            // 上个月
            if (type === 'pre') {
                getMonth = day.getMonth() - 1;
            }
            // 下个月
            if (type === 'next') {
                getMonth = day.getMonth() + 1;
            }
            this.focuDate = new Date(day.getFullYear(), getMonth, day.getDate());

            // 今天
            if (type === 'today') {
                this.focuDate = nDate;
            }
            this._initData(this.focuDate);
        },
        // 处理日期上的各种样式
        isStyle (item, type) {
            // 是否为今天
            if (type === 'focu') {
                return this.focuDate.getFullYear() === item.getFullYear() &&
                this.focuDate.getMonth() === item.getMonth() &&
                this.focuDate.getDate() === item.getDate();
            }
            // 是否为本月
            if (type === 'gray') {
                return this.yzMonth !== item.getMonth() + 1;
            }
        },
        dayClick (item, index) {
            this.focuDate = item;
            this._initData(item);
        },
        _initData (cur) {
            let day = new Date();
            if (cur) {
                day = new Date(cur);
            }
            // 置空总天数 days
            this.days = [];
            // 展示月份 从1号开始计算
            day = new Date(day.getFullYear(), day.getMonth(), 1);
            // 设置当天的年、月、日、星期
            this.yzYear = day.getFullYear();
            this.yzMonth = day.getMonth() + 1;
            this.yzDay = day.getDate();
            this.yzWeek = day.getDay() === 0 ? 7 : day.getDay();
            // 获取当天之前的天数
            for (let i = this.yzWeek - 1; i > 0; i--) {
                let d = new Date(day);
                d.setDate(this.yzDay - i);
                this.days.push(d);
            }

            // 获取当天之后的天数
            for (let i = 0; i <= 35 - this.yzWeek; i++) {
                let d = new Date(day);
                d.setDate(this.yzDay + i);
                this.days.push(d);
            }
        }
    }
};
</script>
