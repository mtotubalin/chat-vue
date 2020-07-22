<template>
    <div class="room_list">
        <div class="collection">
            <room-list-item
                    v-for="room in rooms"
                    :key="room.id"
                    :id="room.id"
                    :name="room.name"
                    :countUsers="room.countUsers"
                    :maxUsers="room.maxUsers"/>
        </div>
    </div>
</template>

<script>
    import RoomListItem from './RoomListItem.vue';
    import { socket } from '../js/Chat';

    export default {
        components: {
            RoomListItem,
        },
        data() {
            return {
                rooms: [],
            };
        },
        mounted() {
            socket.on('update_room_list', (newRoomList) => {
                this.rooms = newRoomList
            });
        },
    }
</script>
<style>
</style>

<style>
    .room_list {
        overflow-y: scroll;
        height: 80vh;
    }
</style>
