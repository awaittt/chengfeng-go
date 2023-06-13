<template>
    <div>
      <svg :style="{ width, height }">
        <use :xlink:href="prefix + name" :fill="color"></use>
      </svg>
    </div>
  </template>

<script setup lang="ts">
defineProps({
    //xlink:href的前缀
    prefix:{
        type:String,
        default:'#icon-'
    },
        //xlink:href的后缀
    name:String,
        //fill
        color:{
            type:String,
            dafault:'black'
        },
        //宽度
        width:{
            type:String,
            default:'100px'
        },
        //长度
        height:{
            type:String,
            default:'100px'
        }


    
})
</script>


<style scoped>
</style>