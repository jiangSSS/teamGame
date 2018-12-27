<template>
    <div>
        <Header></Header>
        <div>
            <div class="projectName">
                <div class="fll">项目阶段</div>
                <!-- <section class="project_desc">
                    <option value="1">jsContestRegimenId=41</option>
                </section> -->
                <select class="fll select" v-model="gameType">
                    <option v-for="(item,index) in type" :key="index" :value="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="projectName">
                <div class="fll">项目阶段</div>
                <textarea class="textarea  fll" rows="4" cols="20" placeholder="请输入阶段报告" />
                </div>
            <div class="sumbitBox">
                <mt-button class="sumbit" @click="getResults(gameType)">保存</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/header.vue"
    export default {
        components: {
            Header
        },
        data() {
            return {
                type: [],
                gameType:"",
                formData:{
                    // jsCompetitionId:140,
                    // jsContestRegimenId:42,
                    // achievementPath:"",
                    // achievementContent
                },
                isShow:true,

            };
        },
        methods: {
            //  赛事类型
            getStage() {
                this.$axios.post("/api/cWapJs/jsCompetitionSchedule/ajaxGetJsProblems.jsp", "jsCompetitionId=140", this.type).then(res => {
                    console.log(res)
                    this.type = res.data
                    // this.id = res.data.id     
                })
            },
            //  提交保存
            getResults(){
                    this.$axios.post(`/api/cWapJs/jsCompetitionSchedule/doAddCompetitionAchievement.jsp`,`jsCompetitionId=140&&jsContestRegimenId=${this.gameType}&&achievementPath=''&&achievementContent=''`).then(res=>{
                        console.log("111",res)
                            setTimeout(()=>{
                                console.log("jiang",res)
                                this.$router.push("/")
                            },1000)                
                        
                    })
                },
        },
        created() {
            this.getStage()
            // this.getResults()
        }
    };
</script>

<style scoped lang="scss">
    .projectTitle {
        width: 1.8rem
    }

    .projectName {
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
    .textarea{
        width: 5rem;
        border: none;
        resize:none;
        line-height: .5rem;
    }
    .sumbitBox{
        text-align: center;
        margin: .5rem 0;
    }
    .sumbit{
        padding:.2rem  2.4rem;
        background: #1abc9a;
        color: #fff;
        border-radius: .6rem
    }
    input::-webkit-input-placeholder{
        color: #e2e2e2;
    }
    .projectReport{
        // vertical-align: middle;
        
    }
    
.select{  
    background:#fafdfe;  
    height:1rem;  
    width:2rem;  
    line-height:28px;  
    border:1px solid #9bc0dd;  
    -moz-border-radius:2px;  
    -webkit-border-radius:2px;  
    border-radius:2px;  
    border: 0
} 
.select:focus{
    border: 0;
}
</style>