<template>
    <div class=" content-wrapper pt-10 p-20">

        <h4>Step 2 of 3</h4>
        
        <div class="flex pt-5 hover-couser" @click="$emit('goback')">
            <span class="mt-1"> <img src="/img/Back icon.png"/> </span>

            <h4 class=" step-back-btn ext-slate-900 font-semibold ml-4" >
                Back to section layout
            </h4>
        </div>



        <h1 class="font-semiBold text-2xl mt-5 ">Add content</h1>

        <form class="mt-6 border-b-2 border-indigo-10 pb-10 ">

            <div class="mt-6">
                <lable class="font-semibold">Content title</lable>
                <input class="w-full border-2" placeholder="Enter the section title here" />
            </div>

            <div class="mt-6 relative">
                <lable class="font-semibold">How many redemption points available for completing this content?</lable>
                <img  src="/img/coin.png" class="coin-img"/>
                <input class="w-full border-2" placeholder="Enter the points here" />
            </div>

            <div class="mt-6 relative">
                <h2 class="font-semibold">Add content</h2>
            

                <div class="content-icon-group-wrapper p-20 pl-0 border-2 border-indigo-10  text-center mt-6">
       
                <div class="content-icon-group gap-20 flex">
                   <div>
                    <div class=" image img-bg-video"><img class="video-img" src="/img/video icon.png"/></div>
                    <p class="font-semibold mt-2">Add video</p>
                   </div>

                    <div>
                    <div  class=" image img-bg"><img src="/img/pdf icon.png"/></div>
                    <p class="font-semibold mt-2">Add pdf</p>
                    </div>

                    <div  class="relative">
                        <div class="image img-bg"><img src="/img/documentb.png"/></div>
                    <p class="font-semibold text-editor mt-2">Rich text editor</p>
                    </div>
                </div> 

                </div>

        

            </div>


        </form>
        <button class="create-btn float-right" @click="$emit('goback')">Create</button>
    </div>
</template>


<script>

</script>


<style scoped>
 .content-wrapper input::placeholder {
    font-weight: 500;
    color: #504f4f;
    
  }
  

.hover-couser{
  cursor: pointer;
}
input {
    outline: none;
    margin-top: 16px;
    padding: 13px 0px 14px 10px;
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
.img-bg{
    background: #f1f4ff;
    width: 69px;
    height: 70px;
    border-radius: 50%;
    position: relative;
}
.text-editor{
    position: absolute;
    left: 0p;
    left: -18px;
    width: 119px;
}
.img-bg-video{
    background: #f1f4ff;
    width: 69px;
    height: 70px;
    border-radius: 50%;
    position: relative;

}
.img-bg img {
    top: 25px;
    left: 26px;
    position: absolute;
}
.coin-img{
    position: absolute;
    top: 49px;
    left: 94%;
}
.content-icon-group{
    position: absolute;
    left: 27%;
    top: 77px;
}
.image:hover{
    background: #ced6f3;
}
.video-img {
    top: 31px;
    left: 24px;
    position: absolute;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 900px) {
    .content-icon-group {
    position: absolute;
    left: 21%;
    top: 139px;
    }
   
    .content-icon-group-wrapper{
   
    padding: 20% 7% 20% 22%;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1390px) {
  
    .content-icon-group {
    position: absolute;
    left: 33%;
    top: 169px;
}
.content-icon-group-wrapper{
    padding: 10% 7% 21% 22%;
 
}
}
</style>