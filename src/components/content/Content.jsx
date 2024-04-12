import React from "react";
import "./content.css";
import Text from '../text/Text';
import Text2 from "../text2/Text2";
import Text3 from "../text3/Text3";

const Content = () => {
  return (
    <div className="box">
      <div className="box-in">

        <Text
          text="Hi Sam! I am your personal shopping assistant , how can I help you today ?"
          time="4:45 PM"
        />

        <div className="second-box">
          <Text
            text="I am looking for a hand bag, with long strap."
            time="4:46 PM"
          />
        </div>


        <Text2 />

        <Text3 />
        
      </div>
    </div>
  );
};

export default Content;
