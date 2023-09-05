import React from "react";
import "./style.css";

export const ToDoListDesign = (): JSX.Element => {
  return (
    <div className="to-do-list-design">
      <div className="to-do-list-container-wrapper">
        <div className="to-do-list-container">
          <div className="text-wrapper">Add to do...</div>
          <div className="divider" />
          <div className="to-do-pending">
            <img className="image" alt="Image" src="/img/image-2.png" />
            <div className="div">Update flow</div>
          </div>
          <div className="to-do-pending-2">
            <img className="image" alt="Image" src="/img/image-2.png" />
            <div className="div">Add state management</div>
          </div>
          <div className="to-do-pending-3">
            <img className="image" alt="Image" src="/img/image-2.png" />
            <div className="div">Push to code</div>
          </div>
          <div className="to-do-pending-4">
            <img className="image" alt="Image" src="/img/image-2.png" />
            <p className="p">Export to builder and make components</p>
          </div>
          <div className="to-do-complete">
            <p className="div">Tag with Locofy and make responsive</p>
            <img className="image" alt="Image" src="/img/image-2.png" />
          </div>
          <div className="to-do-complete-2">
            <div className="div">Make responsive on Figma</div>
            <img className="image" alt="Image" src="/img/image-2.png" />
          </div>
          <div className="to-do-complete-3">
            <img className="image" alt="Image" src="/img/image-1.png" />
            <div className="text-wrapper-2">Finish designs</div>
          </div>
          <div className="divider-2" />
          <header className="header">
            <div className="title-notes">
              <div className="text-wrapper-3">To Do</div>
              <div className="text-wrapper-4">User feedback tomorrow!</div>
            </div>
            <div className="emoji">
              <div className="text-wrapper-5">🌤️</div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
