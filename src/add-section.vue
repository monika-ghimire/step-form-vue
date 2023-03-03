<template>
    <div class="modal-section">
   
     <div class="bg-tras relative " >
   
       <div class="section-card-form-wrapper  rounded-lg  ">
   
         <div class="border-b-2 boder-indigo-10 rounded-lg  ">
           <div class="w-full section-title rounded-lg pl-10 ">
             <span class="font-semibold ">Add Section title</span>
             <span class="float-right" >
            <button @click="$emit('cancel')">X</button></span>
           </div>
   
           <form class="p-10 pb-6">
   
             <div class="">
               <lable class="font-semibold">Section title</lable>
               <span class="float-right higlight font-semibold">{{ lengthTextuse }} / {{ limitaedword }}</span>
               <input
              
                 class="w-full border-2"
                 maxlength = "50"
                 placeholder="Enter the section title here"
               />
             </div>
   
             <div class="pt-14">
               <label class="font-semibold">What will students be able to do at the end of this section? (Optional)</label>
               <br />
               <br />
               <textarea
                 rows="4"
                 cols="50"
                 placeholder="Enter learning objective"
                 class="w-full border-2"
               ></textarea>
             </div>
           </form>
         </div>
   
         <div class="float-right p-6 ">
           <button class="cancle-btn" @click="$emit('cancel')">Cancel</button>
           <button class="create-btn ml-6" @click="onclickedcretedBtn">Create</button>
         </div>
   
       </div>
   
     </div>
   
   
    </div>
   </template>
   
   <script>
   export default{
    data(){

      return{
        lengthTextuse:0,
        limitaedword:50
      }

    },
    methods:{
      onclickedcretedBtn(){
        this.$emit('count')
        this.$emit('cancel')
      }
    }
 
   }
  
  </script>
   
   <style scoped>
   .modal-section{
    position: absolute;
    top: 0px;
    left: 0px;
   }
   .higlight{
       color: #3c50b7;
   }
    textarea {
       padding: 10px;
       outline: none;
     }
     input {
       outline: none;
       margin-top: 16px;
       padding: 20px 0px 20px 10px;
     }
   .bg-tras{
     background: rgba(0, 0, 0, 0.5);
     height: 814px;
    width: 1349px;
   }
   .section-card-form-wrapper{
    position: absolute;
    background: white;
    width: 46%;
    left: 30%;
    top: 16%;
    z-index: 1;
    color: black;
   }
   .section-title{
    padding: 15px 44px 15px 11px;
     background: #F3F3F3;
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
   .create-btn:hover {
     background: #364489;
     color: white;
   }
   .cancle-btn{
       padding: 9px 25px 9px 21px;
       background: gainsboro;
   }
   </style>
   