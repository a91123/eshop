<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand"
      href="#">Navbar</a>
    <button class="navbar-toggler"
      ref="toggleButton"
      id="toggleButton"
      type="button"
      @click.prevent="toggleRwdOpen"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"
      :class="{displayBlock:rwdOpen}"
      id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link"
            href="#"><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            @click="toggleOpen"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu"
            id="dropdown-menu"
            :style="{display:'block'}"
            v-if="isOpen"
            aria-labelledby="navbarDropdown">
            <a class="dropdown-item"
              href="#">Action</a>
            <a class="dropdown-item"
              href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item"
              href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div><i @click="dialogVisible = true"
          class="el-icon-user-solid"></i></div>
    </div>
  </nav>
  <teleport to='body'>
    <el-dialog title="提示"
      :lock-scroll="false"
      v-model="dialogVisible">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email">
          <small id="emailHelp"
            class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox"
            class="form-check-input"
            id="exampleCheck1">
          <label class="form-check-label"
            for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit"
          class="btn btn-primary">Submit</button>
      </form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
            @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </teleport>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const toggleButton = ref(null)
    const isOpen = ref(false)
    const dialogVisible = ref(false)
    const isToggle = ref(false)
    const rwdOpen = ref(false)
    const togDai = () => {
      isToggle.value = true
      console.log(isToggle.value)
    }
    const toggleBtn = () => {
      console.log('sadfsad5f4sad56f4')
    }
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const toggleRwdOpen = () => {
      console.log(rwdOpen.value)
      rwdOpen.value = !rwdOpen.value
    }
    return {
      isOpen,
      toggleOpen,
      rwdOpen,
      toggleButton,
      toggleRwdOpen,
      toggleBtn,
      isToggle,
      togDai,
      dialogVisible
    }
  }
});
</script>
<style scoped>
.displayBlock{
  display: block;
}
</style>
<style>
.el-overlay{
  position: absolute;
  top: 0px;
  width: 100%;

}
</style>
