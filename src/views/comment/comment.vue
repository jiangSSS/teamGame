<template>
    <div>
        <Header></Header>
         <div class="commentList clearfix" v-for="(item,index) in comment" :key="index">
            <div class="professor fll">
                <img class="professorImg" :src="item.imgPath" alt="">
                <span>{{item.nickName}}</span>
                <span>华为技术专家</span>
            </div>
            <div class="comment_desc">{{item.remark}}</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/header.vue"
    export default {
        components:{
            Header
        },
        data() {
            return {
                comment:[]
            };
        },
        methods: {
            getData(){
                this.$axios.post(`/api/cWapJs/jsCompetitionSchedule/ajaxGetExpertComment.jsp`,`jsCompetitionId=140&&jsContestRegimenId=41`).then(res=>{
                    console.log(res)
                    this.comment = res.data
                })
            }
        },
        created(){
            this.getData()
        }
    };
</script>

<style scoped lang="scss">
    .commentList{
        border-bottom: 1px solid #e2e2e2
    }
    .professor{
        padding: .3rem 0;  
        width: 2rem ;
        text-align: center; 
    }
    .professorImg{
        width: .8rem;
        height: .8rem;
    }
    .professor span{
        display: block;
        font-size: .26rem
    }
    .comment_desc{
        padding: .4rem .1rem 0;
        font-size: .26rem;
        line-height: .4rem;
    }
    
</style>