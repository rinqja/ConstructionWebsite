import React from "react";
import './loader.scss';

export default function Loader(props) {
  return (
    <div className="loader-wrapper">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
