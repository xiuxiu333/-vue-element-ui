<template>
    <div id="app">
        <el-container>
            <el-aside style="width:20%">        <!-- 用element布局宽度必须使用行内样式方可生效 -->
                <div class="shang">
                <p>PRODUCT DATA</p>
                <P>MANAGEMENT</P>    
                </div>
                <div class="xia">
                    <router-link to="/one" tag="div" class="xiaa" active-class="active">
                        <span class="el-icon-mobile-phone"></span>
                        <p>USER PAGE</p>
                    </router-link>
                    <router-link to="/two" tag="div" class="xiaa" active-class="active">
                        <span class="el-icon-tickets"></span>
                        <p>TEMPLATE PAGE</p>
                    </router-link>
                    <router-link to="/three" tag="div" class="xiaa" active-class="active">
                        <span class="el-icon-search"></span>
                        <p>ORDER PAGE</p>
                    </router-link>
                    <router-link to="/four" tag="div" class="xiaa" active-class="active">
                        <span class="el-icon-edit"></span>
                        <p>ENTERING PAGE</p>
                    </router-link>
                    <router-link to="/five" tag="div" class="xiaa" active-class="active">
                        <span class="el-icon-tickets"></span>
                        <p>PRODUCT PAGE</p>
                    </router-link>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  background: #d1cfcd;
}
.el-aside {
  height: 100%;
  border-right: 1px solid #d1cfcd;
}
.shang {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid lemonchiffon;
  padding: 10px 0;
}
.shang p {
  text-align: center;
  width: 100%;
  margin: 5px 0;
  font-size: 2rem;
}
.xia {
  width: 80%;
  padding-left: 26%;
  padding-top: 100px;
  font-size: 14px;
}
.xia .xiaa {
  width: 100%;
  padding: 40px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.xia .xiaa span {
  font-size: 26px;
  margin-right: 20px;
  font-weight: bold;
}
.active {
  color: #eb5e28;
}
.el-main {
  margin: 0;
  padding: 0;
  background: #f4f3ef;
}
</style>
