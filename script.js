Vue.component('task',{
    props: ['data'],
    template: `
    <div class="cur_case">
    <p class="cur_case_p">{{data.title}}</p>
    <img class="done" src="img/empty.png">
</div>
    `
});

var vue = new Vue({
    el:'#main_div',
    data: {
        new_task:{
            title:'',
        },
        seen:false,
        isActive:false,
tasks:[
],
    },
    methods:{
        add_task(){
            if(this.new_task.title != ''){
                this.tasks.push({
                    title: this.new_task.title
                });
            }
            this.new_task.title='';
        },
        show_input(){
            if(!this.seen){
                this.seen = true;
                this.isActive = true;
            } else {
                this.seen = false;
                this.isActive = false;
            }
            console.log(this.getDate);
        },
    }
});