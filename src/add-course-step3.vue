<template>
    <div class="step-3-conente-wrapper flex space-x-9 pl-7 pt-10 pr-0 ml-7  relative">
  
      <div class="step-3form">
        <div class="form-heading-holder  pb-6">
          <h3 class="text-slate-700 font-semibold">Step 3 of 3</h3>
          <div class="flex pt-5 hover-couser" @click="$emit('back')">
            <span class="mt-1"><img src="/img/Back icon.png" /></span>
            <h4 class=" step-back-btn text-slate-900 font-semibold ml-4" >
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
    
        <div class="border-width border-b-2 border-indigo-10"></div>
  
        <section class="pt-6 border-b-2 border-indigo-10 pb-20 flex">
  
          <div class="">
            <h1 class="font-semibold">Publish Date & time</h1>
  
            <div class="border-2 border-indigo-10 mt-6">
              <div class="flex p-6 pt-4 border-b-2 border-indigo-10">
                <span>
                  <input type="radio" checked />
                </span>
                <div class="pl-4">
                  <h2 class="font-semibold">Save or publish</h2>
                  <span>Make your course public</span>
  
                  <div class="p-6 pb-2 flex">
                    <span>
                      <input  class="mt-1"  type="radio" name="publishornot" />
                    </span>
  
                    <div class="pl-6">
                      <h2 class="font-semibold">Publish now</h2>
                      <span>By publishing now your course will go live</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="p-20 pl-16 ml-3 pb-8 pt-3 flex">
                <span>
                  <input class="mt-1" type="radio" name="publishornot"/>
                </span>
  
                <div class="pl-6">
                  <h2 class="font-semibold">Save as draft</h2>
                  <span>By saving as a draft your course will save as draft and can be
                    publish later.</span>
                </div>
              </div>
            </div>
  
            <div class="border-2 border-indigo-10 pb-8 p-8 mt-10 flex">
              <span>
                <input type="radio" checked />
              </span>
  
              <div class="pl-2 relative">
                <h2 class="font-semibold">Schedule</h2>
                <span>You can select a date to publish your course</span>
  
                <div class="date-time-picker mt-4 flex">
                  <div class=" mt-3 w-full border-2 border-indigo-10">
                    <input type="date" class="" />
                  </div>
  
  
                  <div>
                    <el-time-select class="time-picker" placeholder="Start time" v-model="startTime" :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                    }">
                    </el-time-select>
                  </div>
                </div>
              </div>
            </div>
  
                          <button class="next-btn float-right ml-10" @click="$emit('increaseStep1')" >Publish</button>
                
          </div>
  
  
        </section>
      </div>
  
      <section class="">
  
        <div class="preview-wrapper border-2 border-indigo-10 p-1  ">
          <div class="p-6 pl-4 courser-overView-title">Course overview</div>
          <div class="img-holder">
            <img src="/img/image.png"/>
          </div>
  
          <section class="p-2">
            <div class="grid grid-row-4 gap-4 ">
              <div class="grid grid-cols-2 gap-12 ">
                <h2 class="title-preview" >Course title</h2>
                <h2>B600 Video Bar</h2>
              </div>
  
              <div class="grid grid-cols-2 gap-12 ">
                <h2 class="title-preview">Points allowed in course</h2>
                <div class="flex">
  
                  <span> <img src="/img/coin.png"/> </span>
                  <h2 class="ml-2">120pt</h2>
  
                </div>
             
              </div>
  
              <div class="grid grid-cols-2 gap-12 ">
                <h2 class="title-preview" >Modules</h2>
                <h2>06</h2>
              </div>
  
              <div class="grid grid-cols-2 gap-12  pb-6">
                <h2 class="title-preview" >Course duration</h2>
                <h2>12 hours 13 min</h2>
              </div>
            </div>
            <button class="flex gap-2 preview-btn w-full">
              <span class="mt-1" > <img  src="/img/VisibilityON.png"/> </span>
              <span class="">Preview</span></button>
          </section>
        </div>
      </section>
  
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        startTime: "",
      };
    },
  };
  </script>
   
  <style >
  .hover-couser{
    cursor: pointer;
  }
  .el-input__inner {
  
    border: 1px solid #e9e8e8;
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
  .step-3-conente-wrapper input[type='radio']:after {
    width: 17px;
      height: 17px;
      border-radius: 15px;
      background-color: #ffffff;
      content: '';
      display: inline-block;
      visibility: visible;
      border: 4px solid rgb(194 194 194);
      }
  
     .step-3-conente-wrapper input[type='radio']:checked:after {
      width: 20px;
      height: 20px;
      background: #4d74b1;
      border-radius: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      content: '';
      display: inline-block;
      visibility: visible;
      border: 5px solid #f2f5f9;
      }
  </style>
    
  <style scoped>
  *{
    font-family:'SF UI Text';
    
  }
  .date-time-picker input {
    padding: 5px 0px 5px 5px;
  }
  
  .time-picker {
   
    position: absolute;
      top: 60px;
      left: 315px;
      padding: 5px;
      width: 188px;
  
  }
  .preview-wrapper{
    border-radius: 4px;
      position: absolute;
      left: 78%;
      margin-top: 23%;
      width: 43%;
      box-shadow: inset 3px 1px 6px #f2f5f9, 10px 13px 36px #f3f3f3;
      font-style: normal;
      font-family: Helvetica;
      font-weight: 500;
  }
  
  .step-3-conente-wrapper {
    height: 800px;
  }
  .img-holder{
    width: 353px;
    height: 205px;
  }
  .title-preview{
    width: 304px;
  }
  .preview-btn{
    border: 1px solid gainsboro;
      padding: 8px;
      text-align: center;
      justify-content: center;
  }
  
  .courser-overView-title
  {
    padding: 17px 9px;
      font-weight: 500;
      background: #F2F5F9;
  
  
  }
  .step-3form{
    position: absolute;
      width: 73%;
  }
  .border-width{
    width: 930px;
  }
  </style>
    