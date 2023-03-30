import "./Emailrow.css";
import React from "react";
import { Checkbox, Icon, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
function Emailrow({ title, subject, description, time }) {
  const history = useNavigate();
  return (
    <div onClick={() => history("./Mail")} className="emailrow">
      <div className="emailrow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title}</h3>
      <div className="emailrow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>
      <p className="emailrow_time">{time}</p>
    </div>
  );
}

export default Emailrow;
