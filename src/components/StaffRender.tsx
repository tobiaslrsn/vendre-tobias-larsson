import { useState } from "react";
import { IStaff } from "../models/IStaff";
import style from "./styles/staffrender.module.scss";

interface IRenderStaffList {
  staffList: IStaff;
}
export const StaffRender = (props: IRenderStaffList) => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <>
      <div className={style["staff-card"]}>
        <img
          src={props.staffList.avatar}
          alt={"Photo of staffmember " + props.staffList.first_name}
        />
        <h3>{props.staffList.first_name}</h3>

        {showContactInfo ? (
          <>
            <a
              href={"mailto:" + props.staffList.email}
              className={style["fade-in"]}
            >
              {props.staffList.email}
            </a>
            <button
              className={style["contact-btn"]}
              onClick={() => {
                setShowContactInfo(false);
              }}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <button
              className={style["contact-btn"]}
              onClick={() => {
                setShowContactInfo(true);
              }}
            >
              Contact
            </button>
          </>
        )}
      </div>
    </>
  );
};
