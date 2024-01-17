import React from "react";
import { UploadDetails } from "./UploadDetails";
import { ClientWelcomeMessage } from "./ClientWelcomeMessage";

const props1 = {
  title: "Company Logo",
  info: "Upload your logo and have it displayed in the Admin Portal, Client Portal and Email Communications to clients.",
  size: "Upload either a .jpg or .png file size not exceeding 2MB. (250 x 80px)",
  btnName: "Upload Logo",
};

const props2 = {
  title: "Client Portal Background",
  info: "Upload your cover photo and have it displayed in the Client Portal login page to give your clients a more personalized branding experience.",
  size: "Upload either a .jpg or .png file size not exceeding 2MB. (1400 x 840px)",
  btnName: "Upload Background Photo",
};
export const FirmDetails: React.FC = () => {
  return (
    <div id="firmDetils">
      <UploadDetails
        title={props1.title}
        info={props1.info}
        size={props1.size}
        btnName={props1.btnName}
      />
      <UploadDetails
        title={props2.title}
        info={props2.info}
        size={props2.size}
        btnName={props2.btnName}
      />
      <ClientWelcomeMessage />
    </div>
  );
};
