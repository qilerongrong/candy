<template>
    <div class="header-bar">
        <slot name="left" />
        <slot name="center" />
        <slot name="right" />
    </div>
</template>

<style lang="scss" scoped>
.header-bar{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:0.6rem;
    justify-items: center;
}
</style>