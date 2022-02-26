import React from "react";
import { useLocation } from "react-router-dom";

import "./Project.module.css";
import Message from "../layout/Message";

export default function Projects() {

  const location = useLocation();
  let message = ""
  if (location.state){
    message = location.state.message
  }

  return(
    <main>
      <h1>Projetos</h1>
      <div>
        {message && (
           <Message type="success" message={message} />
        )}
      </div>
    </main>
  );
}
