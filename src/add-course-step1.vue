<template>
    <div class="pl-20 pt-10 ml-40 stepFrom-one-wrapper">
      <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
        <h2 class="pb-6">Step 1 of 3</h2>
        <h1 class="text-2xl ">Let’s help you create a course</h1>
      </div>
  
      <section>
        <form class="pt-8 pb-14 border-b-2 border-indigo-10">
          <div class="">
            <lable class="font-semibold">Course title</lable>
  
            <input
              class="w-full border-2"
              placeholder="Enter the course title here"
              v-model="CourseInformation.course_title"
            />
          </div>
  
          <div class="pt-10">
            <label class="font-semibold">Course Description</label>
            <br />
            <br />
            <textarea
              rows="4"
              cols="50"
              placeholder="Enter course description here"
              class="w-full border-2"
              v-model="CourseInformation.course_Description"
            ></textarea>
          </div>
  
          <div class="pt-10">
            <label class="font-semibold">Course cover image</label>
            <br />
            <br />
            
            <div class="relative w-full  image-uploaded-input-filed">
              <div class='image-editor' v-if="imageUrl"  @click="img_toggle=true">...</div>
  
              <div class="image-editor-deletor" v-if="img_toggle===true">
                <div class="pb-6 pl-0">Edit Image</div>
                <div class="pb-6 pl-0">Replace Image</div>
                <div class="pb-6 pl-0">Delete Image</div>
              </div>
  
              <div class="">
               
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar"  />
                  <img
                    src="/img/upload icon.png"
                    v-else
                    class="avatar-uploader-icon upload-arrow-img"
                  />
                </el-upload>
              </div>
  
              <div v-if="imageUrl==''" class="toggle-uploaded">
                <h2 class="font-semibold">
                  Drag and drop a image here, or
                  <span class="higlight fontbold"> Browse</span>
                </h2>
                <span class="text-sm"
                  >Recommended format: 1920 x 1080 pixels <br />(PNG or JPG)</span
                >
              </div>
  
            </div>
          </div>
  
          <div class="pt-14">
            <h1 class="font-semibold text-base ">
              What will students learn in your course?
            </h1>
            <h5 class="font-medium pt-3">
              Enter the learning objectives or outcomes that learners can expect
              to achieve after completing your course.
            </h5>
  
            <input v-for="i in componeteAddPlus" :key="i"
              class="w-full border-2 exmple"
              placeholder="Example : Identify and manage project risks"
            />

            <div  class="Add-More-btn pt-4 higlight border-0 font-semibold add-more-btn-step1" @click="count"> + Add More</div>
          </div>
  
          <h1 class="font-semibold mt-10">
            What does the course provide to learners ( Select multiple if
            applicable )
          </h1>
  
          <div class="flex check-box-group">
            <div>
              <input
                type="checkbox"
                v-model="
                  CourseInformation.course_provide_learnes_review
                    .Expert_mentorship"
              />
              <span> Expert mentorship</span>
            </div>
  
            <div>
              <input
                type="checkbox"
                v-model="
                  CourseInformation.course_provide_learnes_review.Video_tutorials
                "
              />
              <span> Video tutorials</span>
            </div>
  
            <div>
              <input
                type="checkbox"
                v-model="
                  CourseInformation.course_provide_learnes_review.Unlimited_access
                "
              />
              <span> Unlimited access</span>
            </div>
          </div>
  
          <div class="pt-10">
            <label class="font-semibold">Brand Created for</label>
            <br />

            <v-select  class="select-brand-input w-full mt-4" 
            
            placeholder="Select here"
            :options="allbrand"
            @input="setSelected"
            
            :clearable="false"
           
            ></v-select>
        
          </div>
  
          <div class="pt-10">
            <label class="font-semibold">Retailer</label>
  
            <br />
         
            <v-select  class=" select-brand-input w-full mt-4" 
            placeholder="Select the retailer"
            :options="filterByBrand"
            @input="setSelected"
            :clearable="false"
            >
        
          </v-select>
          </div>
        </form>
      </section>
      <button class="next-btn float-right ml-10" @click="$emit('stepup')">Next</button>
    </div>
  </template>
  
  <script >
  export default {
    data() {
      return {
        // dialogImageUrl: "",
        // dialogVisible: false,
        imageUrl: "",
        uploaded:false,
        img_toggle:false,
        componeteAddPlus:[1],
       
        filterByBrand: [
          "All Retailer",
          "JB HI-FI ",
          "Noel Leeming",
          "Noel Leeming",
        ],
        allbrand: [
        'All brand',
        'anker',
        "Soundcore",
        "eufy",
        'AnkerWork',
        'Nebula',
        'AnkerMake'
      ],

        CourseInformation: {
          course_title: "",
          course_Description: "",
          course_cover_image: "",
          achieve_review: "",
          brand_created_for: "",
          retailer: "",
          course_provide_learnes_review: {
            Expert_mentorship: "",
            Video_tutorials: "",
            Unlimited_access: "",
          },
        },
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isLt2M = file.size / 1024 / 1024 < 2;
  
        if (!isJPG) {
          this.$message.error("Avatar picture must be JPG format!");
        }
        if (!isLt2M) {
          this.$message.error("Avatar picture size can not exceed 2MB!");
        }
        return isJPG && isLt2M;
      },
      count(){
       this.componeteAddPlus++
        console.log("inside count")
        console.log(this.componeteAddPlus)
        addednew()
      },

       addednew()
       {
      this.componeteAddPlus.push(count);
      console.log(  this.componeteAddPlus)
       },
      
    },
  };
  </script>
  
  <style>
   .vs__dropdown-toggle {
    width: 102%;
    color: red;
  }

  .select-brand-input .vs__dropdown-toggle
{
  padding: 13px 2px 13px 4px;
}

