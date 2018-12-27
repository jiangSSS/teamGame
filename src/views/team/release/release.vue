<template>
  <div>
    <Header></Header>
    <div>
      <div v-for="(item,index) in teamData" :key="index">
        <!-- <div>{{item.title}}</div> -->
        <div>
          <div class="fll projectTitle">所在地区</div>
          <div class="project_desc">{{item.title}}</div>
        </div>
        
        <!-- <quill-editor class="middle" v-model="teamData.content" :options="editorOption" @change="handleChange"></quill-editor> -->
        
      </div>
      <div class="sumbitBox">
          <mt-button class="sumbit" @click="getTeamRelease">发布风采</mt-button>
        </div>

    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header/header.vue"
  // import { quillEditor, Quill } from 'vue-quill-editor'
  // import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
  // Quill.register('modules/ImageExtend', ImageExtend)
  // const toolbarOptions = [
  //   ['bold', 'italic', 'underline', 'strike'],        //加粗，斜体，下划线，删除线
  //   // ['blockquote', 'code-block'],                     //引用，代码块
  //   [{ 'header': 1 }, { 'header': 2 }],               // 标题
  //   [{ 'color': [] }, { 'background': [] }],          // 字体颜色，字体背景颜色
  //   [{ 'align': [] }],        //对齐方式
  //   // ['clean'],        //清除字体样式
  //   ['image']        //上传图片
  // ]
  export default {
    components: {
      Header,
      // quillEditor
    },
    data() {
      return {
        teamData: []
          
        ,
        // teamId: "",
        //   title: "",
        //   content: "",
        //   // images: ""

        // editorOption: {
        //   modules: {
        //     ImageExtend: {
        //       loading: true,
        //       name: 'img',
        //       action: '',
        //       // /component/upload2/uploadByForm
        //       response: (res) => {
        //         return res.component.upload2.uploadByForm
        //       }
        //     },
        //     toolbar: {
        //       container: toolbarOptions,  // 工具栏
        //       handlers: {
        //         'image': function () {
        //           document.querySelector('.quill-image-input').click()
        //         }
        //       }
        //     }
        //   }
        // }
      }
    },
    methods: {
      
      getTeamRelease() {
        this.$axios.post("/api/cWapJs/jsCompetitionSchedule/doAddTeamMien.jsp", "jsCompetitionId=140&&teamId=94",this.teamData).then(res => {
          console.log("发布>>", res)
          // if (res.code == 200) {
          this.teamData = res.data
          // setTimeout(() => {
          //     this.$router.push("/index")
          // }, 1000)
          // } 
        })
      }

    },
    created() {
      this.getTeamRelease()
    }
  };
</script>

<style scoped lang="scss">
  /deep/ .ql-editor {
    min-height: 3rem;
  }

  .sumbitBox {
    text-align: center;
    margin: .5rem 0;
  }

  .sumbit {
    padding: .2rem 2.4rem;
    background: #1abc9a;
    color: #fff;
    border-radius: .6rem
  }
</style>