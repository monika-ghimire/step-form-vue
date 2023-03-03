
<template>
    <div class="quiz-content-wrapper">
        <div class="pl-20 pt-10 ml-40">

            <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
                <h3 class="text-slate-700 font-semibold">Step 2 of 3</h3>

                <div class="flex pt-5 hover-couser"  @click="$emit('cancel')">
                    <span class="mt-1"><img src="/img/Back icon.png" /></span>
                    <h4 class=" step-back-btn ext-slate-900  font-semibold ml-4">
                        Back to section layout
                    </h4>
                </div>

                <h1 class="text-xl font-semibold pt-6">Add Quiz</h1>
                <h5 class="text-slate-900 pt-4">
                    Use the quiz creator to Create and Manage Quizzes . You may only have 1 quiz per lecture.
                </h5>
            </div>

            <section>
                <form class="pt-10 pb-12 border-b-2 border-indigo-10">
                    <div class="">
                        <lable class="font-semibold">Title</lable>

                        <input class="w-full border-2" placeholder="Enter the section title here" />
                    </div>

                    <div class="pt-10 relative">
                        <lable class="font-semibold">How much point for completing this Quiz ?</lable>
                        <input class="w-full border-2" placeholder="Enter the points here" />
                        <img  src="/img/coin.png" class="coin-img-quiz"/>
                    </div>
                </form>



                <section class="mt-10">
                    <h1 class="text-2xl">Questions</h1>

                    <el-collapse  v-for="i in componeteAddPlus" :key="i" class="mt-4 relative">

                        <div class="icons-group flex gap-6">
                            <span class="">
                                <img src="/img/copy.png" />
                            </span>
                            <span @click="deleteCount">
                                <img src="/img/delete.png" />
                            </span>
                        </div>

                        <el-collapse-item :title="Question">

                            <section class="pt-4 p-6 pb-10">
                                <div class="right-content">
                                    <lable class="font-semibold">Question</lable>
                                    <br />
                                    <div class="flex relative">
                                        <input class="w-full border-2" placeholder="Enter the question here" />

                                    </div>


                                    <div class="pt-3">
                                        <v-select class="w-full select-question-input"
                                            placeholder="Multiple choice questions" :options="qustionTilte"
                                            @input="setSelected" :clearable="false">
                                        </v-select>
                                    </div>


                                </div>
                            </section>

                            <div class="border-t-2 border-indigo-10 pb-10 p-6 pt-10">

                                <div class="relative">
                                    <span class="font-semibold">Answers</span>
                                    <span class="float-right flex text-green-500">
                                        <span calss="mb-2 checked-input"> <input type="radio" checked /></span>
                                        <span class="mt-1 ml-2 font-semibold">Correct answer</span>
                                    </span>
                                </div>

                                <section>
                                    <QuizQus />
                                    <!-- <QuizQus/> -->
                                </section>
                            </div>

                        </el-collapse-item>
                    </el-collapse>


                    <div class="flex mt-8 border-2 border-indigo-10 add-new-qustion-btn-wrapper" @click="count"><span class="add-btn higlight font-semibold">+</span>
                        <span class="font-semibold higlight ml-4 mt-2"> Add New Question</span>
                    </div>
                </section>

            </section>
            <button class="create-btn float-right" @click="$emit('goback')">Create</button>
        </div>
    </div>
</template>



<script>
import QuizQus from './component/quizQue.vue'
export default {
    data() {

        return {
            componeteAddPlus: [1],
            Question: 'Question 1' ,
            qustionTilte: ["Multiple choice questions",
                'Fill in the blanks']
        }
    },
    components: {
        QuizQus:QuizQus
    },
    methods:{
        count() {
            this.componeteAddPlus++
            console.log("inside count")
            console.log(this.componeteAddPlus)
           this.addednew()
        },
        addednew() {
            this.componeteAddPlus.push( this.count);
        },
       
        deleteCount() {
            console.log(this.componeteAddPlus)
            this.componeteAddPlus--
            this.addednew()
        },
     
    }
}

</script>

<style >
.hover-couser{
  cursor: pointer;
}
.select-question-input .vs__dropdown-toggle {
    padding: 17px 5px 17px 3px;
    ;
    width: 100%;
}

.select-question-input .vs__dropdown-menu li {

    padding: 10px 20px;
}

.coin-img-quiz{
    position: absolute;
    top: 96px;
    left: 94%;
}
.quiz-content-wrapper .el-collapse-item__wrap {
    background-color: transparent;
    border: 1px solid #8080804d;
    border-top: none;
    padding-left: 0px;
    padding-right: 0px;
    transition: 0.2s;
}

.quiz-content-wrapper .el-collapse-item__header {
    background: transparent;
    color: black;
    line-height: normal;
    ;
    font-size: 1rem;
    text-align: left;
    height: auto;
    margin-bottom: 0;
    border: 1px solid #8080804d;
    padding: 28px 0px 26px 0px;
    margin-top: 3%;
    padding-left: 33px;
    transition: 0.2s;
}

.quiz-content-wrapper .el-collapse-item__header>i {
    font-weight: bold;
}
.add-new-qustion-btn-wrapper{
    padding: 17px 16px 17px 45px;
}
.quiz-content-wrapper .el-collapse {
    border: none;
    width: 100%;
}

.quiz-content-wrapper .el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    padding: 26px 0px 25px 9px;
    ;
    border-bottom: 1px solid #d7d7d7;
    transition: 0.2s;
}


.quiz-content-wrapper .el-collapse-item__content {
    padding-bottom: -1px;
    font-size: 13px;
    color: #000;
    line-height: 1.769230769230769;
}
</style>



<style scoped>
.quiz-content-wrapper input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: 5px;
    right: 106px;
    position: absolute;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 3px solid rgb(207, 205, 205);
}
.add-btn {
    padding: 10px 18px 10px 17px;
    background: #f4f4f4;
    font-weight: bold;
    font-size: 19px;
}

.higlight {
    color: #3c50b7;
}
.quiz-content-wrapper input[type='radio']:checked:after {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgb(14, 129, 14);
    content: "";
    display: inline-block;
    visibility: visible;
    border: 7px solid #afe4bb;
}

.img-icon {
    position: absolute;
    right: -50px;
    top: 22px;
}

.bg-img {
    background: #efefef;
    width: 40px;
    top: 27px;
    position: absolute;
    right: -61px;
    height: 40px;
    border-radius: 100%;
    z-index: 0;
}

.higlight {
    color: #3c50b7;
}

.right-content {

    width: 532px;
}

input {
    outline: none;
    margin-top: 16px;
    padding: 20px 0px 20px 10px;
}

input::placeholder {
    font-weight: 500;
    color: #414040;
}

textarea::placeholder {
    font-weight: 500;
    color: #414040;
}

.icons-group {
    right: 39px;
    position: absolute;
    top: 23px;
    border-right: 1px solid gainsboro;
    padding: 6px 13px;
}

.create-btn {
    background: #001689;
    color: white;
    margin-left: 10px;
    width: 95px;
    border-radius: 5px;
    margin-top: 15px;
    height: 41px;
}

.checked-input {
    position: absolute;
    top: -8px;
    left: 451px;
}
</style>
