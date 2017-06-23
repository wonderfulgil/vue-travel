<template>
    <div class="user-box">
        <div class="title"> <span> <i></i><em>基本信息</em></span></div>
        <div class="user-main">
            <div class="from-inf">
                <ul>
                    <li>
                        <span class="from-left">用户名：</span>
                        <span class="control-group" :class="{ 'form-group--error': $v.userInfo.userHomeName.$error }" autocomplete="off">
                            <input type="text" v-model.trim="userInfo.userHomeName" placeholder="请输入用户名"  @input="$v.userInfo.userHomeName.$touch()" >
                        </span>
                        <span class="form-group__message" v-if="!$v.userInfo.userHomeName.required">用户名不能为空</span>
                        <span class="form-group__message" v-if="!$v.userInfo.userHomeName.minLength">用户名不能小于4位</span>
                    </li>
                    <li>
                        <span class="from-left">性别：</span>
                        <span>
                            <input name="sex" type="radio" value="男" v-model="userInfo.sex">
                            <label>男</label>
                            <input name="sex" type="radio" value="女" v-model="userInfo.sex">
                            <label>女</label>
                            <input name="sex" type="radio" value="保密" v-model="userInfo.sex">
                            <label>保密</label>
                        </span>
                    </li>
                    <li>
                        <span class="from-left">手机号码：</span>
                        <span class="control-group" :class="{ 'form-group--error': $v.userInfo.telephone.$error }">
                            <input v-model="userInfo.telephone" placeholder="请输入手机号码" @input="$v.userInfo.telephone.$touch()" autocomplete="off">
                        </span>
                        <span class="form-group__message" v-if="!$v.userInfo.telephone.required">手机号码不能为空</span>
                        <span class="form-group__message" v-if="!$v.userInfo.telephone.test">手机号码格式为13|14|15|17|18开头的11位数字</span>
                    </li>
                    <li>
                        <span class="from-left">邮箱：</span>
                        <span class="control-group" :class="{ 'form-group--error': $v.userInfo.emailnumber.$error }">
                            <input v-model="userInfo.emailnumber" placeholder="请输入你的邮箱" @input="$v.userInfo.emailnumber.$touch()" autocomplete="off">
                        </span>
                        <span class="form-group__message" v-if="!$v.userInfo.emailnumber.required">邮箱不能为空</span>
                        <span class="form-group__message" v-if="!$v.userInfo.emailnumber.email">请输入正确的邮箱地址</span>
                    </li> 
                    <li>
                        <span class="from-left"></span>
                        <a class="from-button" @click="InfoSave($v)" href="javascript:;">保存</a>
                    </li>
                </ul>
              </form>
            </div>
          </div>
    </div>

</template>
<script>
import { required,minLength,email} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            userInfo:{}
        }
    },
    created () {
        this.getPosts()
    },
    validations () {
        return {
            userInfo:{
                userHomeName:{
                    required,
                    minLength: minLength(4)
                },
                telephone:{
                    required,
                    test:
                    function (value) {
                        return /^1[3|4|5|7|8][0-9]\d{8}$/.test(value)
                   }
                },
                emailnumber:{
                    required,
                    email
                },
            },
            validationInfo: ['userInfo.userHomeName', 'userInfo.telephone','userInfo.emailnumber']
        }
    },
    methods: {
        getPosts() {
          this.$axios.get('/api/userInfo',{params: {userId:localStorage.userId,usertoken:localStorage.usertoken}}).then((res) => {
            this.userInfo=res.data
          })
          .catch((error) => {
                //error
                console.log(error)
            })
        },
        InfoSave($v) {
            $v.validationInfo.$touch();
            if($v.validationInfo.$error) return
            this.$axios.post('/api/userInfo', { 'userHomeName': this.userInfo.userHomeName, 'telephone':this.userInfo.telephone, 'emailnumber': this.userInfo.emailnumber, 'sex': this.userInfo.sex }).then((res) => {
                alert("修改成功")
            })
            .catch((error) => {
                //error
                console.log(error)
            })
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

    .form-group--error input, .form-group--error input:focus, .form-group--error input:hover, .form-group--error textarea {
        border-color: #EF1300;
        outline: none;
    }
</style>
