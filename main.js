 
Vue.component('tabs',{
    props:{
        data: {
            'data':'data'
        },
    },
    template: `
        <div>
            <div class = "tabs">
                <ul>
                    <li v-for="person in data" :class="{ 'is-active': person.is_selected }" @click=selectTab(person)><a href="#">{{ person.name }}</a></li>
                </ul>
            </div>
            <div class="tab-content">
                <tabContent v-for="person in data" v-show="person.is_selected">
                    {{person.details}}
                </tabContent>
            </div>
        </div>
    `,
    data (){
        return {
            'tabs': []
        }
    },
    created(){
        this.tabs = this.$children;
    },
    mounted(){
        console.log(this.$children);
    },
    computed: {
        computehref: function(){
            return '';
        }
    },
    methods: {
        selectTab: function(selectedTab){
            alert();
            console.log('selected',selectedTab);
            console.log(this.data);
            this.data.forEach( tab => tab.is_selected = (selectedTab.name == tab.name) )
        }
    }

})

Vue.component('tabContent',{
    template:`
        <div><slot></slot></div>
    `
})

let vue = new Vue({
    el : '#root',
    data : {
        Title: 'Switching Tabs',
        persons : [
            {name:"Sachin Tendulkar",is_selected:true,image:"https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",details:"Sachin Ramesh Tendulkar born on 24 April 1973 is an Indian former international cricketer and a former captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricke",twitter_name:"sachin_rt"},
            {name:"Rahul Dravid",is_selected:false,image:"https://pbs.twimg.com/profile_images/1132232707356782593/kxpMxFMr_400x400.jpg",details:"Rahul Sharad Dravid  born on 11 January 1973 is a former Indian cricketer and captain of the Indian national team. He is the Director of Cricket Operations at National Cricket Academy, Bengaluru, India",twitter_name:"rahuldrav11d"},
            {name:"Mahendra Singh Dhoni",is_selected:false,image:"https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg",details:"Mahendra Singh Dhoni born on 7 July 1981 commonly known as MS Dhoni, is an Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014 ",twitter_name:"msdhoni"}
        ]
        
    },
    methods : {
        
    },
    mounted: function(){
        console.log('mounted');
    }
})