<template>
  <div class="">
    <section class="pt-6 border-b-2 border-indigo-10 pb-20">
      <div>
        <h1 class="font-semibold">Publish Date & time</h1>

        <div class="border-2 border-indigo-10 mt-6">
          <div class="flex p-6 pt-4 border-b-2 border-indigo-10">
            <span>
              <input type="radio" checked />
            </span>
            <div class="pl-4">
              <h2 class="font-semibold">Save or publish</h2>
              <span>Make your course public</span>

              <div class="p-6 flex">
                <span>
                  <input type="radio" />
                </span>

                <div class="pl-4">
                  <h2 class="font-semibold">Publish now</h2>
                  <span
                    >By saving as a draft your course will save as draft and can
                    be publish later.</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="p-20 pb-8 pt-3 flex">
            <span>
              <input type="radio" />
            </span>

            <div class="pl-4">
              <h2 class="font-semibold">Publish now</h2>
              <span
                >By saving as a draft your course will save as draft and can be
                publish later.</span
              >
            </div>
          </div>
        </div>

        <div class="border-2 border-indigo-10 pb-8 p-8 mt-12 flex">
          <span>
            <input type="radio" checked />
          </span>

          <div class="pl-4 relative">
            <h2 class="font-semibold">Schedule</h2>
            <span>You can select a date to publish your course</span>

            <div class="date-time-picker mt-4 flex">
              <div class="w-full border-2 border-indigo-10">
                <input type="date" class="" />
              </div>

              <div>
                <el-time-select
                  class="time-picker"
                  placeholder="Start time"
                  v-model="startTime"
                 
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                >
                </el-time-select>
              </div>
            </div>
          </div>
        </div>
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

.el-step__head.is-success {
    color: #4D74B1;
    border-color: #4D74B1;
}
.el-step__description.is-success {
    color: #4D74B1;
}
.el-step__description.is-process {
    color: #7d7e7e;
}
.el-step__title.is-process {
    font-weight: 700;
    color: #7d7e7e;
}
.el-step__head.is-process {
    color: #4D74B1;
    border-color: #4D74B1;
}

.el-step__icon.is-text {
 
    border: 2px solid #4D74B1;
    border-color: inherit;
}
</style>

<style scoped>
.date-time-picker input {
  padding: 5px 0px 5px 5px;
}
.time-picker{
    position: absolute;
    top: 58px;
    left: 344px;
    padding: 5px;
   
}
</style>
