<template>
    <div id="enterModal" class="modal">
        <div class="modal-content">
            <div class="input-field">
                <input placeholder="Your name"
                       id="name"
                       type="text"
                       v-model="name"
                       required="required"
                       class="validate">
                <label for="name">Enter your name</label>
                <span class="helper-text" :data-error="wrong" data-success="right"></span>
            </div>
        </div>
        <div class="modal-footer">
            <button @click="sendName(name)" class="waves-effect waves-green btn-flat">Ok</button>
        </div>
    </div>
</template>

<script>
    import M from "materialize-css";
    import { enterName } from "../js/Chat";

    export default {
        data() {
            return {
                name: "",
                instance: {},
                wrong: "",
            };
        },
        components: {},
        methods: {
            sendName: function(name) {
                try {
                    enterName(name);
                    this.instance.close();
                } catch (e) {
                    this.wrong = e;
                }
            },
        },
        mounted() {
            let el = document.getElementById("enterModal");

            M.Modal.init(el, {
                dismissible: false,
            })
            this.instance = M.Modal.getInstance(el);
            this.instance.open();
        },
    }
</script>
