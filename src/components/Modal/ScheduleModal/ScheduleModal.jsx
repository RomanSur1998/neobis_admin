import React from "react";
import styles from "./ScheduleModal.module.css";
import classnames from "classnames";
import BackgroundModal from "../BackgroundModal/BackgroundModal";
import HeaderModals from "../../../ui/HeaderModals/HeaderModals";

const ScheduleModal = ({ workDays }) => {
  console.log(workDays, "PROPS SCHELUDE");

  return (
    <BackgroundModal>
      <div className={classnames(styles.container)}>
        <HeaderModals name="График работы" />

        <div className={classnames(styles.header, styles.flex)}>
          <div className={classnames(styles.block)}>
            <span className={classnames(styles.title)}>День недели</span>
          </div>
          <div className={classnames(styles.block)}>
            <span className={classnames(styles.title)}>Время работы</span>
          </div>
        </div>
        <div className={classnames(styles.content, styles.flex)}>
          {workDays?.map((item) => {
            return (
              <div className={classnames(styles.row)} key={item.day}>
                <div className={classnames(styles.block)}>
                  <p className={classnames(styles.text)}>{item.day}</p>
                </div>
                <div
                  className={classnames(styles.block, styles.time, styles.flex)}
                >
                  <p
                    className={classnames(styles.text, {
                      [styles.color]: item.checked !== true,
                    })}
                  >
                    {item?.checked ? `${item.from}-${item.from}` : "Выходной"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </BackgroundModal>
  );
};

export default ScheduleModal;
