<template>
    <div class="login-form">
        <div class="form-error">
              {{errorText}}
        </div>
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.userName.$error }" autocomplete="off">
                <input type="text" v-model.trim="userName" placeholder="请输入用户名" id="userName" 
            @input="$v.userName.$touch()" >
            </div>
            <span class="form-group__message" v-if="!$v.userName.required">用户名不能为空</span>
        </div>
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.password.$error }">
                <input type="password" v-model="password" placeholder="请输入密码" id="password" @input="$v.password.$touch()" autocomplete="off">
            </div>
            <span class="form-group__message" v-if="!$v.password.required">密码不能为空</span>
        </div>
        <div class="form-line">
            <div class="form-btn">
              <a class="button" @click="onLogin" href="javascript:;">登录</a>
            </div>
        </div>
    </div>
</template>
<script>
import { required} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            userName: '',
            password: '',
            errorText: ''
        }
    },
    validations () {
        return {
            userName:{
                required
            },
            password: {
                required
            }
        }
    },
    methods: {
        onLogin () {
            if(this.userName===''||this.password===''){
               this.errorText="用户名或密码不能为空"
            }else {
                this.errorText="",
                this.$axios.post('/api/login', { 'username': this.userName, 'password': this.password }).then((res) => {
                  this.$emit('has-log', res.data)
                })
                .catch((error) => {
                          //error
                        this.errorText=error
                })
            }
        }
    },
    computed:{
        fillInfo:function(){
           return this.userName!=""&&this.password!=""
         }
    },
    watch:{
        fillInfo:function(val,oldval){
            if(this.fillInfo){                             
                this.errorText=""
            } 
        }
      
    }
}
</script>
<style scoped>
    .login-form {
        text-align: center;
    }
    .form-line{
        padding: 9px 9px 9px 10px;
    }
    .form-line input{
        width: 279px;
        padding: 9px 9px 9px 10px;
        background-color: #fff;
        border: 1px solid #d0d6d9;
        box-shadow: 2px 0px 5px 0px #fff;
    }
    
    .form-error{
        font-size: 12px;
        height: 20px;
        display: block;
        color: #EF1300;
        text-align: left;
        text-indent: 22px;
    }
    

    .form-btn a{
        color: #fff;
        background-color:#fe7b9e;
        border:1px solid #e7325d;
        cursor: pointer;
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-radius: 5px;
        display: inline-block;
        text-align: center;
    }
    .form-btn a:hover{
        background-color: #f93867;
        color: #fff;
    }

/*验证*/
   .form-group__message{
        height: 20px;
        color: #EF1300;
        text-align: left;
        text-indent: 22px;
        display: none;
        font-size: 12px;
    }
    .form-group--error+.form-group__message {
        display: block;
        color: #EF1300;
    }

    .form-group--error input, .form-group--error input:focus, .form-group--error input:hover, .form-group--error textarea {
        border-color: #EF1300;
        outline: none;
    }
   
</style>
