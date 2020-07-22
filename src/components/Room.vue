<template>
    <div class="room">
        <message-list/>
        <message-new/>
    </div>
</template>

<script>
    import MessageList from './MessageList.vue';
    import MessageNew from './MessageNew.vue';

    export default {
        components: {
            MessageList,
            MessageNew,
        },
        data() {
            return {
            };
        },
    }
</script>

<style>
    .room {
        height: 80vh;
    }
</style>
