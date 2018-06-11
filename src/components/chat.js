import React, { Component } from "react";
import MessageInput from "./message_input";
import db from "../firebase";
import { connect } from "react-redux";
import { updateChat } from "../actions";

class Chat extends Component {
	componentDidMount() {
		db.ref("/chat-log").on("value", snapshot => {
			// console.log("Chat Data:", snapshot.val());
			this.props.updateChat(snapshot.val());
		});
	}

	render() {
		const { chatLog } = this.props;

		const chatElements = Object.keys(chatLog).map((key, index) => {
			const { name, message } = chatLog[key];

			return (
				<li className="collection-item" key={key}>
					<b>{name}:</b>
					{message}
				</li>
			);
		});

		return (
			<div>
				<h1 className="center">Chat Room</h1>
				<ul className="collection">{chatElements}</ul>
				<MessageInput />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		chatLog: state.chat.log
	};
}

export default connect(
	mapStateToProps,
	{ updateChat }
)(Chat);
