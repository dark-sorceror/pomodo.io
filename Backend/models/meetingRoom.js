const mongoose = require('mongoose');

const meetingRoomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  discordChannelId: { type: String }  // Optionally, store Discord Channel ID for text/voice channel
});

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema);

module.exports = MeetingRoom;