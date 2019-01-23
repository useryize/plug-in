<template>
    <section>
        <div class="calendar-top">
            <div v-for="(item, index) in week" :key="index">{{item}}</div>
        </div>
        <div class="calendar-box">
            <div v-for="(item, index) in days" :key="index" :class="{'focu': isStyle(item, 'focu'), 'gray': isStyle(item, 'gray')}">{{item.getDate()}}</div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            week: ['一', '二', '三', '四', '五', '六', '日'],
            days: [],
            yzYear: 1990, // 年
            yzMonth: 1, // 月
            yzDay: 1, // 日
            yzWeek: 0,
            nDate: new Date()
        };
    },
    created () {
        this._initData();
    },
    methods: {
        // 处理日期上的各种样式
        isStyle (item, type) {
            // 是否为今天
            if (type === 'focu') {
                return this.nDate.getFullYear() === item.getFullYear() &&
                this.nDate.getMonth() === item.getMonth() &&
                this.nDate.getDate() === item.getDate();
            }
            // 是否为本月
            if (type === 'gray') {
                return this.yzMonth !== item.getMonth() + 1;
            }
        },
        _initData (cur) {
            let day = new Date();
            if (cur) {
                day = new Date(cur);
            }
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
