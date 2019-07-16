<template>
    <div class="header-bar">
        <slot class="left" name="left" />
        <slot name="center" />
        <slot class="right" name="right" />
    </div>
</template>

<style lang="scss" scoped>
.header-bar{
    display:flex;
    padding:0 0.2rem;
    justify-content: space-between;
    align-items: center;
    height:0.6rem;
    justify-items: center;
    font-size:0.18rem;
}
</style>