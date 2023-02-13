<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <el-input v-model="user.name" placeholder="이름"></el-input>
    <el-input v-model="user.address" placeholder="주소"></el-input>
    <el-input v-model="user.phone" placeholder="전화번호"></el-input>
    <el-radio-group v-model="user.hasDog">
      <el-radio label="반려견 있음" :value="true"></el-radio>
      <el-radio label="반려견 없음" :value="false"></el-radio>
    </el-radio-group>
    <el-button @click="changeUser">Submit</el-button>
  </div>
</template>

<script>
export default {
  props: ['name', 'address', 'phone', 'hasDog'],
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user.name = this.name
    this.user.address = this.address
    this.user.phone = this.phone
    this.user.hasDog = this.hasDog
  },
  methods: {
    changeUser() {
      console.log(this.user)
      this.$emit('child', this.user)
    }
  }
}
</script>
