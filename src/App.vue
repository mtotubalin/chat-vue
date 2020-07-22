<template>
    <div id="app" class="container">
        <div class="row card">
            <enter-name-modal/>
            <room-list class="col s4"/>
            <room class="col s8"/>
        </div>
    </div>
</template>

<script>
    import RoomList from './components/RoomList.vue';
    import Room from './components/Room.vue';
    import EnterNameModal from './components/EnterNameModal.vue';

    export default {
        name: 'App',
        components: {
            Room,
            RoomList,
            EnterNameModal,
        },
        mounted() {
        },
    }
</script>
