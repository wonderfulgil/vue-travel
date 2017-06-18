<template>
  <div class="reg-form">
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.userName.$error }" autocomplete="off">
                <input type="text" v-model.trim="userName" placeholder="请输入用户名"  @input="$v.userName.$touch()" >
            </div>
            <span class="form-group__message" v-if="!$v.userName.required">用户名不能为空</span>
            <span class="form-group__message" v-if="!$v.userName.minLength">用户名不能小于4位</span>
        </div>
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.password.$error }">
                <input type="password" v-model="password" placeholder="请输入密码" @input="$v.password.$touch()" autocomplete="off">
            </div>
            <span class="form-group__message" v-if="!$v.password.required">密码不能为空</span>
            <span class="form-group__message" v-if="!$v.password.minLength">密码不能小于6位</span>
        </div>
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.repassword.$error }">
                <input type="password" v-model="repassword" placeholder="请再次输入密码" @input="$v.repassword.$touch()" autocomplete="off">
            </div>
            <span class="form-group__message" v-if="!$v.repassword.required">密码不能为空</span>
            <span class="form-group__message" v-if="!$v.repassword.sameAsPassword">确认密码需与密码一致</span>
        </div>
        <div class="form-line">
            <div class="control-group" :class="{ 'form-group--error': $v.phone.$error }">
                <input v-model="phone" placeholder="请输入手机号码" @input="$v.phone.$touch()" autocomplete="off">
            </div>
            <span class="form-group__message" v-if="!$v.phone.required">手机号码不能为空</span>
            <span class="form-group__message" v-if="!$v.phone.test">手机号码格式为13|14|15|17|18开头的11位数字</span>
        </div>
        <div class="form-line">
            <div class="form-btn">
                <a class="button" @click="onReg($v)" href="javascript:;">注册</a>
            </div>
        </div>
    </div>
</template>
<script>
import { required,minLength,sameAs} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            userName: '',
            password: '',
            repassword:'',
            phone:'',
        }
    },
    validations () {
        return {
            userName:{
                required,
                minLength: minLength(4)
            },
            password: {
                required,
                minLength: minLength(6)
            },
            repassword:{
                required,
                sameAsPassword: sameAs('password')
            },
            phone:{
                required,
                test:
                function (value) {
                    return /^1[3|4|5|7|8][0-9]\d{8}$/.test(value)
               }
            },
            validationGroup: ['userName', 'password', 'password','phone']
        }
    },
    methods: {
        onReg($v) {
            $v.validationGroup.$touch()
            if($v.validationGroup.$error) return
            this.$axios.post('/api/reg', { 'userName': this.userName, 'password': this.password,'phone':this.phone }).then((res) => {
                    this.$emit('has-log', res.data)
            })
            .catch((error) => {
                //error
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    .reg-form {
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