.select-brand-input  .vs__dropdown-menu li
{

  padding: 10px 20px;
}
.stepFrom-one-wrapper input[type=checkbox] {
          accent-color: #001689;
        }
  </style>
  
  <style scoped>
  * h1 h2 h3 h4 p{
    color: red;
    font-family: Helvetica;
font-weight: 400;
color: #020212;
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
.add-more-btn-step1{
  cursor:pointer;
}
.next-btn:hover {
    background: #364489;
    color: white;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  
  .higlight {
    color: #3c50b7;
  }
  input {
    outline: none;
    margin-top: 16px;
    padding: 20px 0px 20px 10px;
  }
  
  .select-selector .vs__dropdown-toggle {
    width: 102%;
    color: red;
  }
  
  textarea {
    padding: 10px;
    outline: none;
  }
  input::placeholder {
    font-weight: 500;
    color: #0e0d0d;
  }
  .exmple::placeholder {
    font-weight: 500;
    color: #909090;
   
  }

 
  textarea::placeholder {
    font-weight: 500;
    color: #414040;
  }
  .image-uploaded-input-filed {
    height: 300px;
    padding: 50px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    border: 1px dashed rgb(179, 179, 179);
  }
  .image-uploaded-input-filed:hover .toggle-uploaded {
    display: none;
  }
  
  
  .image-uploaded-input-filed:hover .upload-arrow-img {
    margin-top: 84%;
  }
  
  .upload-arrow-img  {
  
    padding: 10px;
    transition: 0.1s;
  }
  .check-box-group {
    justify-content: space-between;
    padding-top: 22px;
  }
  .image-editor{
    cursor: pointer;
      background: gray;
      border-radius: 50%;
      color: white;
      padding: 1px 9px 10px 9px;
      position: absolute;
      right: 31px;
      top: 6px;
  }
  .image-editor-deletor{
    text-align: start;
      width: 32%;
      background: #f5f5f5;
      position: absolute;
      padding: 16px 13px 16px 11px;
      right: 27px;
      top: 44px;
      z-index: 1;
  }
  </style>
  