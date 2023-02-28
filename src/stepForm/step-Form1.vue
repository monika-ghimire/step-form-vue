<template>
  <div class="pl-20 pt-10">
    <section>
      <form class="pt-14 pb-14 border-b-2 border-indigo-10">
        <div class="">
          <lable class="font-semibold">Title</lable>

          <input
            class="w-full border-2"
            placeholder="Enter the section title here"
          />
        </div>

        <div class="pt-10">
          <lable class="font-semibold"
            >How much point for completing this Quiz ?</lable
          >
          <input
            class="w-full border-2"
            placeholder="Enter the section title here"
          />
        </div>
      </form>

      <section class="mt-10">
        <h1 class="text-2xl">Questions</h1>

        <div class="border-b-0 border-2 border-indigo-10 mt-4">

          <div
            class="border-b-2 border-indigo-10 grid grid-cols-2 pt-0 p-4 mt-4">
            <div><h2>Question 1</h2></div>
            <div class="icons-group ml-60 flex ">
              <span>111</span>
              <span>112</span>
              <span>113</span>
            </div>
     
          </div>

          <section class="p-6">
              <div class="">
                <lable class="">Question</lable>
                <input
                  class="w-full border-2"
                  placeholder="Enter the question here"
                />
              </div>

              <div class="pt-3">
                <input
                  class="w-full border-2"
                  placeholder="Multiple choice questions"
                />
              </div>
              
            </section>
        </div>

        <div class="border-2 border-indigo-10 p-10 pt-4">
 
            <span class="font-semibold">Answers</span>
            <span class="float-right">Correct answer</span>
        </div>


      </section>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.higlight {
  color: #3c50b7;
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
  justify-content: space-between;
}
</style>
