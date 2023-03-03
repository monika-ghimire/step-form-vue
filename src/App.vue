<template>
  <div id="app">

      <section class="top-bar-wrapper p-10 pt-4 pb-4 pr-10 border-b-2 border-indigo-10">
          <div class="flex hover-couser">
              <span class="mt-1"><img src="/img/Back icon.png" /></span>
             <span class="font-semibold  text-font ml-2">Add Course</span>
          </div>
         

          <span class="flex">
              
              <span class="flex pr-6 ">
                  <span class="mt-1 text-righ"> <img  src="/img/VisibilityON.png"/> </span>

                  <span class="ml-2 text-righ font-semibold">Preview</span>


              </span>
              <div class="coustom-border"></div>
              <span class=" text-center ml-5">x</span>
          </span>
      </section>


      <div class="grid grid-cols-9 p-10 pt-0 pl-0">

          <section class="step-side-bar col-start-1 col-end-3 pl-5 pt-10">
              <div class="parent-step">
                  <div class="step-wrapper relative">

                      <div v-if="current_step === 1" class="step" :class="{ complete: current_step >= 1 }" @click="current_step = 1" >01</div>
                      <div v-if="current_step > 1" class="stepcheck" @click="current_step = 1" >✔</div>
                      <span class="step-1" :class="{ 'step1-complete': current_step >= 1 }" @click="current_step = 1">Course
                          Information</span>
                      <div class="vl" :class="{ 'v1-complete': current_step == 1 }"></div>


                      <div v-if="current_step <= 2" class="step" :class="{ complete: current_step >= 2 }" @click="current_step = 2">02</div>
                      <div v-if="current_step > 2" class="stepcheck" @click="current_step = 2">✔</div>
                      <span class="step-2" :class="{ 'step2-complete': current_step > 1 }" @click="current_step = 2">Add
                          Sections</span>
                      <div class="vl" :class="{ 'v1-complete': current_step == 2 }"></div>


                      <div class="step" :class="{ complete: current_step >= 3 }"  @click="current_step = 3">03</div>
                      <span class="step-3" 
                      :class="{ 'step3-complete': current_step === 3 }"
                          @click="current_step = 3"  >Review & publish course</span>
                  </div>

              </div>
          </section>


          <section class="col-start-3 col-end-9">
              <div class="" v-if="current_step === 1">
                  <stepForm1 @stepup="increaseStep1" />
              </div>

              <div v-if="current_step === 2">
                  <stepForm2 @back="backpage" @stepup="increaseStep1" />
              </div>

              <div v-if="current_step === 3">
                  <stepForm3 @back="backpage" @increaseStep1="increaseStep1" />
              </div>



             

          </section>
      </div>
</div>
</template>

<script>
import stepForm1 from "./add-course-step1.vue";
import stepForm2 from "./add-course-step2.vue";
import stepForm3 from "./add-course-step3.vue";
export default {
   components: { stepForm1:stepForm1, stepForm2:stepForm2 , stepForm3:stepForm3},

  data() {
      return {
          current_step: 1,
          isComplete: true
      };
  },

  methods: {

      backpage() {
          console.log("back fundsd")
          console.log(this.current_step)
          if (this.current_step-- === 1) this.active = 1;
      },

      increaseStep1() {
          this.current_step = this.current_step + 1;
          console.log(this.current_step)
      }

  },
};
</script>



<style scoped>

*{
  font-family: "SF UI Text"
}
.hover-couser{
cursor: pointer;
}
.el-steps--vertical {
  height: 209px;
  flex-flow: column;
}

.vl {
  border-left: 1px dashed;
  height: 33px;
  margin-left: 21px;
}

.v1-complete {
  border-left: 1px dashed #001689;;
}

.step {
  border-radius: 100%;
  border: 1px solid #636363;
  padding: 10px 12px;
}

.stepcheck {
  padding: 10px 15px;
  border-radius: 100%;
  color: #001689;
  border: 1px solid  #001689;
}

.step-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.complete {
  color:  #001689;
  border: 1px solid  #001689;
  padding: 10px 12px;
}

.step-1 {
  position: absolute;
  top: 3px;
  width: 129px;
  margin-left: 47px;
}

.step-2 {
  position: absolute;
  top: 47%;
  width: 129px;
  margin-left: 54px;
}

.step-3 {
  position: absolute;
  top: 84%;
  width: 172px;
  margin-left: 55px;
}
.step3-complete{
  position: absolute;
  top: 84%;
  width: 181px;
  margin-left: 56px;
  color:  #001689;
  font-weight: bold;
}

.step1-complete {
  color:  #001689;
  font-weight: bold;
  width: 139px;
  margin-left: 54px;
  margin-top: 10px;
}

.step2-complete {
  color:  #001689;
  font-weight: bold;
  width: 138px;
  margin-left: 55px;
  margin-top: -1px;
}

.cancle-btn {
  background: #f1f1f1;
  margin-top: 16px;
  color: black;
  border-radius: 5px;
  width: 90px;
  height: 47px;
  border-radius: 4px;


}
.coustom-border{
  border-right: 1px solid gainsboro;
  height: 27px;
}

.step-side-bar {
  background: #f8fafc;
  height: 100%;
}

.top-bar-wrapper {
  display: flex;
  justify-content: space-between;
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

.next-btn:hover {
  background: #364489;
  color: white;
}
.text-font{
  font-family: "SF UI Text";

}
.step-back-btn:hover {
  color: #c6cffa;
  cursor: pointer;
}</style>
