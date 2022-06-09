import React from "react";
import moment from "moment";
import Link from "next/link";
import styles from "../../../styles/payments/Success.module.scss";
import { getOrderDetail } from "../../../services/apiServices";

export async function getServerSideProps(context) {
  const { paymentId } = context.query;
  const orderDetail = await (await getOrderDetail(paymentId)).data.data;
  return {
    props: {
      orderDetail,
    },
  };
}

const success = ({ orderDetail }) => {
  const { order } = orderDetail;
  return (
    <div className={styles.main_container}>
      <h3 className={styles.company_logo}>
        <img src="/static/kaarwan_logo.svg" alt="kaarwan logo" />
      </h3>
      <div className={styles.success}>
        <div className={styles.success__icon}>
          <img
            src="/static/icons8-ok-60.svg"
            alt="payment done"
            className={styles.icon}
          />
        </div>
        <div className={styles.success__text}>
          <h3>Congratulations! You have registered successfully.</h3>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.left_content}>
          <div className={styles.workshop_details}>
            <p className={styles.workshop_name}>
              Advance Parametric & Computational Design in Rhino for Architects
              {/* {order.Workshop?.name} */}
            </p>
            <p className={styles.short_bar}></p>
            <p className={styles.workshop_date}>
              <span>
                Starts on {moment(order.Batch.startDate).format("ll")}{" "}
              </span>
              <span>
                <img
                  src="/static/clock.svg"
                  alt="workshop schedule"
                  className={styles.icon_clock}
                />{" "}
                {moment(
                  new Date(
                    "2022-12-12T" + order.Batch.BatchSchedules[0].startTime
                  )
                ).format("LT")}
                {" - "}
                {moment(
                  new Date(
                    "2022-12-12T" + order.Batch.BatchSchedules[0].endTime
                  )
                ).format("LT")}
              </span>
            </p>
            <p className={styles.user_email}>
              <img
                src="/static/mail_2.svg"
                alt="workshop schedule"
                className={styles.icon_mail}
              />{" "}
              {order.User.email}
            </p>
          </div>

          {order.Batch.whatsappLink && (
            <h3 className={styles.group_join_text}>
              Join this course whatsapp group, so you never miss an important
              update.
            </h3>
          )}

          <div className={styles.footer_buttons}>
            {order.Batch.whatsappLink && (
              <a
                href={order.Batch.whatsappLink}
                className={styles.whatsapp_btn}
              >
                <img src="/static/whatsapp-48.svg" alt="WhatsApp Icon" />
                Course WhatsApp Group
              </a>
            )}

            <Link href="https://www.kaarwan.com">
              <a className={styles.btn_back}>Go back to home</a>
            </Link>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.contact_info}>
            <ul>
              <li>Please check your email for payment receipt.</li>
              <li>
                Further details would be sent 24-48 hours from the workshop
                date.
              </li>
              <li>
                Please add <b>hola@kaarwan.com</b> to your email contacts to
                prevent emails going to spam.
              </li>
            </ul>
          </div>

          <div className={styles.contact_details}>
            <a href="mailto:hola@kaarwan.com" className={styles.company_email}>
              <img
                src="/static/mail_gray.svg"
                alt="workshop schedule"
                className={styles.icon_mail}
              />{" "}
              hola@kaarwan.com
            </a>
            <a href="tel:9833777469" className={styles.company_mobile}>
              <img
                src="/static/phone_2.svg"
                alt="workshop schedule"
                className={styles.icon_mail}
              />
              9833777469
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default success;
