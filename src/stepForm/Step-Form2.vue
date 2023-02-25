<template>

 <div class="pl-20 pt-10 ">
<div></div>
    <div class="form-heading-holder border-b-2 border-indigo-10 pb-6 ">
        <h3 class="text-slate-700 font-semibold " >Step 2 of 3</h3>
        <h4 class="text-slate-900 pt-5" @click="$emit('back')">Back to Course Information</h4>
        <h1 class=" text-xl font-semibold pt-6">Add sections</h1>
        <h5 class="text-slate-900 pt-4">Start putting together your course by creating sections, lectures and practice (quizzes, videos Pdf and more ).</h5>
    </div>
    
    <section class="border-b-2 border-indigo-10 pb-20">
        <div class="border-2 border-indigo-10 mt-10 p-4">
            <div class="pb-6 border-b-2 border-indigo-10">
                <h3 class="higlight font-semibold">Section 1</h3>
                <h1 class="font-semibold mt-2">Section Title here</h1>
            </div>

            <div class="flex pt-4 pb-4">
                <button class="text-center text-2xl higlight font-semibold add-section-btn"> + </button>
                <h2 class="higlight font-semibold mt-2 ml-5">Add new content</h2>
            </div>

        </div>

        <div class="border-2 border-indigo-10 mt-10 p-4">
            <div class="flex pt-4 pb-4">
                <button class="text-center text-2xl higlight font-semibold add-section-btn"> + </button>
                <h2 class="higlight font-semibold mt-2 ml-5">Add new content</h2>
            </div>

        </div>
    </section>

</div>

</template>


<script>

</script>

<style scoped>
.higlight{
    color: #3c50b7;
}
.add-section-btn{
    background: rgb(234, 232, 232);
    padding: 6px 16px 6px 16px;
}

</style>