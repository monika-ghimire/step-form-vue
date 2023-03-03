<template>
    <section class="quiz-option-wrapper ">

        <div class="flex relative" v-for="i in componeteAddPlus" :key="i">
            <img src="/img/drag.png" class="drag-icon" />

            <span class="mt-8 ml-6 quzi-option"><input type="radio" name="option" /></span>
            <span>
                <div class="quiz-options ml-3">
                    Option 1
                </div>
            </span>



            <div class="relative">
                <div class="bg-delete-shadow" @click="deleteCount">
                    <img class="delete-icon-option" src="/img/delete.png" />
                </div>
            </div>
        </div>
        <div class="flex mt-8 add-option" @click="count"><span class="add-btn higlight font-semibold">+</span>
            <span class="font-semibold higlight ml-4 mt-2"> Add Option</span>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            componeteAddPlus: [1],
        }
    },
    methods: {
        count() {
            this.componeteAddPlus++
            console.log("inside count")
            console.log(this.componeteAddPlus)
            this.addednew()
        },

        deleteCount() {
            console.log(this.componeteAddPlus)
            this.componeteAddPlus--
            this.addednew()
        },

        addednew() {
            this.componeteAddPlus.push(this.count);
        },
    }

}

</script>

<style lang="scss" >
.quzi-option {
    margin-top: 38px;
}
</style>

<style scoped>
.quiz-option-wrapper input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: 38px;
    left: 23px;
    position: absolute;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 3px solid rgb(207, 205, 205);
}

.add-option{
    cursor:pointer;
}
.quiz-option-wrapper input[type='radio']:checked:after {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #18811C;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 6px solid #D0E6D1;
}

.add-btn {
    padding: 4px 16px 3px 17px;
    background: #f4f4f4;
    font-weight: bold;
    font-size: 19px;
}

.higlight {
    color: #3c50b7;
}

.quiz-options {
    margin-top: 16px;
    padding: 20px 0px 20px 10px;
    border: 1px solid gainsboro;
    width: 492px;
    margin-left: 18px;

}

.delete-icon-option {
    height: 41%;
    position: absolute;
    top: 25%;
    right: 10px;
}

.bg-delete-shadow {
    background: #F3F3F3;
    width: 35px;
    top: 30px;
    height: 35px;
    right: -40px;
    border-radius: 50%;
    position: absolute;
}

.bg-delete-shadow:hover{
    background: #dedddd;
}
.drag-icon {
    height: 20px;
    margin-top: 38px;
    left: 1px;
    position: absolute;
}
</style>
