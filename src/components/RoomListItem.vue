<template>
    <a @click="joinRoom(id)" class="collection-item">
        {{ name }}
        ({{ countUsers }}/{{ maxUsers }})
    </a>
</template>

<script>
    import { join } from '../js/Chat';

    export default {
        props: ["id", "name", "countUsers", "maxUsers", ],
        data() {
            return {
            };
        },
        methods: {
            joinRoom: function (roomId) {
                join(roomId);
            },
        },
    }
</script>
