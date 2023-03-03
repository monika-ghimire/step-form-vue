

<template>
    <div  class=" action-pop-over border-2 border-indigo-10 ">
        <div class="flex">
            <span> <img src="/img/editcontent.png" /></span>
            <span class="ml-1 mt-2">Rename Section</span>
        </div>

        <div class="pt-6 flex">
            <span class="ml-2">
                <img src="/img/copy.png" />
            </span>

            <span class="ml-4">Duplicate Section</span>

        </div>
        <div class="delete-section flex">
            <span class="ml-2">
                <img src="/img/rdelete.png" />
            </span>
            <span class="ml-4">Delete Section</span>
        </div>

    </div>
</template>

<script>

</script>


<style scoped>
.action-pop-over{
    color: red;
    position: absolute;
    top: 66px;
    right: 36px;
    z-index: 1;
    padding: 12px 29px 5px 9px;
    background: white;
}
.delete-section{
    color: rgb(250, 81, 39);
    border-top: 1px solid gainsboro;
    margin-top: 16px;
    padding: 8px 9px 8px 2px
}

</style>
