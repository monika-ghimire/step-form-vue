<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
      <section class="top-bar-wrapper p-10 pt-4 pb-4 pr-1 border-b-2 border-indigo-10" >
        <span class="font-semibold">Add Course</span>

        <span class="grid grid-cols-2">
          <span class="pr-4 border-r-2 border-indigo-10">Preview</span>
        <span class="pr-4 text-center">x</span>
        </span>
       
      </section>

    <div class="grid grid-cols-9 p-10 pt-0">

      <section class="step-side-bar col-start-1 col-end-3 pl-5 pt-10">

        <el-steps  direction="vertical" :active="active" finish-status="success">
          <el-step title="Course Information" @click="next"></el-step>
          <el-step title="Add Sections" @click="next"></el-step>
          <el-step title="Review & publish course" @click="next"></el-step>
        </el-steps>

       
      </section>

      <section class="col-start-3 col-end-9   ">
        <div class="" v-if="active===0 ">
          <stepForm1/>
         
        </div>

        <div v-if="active===1 ">
          <stepForm2/>
        </div>

        <div v-if="active===2 ">
          <stepForm3 @some-event="back" />
        </div>

        <el-button class='next-btn float-right ml-10' style="margin-top: 12px;" @click="next">Next</el-button>
        <div v-if="active===0" class="">
          <el-button class='float-right ml-10' style="margin-top: 12px;" @click="next">cancle</el-button>
        </div>
      
      </section>

      

    </div>

    <!-- <router-view /> -->
  </div>
</template>

<script>
import stepForm1 from './stepForm/step-Form1.vue';
import stepForm2 from './stepForm/Step-Form2.vue';
import stepForm3 from './stepForm/Step-Form3.vue';
  export default {
  components: { stepForm1,stepForm2,stepForm3 },
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      back(){
        if(this.active-- === 0)this.active=0
        console.log('back')
        
      }
      
    }
  }
</script>

<style >


</style>

<style  scoped>
.el-steps--vertical {
    height:209px;
    flex-flow: column;
}
.step-side-bar{
  background:#F8FAFC;
}

.top-bar-wrapper{
  display: flex;
  justify-content: space-between;

}
.next-btn{
  background: #001689;
  color: white;
  margin-left: 10px;
}

.next-btn:hover{
  background: #364489;
  color: white;

}
</style>
