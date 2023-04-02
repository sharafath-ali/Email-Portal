import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import EmailIcon from "@mui/icons-material/Email";
import ErrorIcon from "@mui/icons-material/Error";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Mail.css";
import { useNavigate } from "react-router-dom";
function Mail() {
  const history = useNavigate();
  return (
    <div className="Mail">
      <div className="Mail_tool">
        <div className="Mail_tool_left">
          <IconButton
            onClick={() => {
              history("/");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon style={{ color: "gray" }} />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon style={{ color: "gray" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: "gray" }} />
          </IconButton>
        </div>
        <div className="Mail_tool_right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_body_header">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail_important" />
          <p>Title</p>
          <p>10pm</p>
        </div>
        <div className="mail_message">this is a message</div>
      </div>
    </div>
  );
}

export default Mail;
