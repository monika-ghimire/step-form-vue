<template>
    <div class="" >
        <div class="pl-20 pt-10 ml-40" v-if="isclickinaddContet === false && isclickinaddquiz === false">
            <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
                <h3 class="text-slate-700 font-semibold">Step 2 of 3</h3>

                <div class="flex pt-5 hover-couser " @click="$emit('back')">
                    <span class="mt-1"><img src="/img/Back icon.png" /></span>
                    <h4 class=" step-back-btn ext-slate-900 font-semibold ml-3" >
                        Back to Course Information
                    </h4>
                </div>

                <h1 class="text-xl font-semibold pt-6">Add sections</h1>
                <h5 class="text-slate-900 pt-4">
                    Start putting together your course by creating sections,
                    lectures and practice (quizzes, videos Pdf and more ).
                </h5>
            </div>


            <section class="border-b-2 border-indigo-10 pb-20">


                <div v-for="i in componeteAddPlus" :key="i">

                    <el-collapse class="mt-4  relative " >
                        <div class="relative">
                            <div class="action-btn" @click="isactionActive" >...</div>

                            <div  v-if="actionClick===true">
                                    <ActionStep2/>

                                </div>
                         

                        </div>


                        <div class="border-left-coustume"></div>
                        <h3 class="higlight font-semibold section-num">Section 1</h3>
                        <el-collapse-item :title="title">
                            <div class="flex pt-6 pb-6 pl-0 p-20 relative">

                                <el-popover placement="right" width="170" top="300" trigger="click" popper-class="test">

                                    <div class="">
                                        <button class='p-1 pl-0 flex gap-2' @click="isclickinaddContet = true">
                                            <span class="bg"><img src="/img/document.png" /></span>
                                            <span class="font-semibold mt-2">Add Content</span>
                                        </button>

                                        <br />

                                        <button class='p-1 pl-0 flex gap-4' @click="isclickinaddquiz = true">
                                            <span class="mt-2 bg"><img src="/img/list_fill.png" />
                                            </span> <span class="font-semibold mt-2">Add Quiz</span>
                                        </button>
                                    </div>

                                    <button class="text-center  higlight font-semibold " slot="reference"><span
                                          bg="false"  class="add-btn">+</span> <span>Add new content</span></button>
                                </el-popover>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>

                <div class="flex relative">
                    <span class="drag-img"> <img src="/img/drag.png" /></span>
                    <div class="border-2 border-indigo-10 w-full mt-10 p-4 pl-1">
                        <div class="flex pt-2 pb-4 pl-4" @click="openNewSectionForm = true">
                            <button class="text-center  higlight font-semibold ml-4"> <span class="add-btn">+</span>
                                <span class="mr-4">Add New Section</span> </button>
                        </div>
                    </div>
                </div>


            </section>
            <button class="next-btn float-right ml-10" @click="$emit('stepup')">Next</button>
        </div>

        <section v-if="isclickinaddContet === true">
            <Addcontent @goback="isclickinaddContet = false" />
        </section>

        <section v-if="isclickinaddquiz === true">
            <AddQuiz @cancel="isclickinaddquiz = false" />
        </section>


        <section v-if="openNewSectionForm === true">
            <AddSection @cancel="openNewSectionForm = false" @count="count" />

        </section>


    </div>
</template>
   
   
<script>
import Addcontent from './add-content.vue';
import AddQuiz from './add-quiz.vue'
import AddSection from './add-section.vue'
import ActionStep2 from './component/action-step2.vue'


export default {
    data() {
        return {
            actionClick:false,
            isclickinaddContet: false,
            isclickinaddquiz: false,
            openNewSectionForm: false,
            title: 'Section Title here',
            componeteAddPlus: [1],
        }
    },
    components: {
        Addcontent:Addcontent,
        AddQuiz:AddQuiz,
        AddSection:AddSection,
        ActionStep2:ActionStep2
    },
    methods: {
        text(n) {
            console.log(n)
        },
        count() {
            this.componeteAddPlus++
            console.log("inside count")
            console.log(this.componeteAddPlus)
            this.addednew( this.count)
        },

        addednew() {
            this.componeteAddPlus.push( this.count);
            console.log(this.componeteAddPlus)
        },
        isactionActive(){
     
            this.actionClick=!this.actionClick
           
         
        }

    },

}

</script>
<style lang="scss" >
.hover-couser{
  cursor: pointer;
}
.test
{
border:none;
outline: none;
}


.el-collapse-item__content {
    padding: 7px 0px 0px 18px;
    padding-bottom: 7px;
}

.popper__arrow
{
    border:none;
}

.el-button {
    border: 0px;
}

.el-collapse-item__wrap {
    background-color: transparent;
    border: 1px solid #8080804d;
    border-top: none;
    padding-left: 2%;
    padding-right: 100px;
}

.el-collapse-item__header {
    background: transparent;
    color: black;
    line-height: normal;
    ;
    font-size: 1rem;
    text-align: left;
    height: auto;
    margin-bottom: 0;
    border: 1px solid #8080804d;
    padding: 37px 0px 14px 0px;
    margin-top: 3%;
    padding-left: 33px;
}

.el-collapse-item__header>i {
    font-weight: bold;
}

.el-collapse {
    border: none;
    width: 100%;
}

.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    padding: 38px 0px 25px 34px;
    border-bottom: 1px solid #d7d7d7;
}


.el-popover el-popper
{
    border:none;
}
</style>


<style scoped>
.action-btn{
    position: absolute;
    right: 52px;
    font-weight: 900;
    top: 28px;
    font-size: 19px;
    padding: 4px 7px 13px 7px;
    border-radius: 100%;
}
.action-btn:hover{
    background: #F3F3F3;
}
.border-left-coustume{
    position: absolute;
    border-left: 1px solid #e0e0e0;
    height: 27px;
    right: 36px;
    top: 34px;

}
.next-btn {
    width: 90px;
height: 47px;
border-radius: 4px;
background-color: #001689;
color: white;
 margin-left: 10px;
 margin-top: 15px;
}

.drag-img {
    position: absolute;
    left: -24px;
    top: 72px;
}

.next-btn:hover {
    background: #364489;
    color: white;
}

.add-btn {
    padding: 10px 15px 10px 15px;
    background: #eeeeee;
}

.higlight {
    color: #3c50b7;
}

.section-num {
    position: absolute;
    top: 12px;
    left: 35px;
}

.bg {
    background: #f1f1f1;
    padding: 8px;
}

.add-new-content {
    margin-left: 8%;
    top: 19%;
}

.add-section-btn {}</style>