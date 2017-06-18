<template>
   <div class="user-box">
        <div class="title"><span><i></i><em>账户安全</em></span></div>
        <div class="from-inf">
            <ul>
                <li>
                    <span class="from-left">原密码：</span>
                    <span class="control-group" :class="{ 'form-group--error': $v.oldPassword.$error }">
                        <input type="password" v-model="oldPassword" placeholder="请输入原密码"  @input="$v.oldPassword.$touch()" autocomplete="off">
                    </span>
                    <span class="form-group__message" v-if="!$v.oldPassword.required">密码不能为空</span>
                    <span class="form-group__message" v-if="!$v.oldPassword.minLength">密码不能小于6位</span>
                </li>
                <li>
                    <span class="from-left">新密码：</span>
                    <span class="control-group" :class="{ 'form-group--error': $v.newPassword.$error }">
                        <input type="password" v-model="newPassword" placeholder="请输入新密码" id="password" @input="$v.newPassword.$touch()" autocomplete="off">
                    </span>
                    <span class="form-group__message" v-if="!$v.newPassword.required">密码不能为空</span>
                    <span class="form-group__message" v-if="!$v.newPassword.minLength">密码不能小于6位</span>
                </li>
                  <li>
                    <span class="from-left">确认新密码：</span>
                    <span class="control-group" :class="{ 'form-group--error': $v.newrRpassword.$error }">
                        <input type="password" v-model="newrRpassword" placeholder="确认新密码："  @input="$v.newrRpassword.$touch()" autocomplete="off">
                    </span>
                    <span class="form-group__message" v-if="!$v.newrRpassword.required">密码不能为空</span>
                    <span class="form-group__message" v-if="!$v.newrRpassword.sameAsNewPassword">确认密码需与新密码一致</span>
                </li>
                <li>
                    <span class="from-left"></span>
                    <a class="from-button" @click="PasswordSave($v)" href="javascript:;">保存</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { required,minLength,sameAs} from 'vuelidate/lib/validators'
export default {
  data () {
    return {
        oldPassword: '',
        newPassword:'',
        newrRpassword:''
    }
  },
   validations () {
        return {
            oldPassword: {
                required,
                minLength: minLength(6)
            },
            newPassword: {
                required,
                minLength: minLength(6)
            },
            newrRpassword:{
                required,
                sameAsNewPassword: sameAs('newPassword')
            },
            validationPassword: ['oldPassword', 'newPassword', 'newrRpassword']
        }
    },
    methods: {
        PasswordSave($v) {
            $v.validationPassword.$touch()
            if($v.validationPassword.$error) {
                return
            }else{
                this.$axios.post('/api/password', { 'oldPassword': this.oldPassword, 'newPassword': this.newPassword}).then((res) => {
                    alert("密码设置成功")
                })
                .catch((error) => {
                    //error
                    console.log(error)
                })
            }
            
        }
    }
}
</script>
<style>  
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

    .form-group--error input, .form-group--error input:focus, . input:hover, .form-group--error textarea {
        border-color: #EF1300;
        outline: none;
    }
</style>
