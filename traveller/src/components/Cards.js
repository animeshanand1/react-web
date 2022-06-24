import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              text="Explore the hidden waterfall deep
              inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              text="Explore the hidden waterfall deep
              inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
