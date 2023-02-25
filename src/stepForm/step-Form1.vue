<template>
  <div class="pl-20 pt-10">
    <div class="form-heading-holder border-b-2 border-indigo-10 pb-6">
      <h2 class="pb-6">Step 1 of 3</h2>
      <h1 class="font-semibold text-2xl">Let’s help you create a course</h1>
    </div>

    <section>
      <form class="pt-14 pb-14 border-b-2 border-indigo-10">
        <div class="">
          <lable class="font-semibold">Course title</lable>

          <input
            class="w-full border-2"
            placeholder="Enter the course title here"
          />
        </div>

        <div class="pt-14">
          <label class="font-semibold">Course Description</label>
          <br />
          <br />
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter course description here"
            class="w-full border-2"
          ></textarea>
        </div>

        <div class="pt-14">
          <label class="font-semibold">Course cover image</label>
          <br />
          <br />
          <div class="w-full border-2 image-uploaded-input-filed">
          

            <div class="upload-arrow-img">
              <img  src="../asset/upload icon.png"  />
            </div>

            <div class="toggle-uploaded">
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
          <h1 class="font-semibold text-xl">
            What will students learn in your course?
          </h1>
          <h5 class="font-semibold text-base pt-2">
            Enter the learning objectives or outcomes that learners can expect
            to achieve after completing your course.
          </h5>

          <input
            class="w-full border-2"
            placeholder="Example : Identify and manage project risks"
          />

          <button class="Add-More-btn pt-4 higlight border-0 font-semibold">
            + Add More
          </button>
        </div>

        <h1 class="font-semibold mt-10">
          What does the course provide to learners ( Select multiple if
          applicable )
        </h1>

        <div class="flex check-box-group">
          <div>
            <input type="checkbox" />
            <span> Expert mentorship</span>
          </div>

          <div>
            <input type="checkbox" />
            <span> Video tutorials</span>
          </div>

          <div>
            <input type="checkbox" />
            <span> Unlimited access</span>
          </div>
        </div>

        <div class="pt-14">
          <label class="font-semibold">Brand Created for</label>
          <br />
          <br />
          <input placeholder="Select here" class="w-full border-2" />
        </div>

        <div class="pt-14">
          <label class="font-semibold">Retailer</label>
          <br />
          <br />
          <input placeholder="Selecr the retailer" class="w-full border-2" />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dialogImageUrl: "",
      // dialogVisible: false,
      
    };
  },
}
</script>

<style></style>

<style scoped>


.higlight {
  color: #3c50b7;
}
input {
  outline: none;
  margin-top: 16px;
  padding: 20px 0px 20px 10px;
}
textarea {
  padding: 10px;
  outline: none;
}
input::placeholder {
  font-weight: 500;
  color: #414040;
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
}
.image-uploaded-input-filed:hover .toggle-uploaded {
  display: none;
}

.image-uploaded-input-filed:hover .upload-arrow-img img {
  margin-top: 10%;
}

.upload-arrow-img img {
  margin-left: 43%;
  padding: 10px;
  transition: 0.1s;
}
.check-box-group {
  justify-content: space-between;
  padding-top: 40px;
}
</style>
