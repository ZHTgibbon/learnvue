var app = new Vue({ //创建Vue对象实例
    el: "#app",
    //挂载DOM元素的ID
    data: {
        tasks: [{
            text: "Vue.js - 是一套构建用户界面的渐进式框架",
            complete: false
        },
            {
                text: "Bootstrap 响应式布局",
                complete: false
            },
            {
                text: "Webpack前端资源模块化管理和打包工具",
                complete: false
            },
            {
                text: "Yarn 中文手册Yarn 是一个快速、可靠、安全的依赖管理工具",
                complete: true
            },
            {
                text: "JavaScript语言精粹",
                complete: false
            },
            {
                text: "JavaScript高级程序设计",
                complete: true
            }],
        newTask: "程序员的修炼之道" //默认值
    },
    methods: {
        addTask: function(event) { //添加任务
            event.preventDefault();
            this.tasks.push({
                text: this.newTask,
                complete: false
            });
            this.newTask = "";
        },
        editTask: function(task) { //编辑任务
            //移除当前点击task
            this.removeTask(task);

            //更新vue实例中newTask值
            this.newTask = task.text;
        },
        removeTask: function(task) { //删除任务
            //指向Vue实例中的tasks
            _tasks = this.tasks;
            //remove
            _tasks.forEach(function(item, index) {
                if (item.text == task.text) {
                    _tasks.splice(index, 1);
                }
            })
        },
        completeTask: function(task) { //任务完成状态
            task.complete = true; //设置任务完成的状态
        }
    },
    //用于计算属性，属性的计算是基于它的依赖缓存(如vue实例中的tasks)
    //只有当tasks数据变化时,才会重新取值
    computed: {
        remainTask: function() { //筛选未完成的记录
            return this.tasks.filter(function(task) { //filter过滤器
                return ! task.complete;
            })
        },
        filterTask: function() { //筛选已完成的记录
            return this.tasks.filter(function(task) {
                return task.complete;
            })
        }
    }
});