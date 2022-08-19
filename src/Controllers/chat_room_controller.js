const {
    add, list, listById, isCheckUser, listIsRoom,

} = require("../Services/chat_room_service");

const addChatRoom = async (req, res) => {
    add(req.body)
        .then((room) => {
            res.send(room);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

const listChatRoom = (req, res) => {
    const userId = req.body.user_id;
    list(roomId)
        .then((rooms) => {
            res.send(rooms);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

const getChatRoomById = (req, res) => {
    const roomId = req.body.room_id;
    listById(roomId)
        .then((room) => {
            if (!room) return res.status(500).send("Not Found");

            res.send(room);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

const addUser = (req, res) => {
    const userId = req.body.user_id;
    const roomId = req.body.room_id
    listById(roomId)
        .then((room) => {
            if (room.users.includes(userId)) return res.status(500).send("User already exists");

            room.users.push(userId);
            room.save();
            res.send("Succes");
        })
        .catch((err) => {
            res.status(500).json({
                code: 500, message: err,
            });
        });
};

const isRoom = (req, res) => {
    const {user1, user2} = req.body;
    listIsRoom()
        .then((rooms) => {
            const data = rooms.find((e) => e.users.includes(user1) && e.users.includes(user2));
            if (data) return res.send(data._id);

            res.send("false");
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

module.exports = {
    addChatRoom, listChatRoom, getChatRoomById, addUser, isRoom,
};
