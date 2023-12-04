import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import { LOGO_IMAGE } from "@config";

import "react-chat-widget/lib/styles.css";

function ChatComponent() {
  useEffect(() => {
    addResponseMessage("Welcome to the chat!");

    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  const handleNewUserMessage = async newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage }),
      });

      const data = await response.json();
      console.log(data); // You can process the response here
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={`/assets/${LOGO_IMAGE.svg ? "logo.svg" : "logo.png"}`}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </div>
  );
}

export default ChatComponent;
