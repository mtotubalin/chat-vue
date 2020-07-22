import io from "socket.io-client";

const domain = document.domain;
const port = "2021";

export let socket = io("http://" + domain + ":" + port);
export let id = 0;
export let name = "";

socket.on("login", (user) => {
    id = user.id;
    name = user.name;
});

export function send(message) {
    socket.emit("new_message", message);
}

export function join(roomId) {
    socket.emit("join", roomId);
}

export function enterName(name) {
    if ("" === name) {
        throw 'Name is empty!';
    }

    socket.emit("set_name", name);
}

// socket.on("connect", () => connectionHandler());
// socket.on("update_room_list", (newRoomList) => roomListUpdateHandler(newRoomList));


// function connectionHandler() {
//     console.log("connect");
// }
//
// function roomListUpdateHandler(newRoomList) {
//     console.log(newRoomList);
// }
