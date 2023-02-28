<template>
  <div id="app">
    <nav>
  
    </nav>
    <section
      class="top-bar-wrapper p-10 pt-4 pb-4 pr-1 border-b-2 border-indigo-10"
    >
      <span class="font-semibold">Add Course</span>

      <span class="grid grid-cols-2">
        <span class="pr-4 border-r-2 border-indigo-10">Preview</span>
        <span class="pr-4 text-center">x</span>
      </span>
    </section>

    <div class="grid grid-cols-9 p-10 pt-0">
      <section class="step-side-bar col-start-1 col-end-3 pl-5 pt-10">
        <el-steps direction="vertical" :active="active" finish-status="success">
           <el-step title="Course Information"  @click="isclickable" ></el-step>
         
          <el-step title="Add Sections" @click="isclickable"></el-step>
          <el-step
            title="Review & publish course"
            @click="isclickable"
          ></el-step>
        </el-steps>
      </section>

      <section class="col-start-3 col-end-9">
        <div class="" v-if="active === 0">
          <stepForm1 />
        </div>

        <div v-if="active === 1">
          <div class="pl-20 pt-10">
            <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
              <h3 class="text-slate-700 font-semibold">Step 2 of 3</h3>

              <div class="flex pt-5">
                <span class="mt-2"><img src="./asset/Back icon.png" /></span>
                <h4 class=" step-back-btn ext-slate-900  ml-4" @click="back()">
               Back to Course Information
              </h4>
              </div>
              
              <h1 class="text-xl font-semibold pt-6">Add sections</h1>
              <h5 class="text-slate-900 pt-4">
                Start putting together your course by creating sections,
                lectures and practice (quizzes, videos Pdf and more ).
              </h5>
            </div>

            <stepForm2 />
          </div>
        </div>

        <div v-if="active === 2">
          <div class="pl-20 pt-10">
            <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
              <h3 class="text-slate-700 font-semibold">Step 3 of 3</h3>
              <div class="flex pt-5">
                <span class="mt-2"><img src="./asset/Back icon.png" /></span>
                <h4 class=" step-back-btn text-slate-900  ml-4" @click="back()">
                Back to Add Curriculum
              </h4>
                </div>
            
              <h1 class="text-xl font-semibold pt-6">
                Review & publish course
              </h1>
              <h5 class="text-slate-900 pt-4">
                Review the Curriculum you have build and Choose when to publish
                your course.
              </h5>
            </div>

            <stepForm3 />
          </div>
        </div>

        <el-button
          class="next-btn float-right ml-10"
          style="margin-top: 12px"
          @click="next"
          >Next</el-button
        >
        <div v-if="active === 0" class="">
          <el-button
            class="float-right ml-10"
            style="margin-top: 12px"
            @click="next"
            >cancle</el-button
          >
        </div>
      </section>
    </div>

    <!-- <router-view /> -->
  </div>
</template>

<script>
import stepForm1 from "./stepForm/step-Form1.vue";
import stepForm2 from "./stepForm/Step-Form2.vue";
import stepForm3 from "./stepForm/Step-Form3.vue";
export default {
  components: { stepForm1, stepForm2, stepForm3 },
  data() {
    return {
      active:0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    back() {
      if (this.active-- === 0) this.active = 0;
      console.log("back");
    },
    isclickable() {
     
      console.log("next click");
    },
  },
};
</script>

<style>

.el-step__icon.is-text:hover{
  color: rgba(71, 77, 243, 0.445);
 cursor: pointer;
}


.el-step__title.is-success {
  color: rgba(71, 77, 243, 0.445);
}
</style>

<style scoped>
.el-steps--vertical {
  height: 209px;
  flex-flow: column;
}
.step-side-bar {
  background: #f8fafc;
}

.top-bar-wrapper {
  display: flex;
  justify-content: space-between;
}
.next-btn {
  background: #001689;
  color: white;
  margin-left: 10px;
}

.next-btn:hover {
  background: #364489;
  color: white;
}
.step-back-btn:hover{
  color:#c6cffa ;
  cursor: pointer;
}
</style>
