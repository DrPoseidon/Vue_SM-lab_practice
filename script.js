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
    <div v-if='data.done' class="cur_case" @click="task_done()">
    <p class="cur_case_p">{{data.title}}</p>
    <img class="done" src="img/empty.png">
</div>
<div v-else class="cur_case" @click="task_done()">
<p class="cur_case_p done_c">{{data.title}}</p>
<img class="done" src="img/add.png">
</div>
    `
});

var vue = new Vue({
    el:'#main_div',
    data: {
        new_task:{
            title:'',
            done:'',
        },
        seen:false,
        isActive:false,
tasks:[
],
date: new Date(),
    },
    methods:{
        add_task(){
            if(this.new_task.title != ''){
                this.tasks.push({
                    title: this.new_task.title,
                    done: 1
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
        },
        action(id){
            if(this.tasks[id].done){
                this.tasks[id].done = 0;
                this.tasks.sort(function(a, b){
                    return a.done-b.done
                  })
            } else {
                this.tasks[id].done = 1;
                this.tasks.sort(function(a, b){
                    return a.done-b.done
                  })
            }
            return this.tasks[id].done;
          }
    }
});