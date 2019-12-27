Vue.component('coupon',{
    template: `
        <div>
            <input  @blur="applied">
        </div>
    `,
    methods:{
        applied: function(){
            this.$emit('entered')
        }
    }
})

let vue = new Vue({
    el : '#root',
    data : {
        Title: 'Communicating Parent component from child component',
        isCouponApplied: false
    },
    methods: {
        couponEntered: function(){
            console.log('test');
            this.isCouponApplied = true
        }
    }
})