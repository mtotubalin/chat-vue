<template>
    <div id="message_list" class="scale-transition">
        <message-item v-for="message in messages"
                      :key="message.id"
                      :owner="message.ownerId === userId">
            {{ message.text }}
        </message-item>
    </div>
</template>

<script>
    import MessageItem from "./Message";
    import { socket, id } from '../js/Chat'

    export default {
        computed: {
            userId: function () {
                return id;
            },
        },
        components: {
            MessageItem,
        },
        data() {
            return {
                messageListElement: {},
                messages: [],
            };
        },
        methods: {
            scrollToNewMessage: function () {
                this.messageListElement.scrollTop = this.messageListElement.scrollHeight - this.messageListElement.clientHeight;
            }
        },
        mounted() {
            socket.on('update_message_list', (messageList) => {
                this.messages = messageList;
                this.scrollToNewMessage();
            });

            this.messageListElement = document.getElementById('message_list');
            this.scrollToNewMessage();
        }
    }
</script>
<style>
</style>

<style>
    #message_list {
        scroll-behavior: smooth;
        overflow-y: scroll;
        padding-top: 10px;
        height: 80%;
    }
</style>
