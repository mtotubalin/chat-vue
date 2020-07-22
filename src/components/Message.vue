<template>
    <div :class="'col s8 ' + (owner ? 'offset-s4' : '')">
        <div :class="'message ' + (owner ? 'owner blue lighten-4' : 'indigo lighten-5')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: ["owner"],
        data() {
            return {
            };
        },
    }
</script>
<style>
</style>

<style>
    .message {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .message.owner {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 0;
    }

</style>
