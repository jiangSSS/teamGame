<template>
        <div>
            <Header></Header>
            <div>
                <div class="projectName">
                    <div class="fll projectTitle">项目阶段</div>
                    <div class="project_desc">初审</div>
                </div>
                <div class="projectName">
                    <div class="fll projectTitle thisTeacher">项目阶段</div>
                    <input type="file">
                </div>
                <div class="sumbitBox">
                    <mt-button class="sumbit" @click="getResults">保存</mt-button>
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
    
                };
            },
            methods: {
                getResults(){
                    this.$axios.post("/api/cWapJs/jsCompetitionSchedule/doAddCompetitionAchievement.jsp","jsCompetitionId=140&&jsContestRegimenId=41").then(res=>{
                        console.log(res)
                    })
                }
            },
            created(){
                this.getResults()
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
            min-height: 2rem
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
        .uploadBtn{
            color: #1abc9a;
            border-color: #1abc9a;
            height: 1rem;
        }
    </style>