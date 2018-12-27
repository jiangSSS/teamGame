<template>
    <div>
        <div v-for="(item,index) in data.jsPlayers" :key="index" :label="item">
            <div class="projectName">
                <div class="fll projectTitle team-logo">团队LOGO</div>
                <img class="logo fll" :src="data.logoPath">
                <div><i class="iconfont icon-icon_on_the_right team-logo flr"></i> </div>
            </div>
            <div class="projectName">
                <div class="fll projectTitle">团队名称</div>
                <div class="project_desc">{{data.teamName}}</div>
                <div><i class="iconfont icon-icon_on_the_right flr"></i></div>
            </div>
            <div class="projectName">
                <div class="fll projectTitle">所在地区</div>
                <div class="project_desc">{{data.address}}</div>
                <div><i class="iconfont icon-icon_on_the_right flr"></i></div>
            </div>
            <div class="projectName">
                <div class="fll projectTitle thisTeacher">团队介绍</div>
                <div class="project_desc project_more fll">{{data.info}}</div>
                <div><i class="iconfont icon-icon_on_the_right flr thisTeacher"></i></div>
            </div>
            <div class="projectName teamNum clearfix">
                <div class="fll projectTitle teamMember">团队成员</div>
                <div class="project_teamNum">
                    <div class="fll p3">
                        <div class="ht4"> <img class="logo_avatar" :src="item.playerImgPath"></div>
                        <div class="ht4 mt3"><span>{{data.firstVolunteer}}</span>
                            <van-tag style="background:#1abc9c">队长</van-tag>
                        </div>
                        <div class="mt4">{{item.playerSchool}}</div>
                    </div>
                    <div class="fll p3">
                        <div class="ht4"><img class="logo_avatar" :src="item.playerImgPath"></div>
                        <div class="ht4 mt3"><span>{{data.secondVolunteer}}</span></div>
                        <div class="ht4">{{item.playerSchool}}</div>
                    </div>
                </div>
                <i class="iconfont icon-icon_on_the_right flr teamMember"></i>
            </div>
            <!-- <div class="projectName team_teacher">
            <div class="fll projectTitle thisTeacher">指导老师</div>
            <router-link to="/invitedTeacher" class="">
                <i class="iconfont icon-jjia- invite_teacher"></i>
                <span style="display:block;color: #1abc9c" class="invite mt4">邀请加入</span>
            </router-link>
            <div><i class="iconfont icon-icon_on_the_right flr thisTeacher"></i></div>
        </div> -->
            <div class="projectName">
                <div class="fll projectTitle">团队风采</div>
                <div class="release" @click="handleRelease"><span>发布风采</span><i class="iconfont icon-xinxifabu"></i></div>
                <i class="iconfont icon-icon_on_the_right flr"></i>
            </div>
            <div>
                <div class="teamList clearfix">
                    <router-link to="/teamDetail" v-for="(itemList,index) in dataList" :key="index">
                    <div class="clearfix">
                        <img class="logo_avatar fll" :src="itemList.userImgPath">
                        <div class="fll">
                            <p class="userInfo">{{itemList.userNickName}}</p>
                            <p class="userInfo">{{itemList.title}}</p>
                        </div>
                    </div>   
                        <div class="userImg" v-for="(itemImg,index) in itemList" :key="index">
                            <img class="img_userInfo" :src="itemImg.images">
                            <!-- onerror="javascript:this.src='/adminStyles/images/mr.jpg';" -->
                        </div>
                        <div class="date_userInfo">
                            <span class="">{{itemList.addTimeStr}}</span>
                            <!-- <span class="nice"><i class="iconfont icon-like"></i>{{itemList.baseUserId}}</span> -->
                        </div>
                    </router-link>
                </div>
                <p class="footer">没有更多数据了</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [],
                dataList: [],
                userimg: [],
                pageNum: 1
                // isShow: false,
                // loading: false,
                // page:1
            };
        },
        methods: {
            handleRelease() {
                this.$router.push("/release")
            },
            handleLogin() {
                this.$axios.post("/api/cWapJs/login/doLogin.jsp", "companyId=2&loginType=account_pwd&mobile=12300000001&pwd=7B6F954B6CB4225D30BBF8267498166A").then(res => {
                    // console.log(res)
                    if (res.code == 200) {
                        this.$store.commit("CHANGE_USERINFO", res.data)
                    }
                })
            },
            //  团队信息
            getTeam() {
                console.log("22222222")
                this.$axios.post("/api/cWapJs/jsCompetitionSchedule/ajaxGetTeamInfo.jsp", "jsCompetitionId=140", this.data).then(res => {
                    console.log(res)
                    this.data = res.data
                })

            },
            // loadMore() {
            //     this.page = this.page + 1,
            //     this.getTeamList()
            // },
            //  团队风采列表
            getTeamList() {
                this.$axios.post(`/api/cWapJs/jsCompetitionSchedule/ajaxGetTeamMiens.jsp`, `jsCompetitionId=140&&pageNumber=1`, this.dataList).then(res => {
                    console.log("列表", res)
                    // if(res.code == 200){
                    this.dataList = res.data
                    // this.userimg  = res.data.images
                    // if (res.data.length == 0) {
                    //     this.loading = true
                    //     this.isShow = true
                    // }
                    // }

                })
            }
        },
        created() {
            this.getTeam()
            this.getTeamList()
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

    .project_more {
        line-height: .44rem;
        padding: .1rem 0;
    }

    .project_content .logo {
        height: 1rem;
        margin-left: -3rem
    }

    .logo_avatar {
        height: .6rem;
        margin-top: .2rem
    }

    .ht4 {
        height: .4rem;
    }

    .p3 {
        padding-right: .3rem
    }

    .teamNum {
        height: 1.8rem;
    }

    .project_teamNum {
        width: 4.8rem
    }

    .desc {
        height: 3.6rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #e2e2e2
    }

    .invite {
        margin-right: 3.3rem
    }

    .team-logo {
        line-height: 1.2rem;
    }

    .teamMember {
        line-height: 1.8rem !important
    }

    .thisTeacher {
        line-height: 1.5rem !important
    }

    .team_title {
        width: 2.4rem
    }

    .team_people img {
        height: 1rem;
    }

    .team_teacher {
        height: 1.5rem;
    }

    .invite_teacher {
        font-size: .8rem;
        margin-top: .2rem;
        margin-left: .2rem;
        color: #999
    }

    .invite {
        margin-top: -.5rem
    }

    .release {
        color: #1abc9c;
        margin-left: 2rem
    }


    .userInfo {
        height: .2rem;
    }

    .img_userInfo {
        width: 3.1rem;
        padding-right: .2rem;
        height: 3rem;
        // display: flex;
        // justify-content: space-between
    }

    .date_userInfo {
        padding: .3rem 0;
    }

    .nice {
        margin-left: 2rem
    }

    .nice i {
        color: #f00
    }

    .teamList {
        padding: 0 .4rem
    }

    .footer {
        text-align: center;
        color: #999
    }
</style>