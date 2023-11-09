import React from "react";
import "./modals.css";

export function Modal({ closeModal }) {
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div className="title">
          <p>
            What is the new player's name? <input type="text"></input>
          </p>
        </div>
        <div className="body">
          <p>
            How many points per game did this player average for their career?{" "}
            <input type="text"></input>
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export function Removemodal({ closeModal, addPlayers }) {
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div className="title">
          <p>
            What player do you want to remove?<input type="text"></input>
          </p>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              addPlayers(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}