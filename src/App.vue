<template >
    <div>
        我是根组件啊
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { SysUser } from './api/user';
onMounted(() => {
    SysUser.Login({ username: 'admin', password: '111111' }).then((ret) => {
        if (ret) {
            console.log(ret)
        } else {

        }
    })
})

</script>
<style lang="scss"></style>