<template>
    <div class="message_new">
        <div class="input-field col s12 valign-down">
            <textarea
                    maxlength="200"
                    rows="2"
                    @keyup.enter="send"
                    id="message"
                    class="materialize-textarea"
                    v-model="message">
            </textarea>
            <label for="message">Message</label>
        </div>
    </div>
</template>

<script>
    import { send } from '../js/Chat.js';

    export default {
        components: {
        },
        data() {
            return {
                message: '',
            };
        },
        methods: {
            send: function () {
                if ('' !== this.message) {
                    send(this.message);
                    this.message = '';
                    console.log(this.message);
                }
            },
        },
        mounted() {

        }
    }
</script>

<style>
    .message_new {
        height: 20%;
    }

</style>
