import { webview } from 'miox';

export default class skill extends webview {
    constructor(node){
        super(node);
    }

    data(){
        return function(){
            return {
                userList:[],
                skill:0,
            }
        }
    }
    ready(){
        setTimeout(() =>{
            this.$vm.skill=65;
        },410)
    }
    render(){
        return require('../../templates/skill.html')
    }
}
