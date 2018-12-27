<template>
  <div>
    <!-- <div class="projectName">
      <div class="fll projectTitle">项目名称</div>
      <div class="project_desc">嵌入式芯片设计</div>
      <i class="iconfont icon-icon_on_the_right flr"></i>
    </div>
    <div class="projectName">
      <div class="fll projectTitle thisTeacher">项目介绍</div>
      <div class="project_desc project_more fll">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <div class="flr"> <i class="iconfont icon-icon_on_the_right thisTeacher"></i> </div>
    </div>
    <div class="projectName">
      <div class="fll projectTitle">路演视频</div>
      <video src="../../../../static/image/videoa.mp4" width="110" height="100" controls="controls" autoplay="autoplay" />
      <video src="../../../../static/image/videoa.mp4" width="110" height="100" controls="controls" autoplay="autoplay" />
    </div> -->
    <div class="projectResults clearfix">
      <div class="fll projectTitle">项目成果</div>
      <div class="timeResults fll" @click="handleResults"><span>阶段成果</span><i class="iconfont icon-iconset0340 middle"></i></div>
      <div class="timeResults fll" @click="handleReport"><span>阶段报告</span><i class="iconfont icon-jia"></i></div>
    </div>
    <!-- 进度条 -->
    <van-steps direction="vertical" :active="active" active-color="#00b2ff">
      <van-step v-for="(item,index) in dataProcess" :key="index">  
        <h3>{{item.name}}</h3>
        <div v-for="(itemContent,index2) in dataContent" :key="index2" v-if="itemContent.jsContestRegimenId==item.id">
          <p class="gameProcess"><span>{{itemContent.addTimeStr}}</span> <span>{{itemContent.title}}</span> <a href="#">下载</a></p>
          <!-- <p class="gameProcess">2016-07-12 12:40 上传阶段报告<a href="#">查看</a></p> -->
        </div>

      </van-step>
    </van-steps>
    <van-button @click="nextStep">下一步</van-button>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        active: 1,
        list: [],
        dataProcess: [],
        dataContent:[],
        // isShow:true
      };
    },
    methods: {
      nextStep() {
        this.active = ++this.active % 5;
      },
      handleLogin() {
        this.$axios.post("/api/cWapJs/login/doLogin.jsp", "companyId=2&loginType=account_pwd&mobile=12300000001&pwd=7B6F954B6CB4225D30BBF8267498166A").then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$store.commit("CHANGE_USERINFO", res.data)
          }
        })
      },
      // 阶段成果
      handleResults() {
        this.$router.push("/stageResults")

      },
      //  阶段报告
      handleReport() {
        this.$router.push("/stageReport")
      },
      //  赛事进程进度条
      handleProcess() {
        this.$axios.post("/api/cWapJs/competition/ajaxContestRegimen.jsp", "jsCompetitionId=140").then(res => {
          console.log("赛事进程", res)
          this.dataProcess = res.data
        })
      },
      // 各赛事进程内容
      getProcessContent() {
        this.$axios.post("/api/cWapJs/jsCompetitionSchedule/ajaxCompetitionAchievement.jsp", "jsCompetitionId=140&&jsContestRegimenId=42").then(res => {
          console.log("aaa", res)
          this.dataContent = res.data
        })
      }

    },
    created() {
      this.handleLogin()
      this.handleProcess()
      this.getProcessContent()

    }
  };
</script>

<style scoped lang="scss">
  .projectTitle {
    width: 1.8rem
  }

  .project_content .projectName {
    line-height: 1rem;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem
  }

  .project_desc {
    line-height: 1rem;
    width: 4.8rem;
    // 换行显示
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    // 显示两行
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .timeResults {
    color: #1abc9c;
  }

  .project_more {
    line-height: .44rem;
    padding: .1rem 0;
  }

  // 阶段成果
  .projectResults {
    display: flex;
    justify-content: space-between;
    line-height: .88rem;
    padding: 0 .4rem;
    // border-bottom: 1px solid #e2e2e2
  }

  //   .middle{
  //       font-size: .4rem;
  //   }
  .thisTeacher {
    line-height: 1.5rem !important
  }

  .gameProcess {
    background: url(../../../assets/stageImg.svg) no-repeat;
    background-size: 6rem .8rem;
    line-height: .8rem
  }

  /deep/ .van-step h3 {
    color: #666;
    padding: 0;
    margin: 0;
  }

  /deep/ .van-step p {
    color: #fff;
    padding-left: 1rem;
    font-size: .2rem;
    position: relative;
  }

  /deep/ .van-step p span {
    font-size: .2rem
  }

  /deep/ .van-step p a {
    position: absolute;
    right: .8rem;
    color: #ccc
  }
</style>