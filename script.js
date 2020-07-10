


Vue.component('task',{
    props: ['data'],
    data() {
      return {
      }
    },
    methods: {
      task_done(){
        this.$emit('task_done')
      }
    },
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
        }/*,
        show_input(){
            if(isActive){
                isActive == false;
            } else {
                isActive == true;
            }
        }*/
    }
});


