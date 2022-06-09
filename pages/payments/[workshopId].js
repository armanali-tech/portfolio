import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { getWorkshopBatchInfo } from "../../services/apiServices";
import Razorpay from "../../components/Razorpay";
import Modal from "../../components/Modal";
import styles from "../../styles/payments/Payments.module.scss";
import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

import validator from "validator";

export async function getServerSideProps({ query }) {
  return {
    props: query, // will be passed to props
  };
}

const Payment = (props) => {
  const inputRef = useRef();

  const [workshopInfo, setWorkshopInfo] = useState({});
  const [success, setSuccess] = useState({
    userCreated: false,
    payment: false,
    orderId: "",
  });

  const { workshopId } = props;

  const workshopBatchInfo = async () => {
    getWorkshopBatchInfo(workshopId)
      .then(({ data }) => {
        const { batches } = data.data;
        setWorkshopInfo(batches);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };

  useEffect(() => {
    workshopBatchInfo();
  }, []);

  if (!workshopInfo) {
    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 4000);
    return (
      <Modal auto={true}>
        <div className={styles.modal_content}>
          <h2>Workshops coming soon...</h2>
        </div>
      </Modal>
    );
  }

  return (
    <div className={styles.main_container} id="main_content">
      <div className={styles.content}>
        <Header />
        <div className={styles.details__view}>
          <h1>{workshopInfo.Workshop?.name}</h1>
          <div className={styles.title_underline} />
          <h3 style={{ margin: "20px 0" }}>{workshopInfo?.description}</h3>

          <div className={styles.description}>
            <h4 style={{ margin: "10px 0", fontWeight: "500" }}>
              Batch {workshopInfo.batchNo || ""}
            </h4>
            <h4 style={{ margin: "5px 0", fontWeight: "500" }}>
              Date: {moment(workshopInfo.startDate).format("Do MMM")} -{" "}
              {moment(workshopInfo.endDate).format("Do MMM")}{" "}
              {moment(workshopInfo.endDate).format("YYYY")}
            </h4>

            <h4 style={{ margin: "12px 0" }}>Timings</h4>

            {workshopInfo?.BatchSchedules?.map((schedule) => (
              <p key={schedule.id}>
                {moment(schedule.date).format("dddd")} :{" "}
                {moment(`${schedule.date} ${schedule.startTime}`).format("LT")}{" "}
                - {moment(`${schedule.date} ${schedule.endTime}`).format("LT")}
              </p>
            ))}
            {/* <p>Wednesday: Flexible with Recorded Session</p> */}
          </div>

          <div className={styles.notes}>
            <h3>Important:</h3>
            {workshopInfo.notes?.map((note, index) => (
              <p key={index} className={styles.note}>
                {note}
              </p>
            ))}
          </div>
        </div>

        <input
          type="checkbox"
          style={{ display: "none" }}
          id={styles.showPayment}
          ref={inputRef}
        />
        <PaymentForm
          workshopInfo={workshopInfo}
          inputRef={inputRef}
          setSuccess={setSuccess}
        />
        <label htmlFor={styles.showPayment} className={styles.btn_open}>
          Next
        </label>

        <div className={styles.contact__info}>
          <h5 className={styles.short__heading}>Share this on</h5>
          <div className={styles.social__icons}>
            <FacebookShareButton
              url='https://pages.razorpay.com/structures-mini?quote=Checkout "Learn Building Structures easily!" Payment Page built with Razorpay.'
              hashtag="#razorpay"
            >
              <span className={styles.social__button}>
                <i className={styles.fb__icon} />
              </span>
            </FacebookShareButton>
            <TwitterShareButton url='https://pages.razorpay.com/structures-mini?text=Checkout "Learn Building Structures easily!" Payment Page built with Razorpay.'>
              <span className={styles.social__button}>
                <i className={styles.twitter__icon} />
              </span>
            </TwitterShareButton>
            <WhatsappShareButton url='https://pages.razorpay.com/structures-mini?quote=Checkout Checkout "Learn Building Structures easily!" Payment Page built with Razorpay.'>
              <span className={styles.social__button}>
                <i className={styles.whatsapp__icon}></i>
              </span>
            </WhatsappShareButton>
          </div>

          <h5 className={styles.short__heading}>Contact Us</h5>
          <div className="email-and-call">
            <a href="mailto:hola@kaarwan.com">
              <img
                src="/static/mail.svg"
                alt=""
                style={{ width: "14px", marginRight: "6px" }}
              />
              hola@kaarwan.com
            </a>
            <br />
            <a href="tel:9833777469">
              <img
                src="/static/phone.svg"
                alt=""
                style={{ width: "14px", marginRight: "6px" }}
              />
              9833777469
            </a>
          </div>

          <h5 className={styles.short__heading}>Terms & Conditions</h5>
          <div className={styles.terms_and_conditions}>
            <p>
              You agree to share information entered on this page with KAARWAN
              EDUVENTURES PRIVATE LIMITED (owner of this page) and Razorpay,
              adhering to applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

const PaymentForm = ({ workshopInfo, inputRef, setSuccess }) => {
  const [payment, setPayment] = useState(false);
  const totalGST = workshopInfo.amount * (18 / 100);

  const [paymentData, setPaymentData] = useState({
    name: "",
    email: "",
    college: "",
    company: "",
    mobile: "",
    iam: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    college: false,
    company: false,
    mobile: false,
    iam: false,
  });

  const [validationError, setValidationError] = useState({
    email: false,
    mobile: false,
  });

  const handlePayment = (e) => {
    e.preventDefault();
    paymentData.name === ""
      ? setError((prevState) => ({ ...prevState, name: true }))
      : setError((prevState) => ({ ...prevState, name: false }));

    paymentData.email === ""
      ? setError((prevState) => ({ ...prevState, email: true }))
      : setError((prevState) => ({ ...prevState, email: false }));

    paymentData.mobile === ""
      ? setError((prevState) => ({ ...prevState, mobile: true }))
      : setError((prevState) => ({ ...prevState, mobile: false }));

    paymentData.iam === ""
      ? setError((prevState) => ({ ...prevState, iam: true }))
      : setError((prevState) => ({ ...prevState, iam: false }));

    if (paymentData.email && paymentData.email && paymentData.mobile) {
      setPayment(true);
      e.target.value = false;
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "email") {
      const isValid = validator.isEmail(value);

      setValidationError((prevState) => ({
        ...prevState,
        email: !isValid ? true : false,
      }));
    }
    if (name === "mobile") {
      const isValid = validator.isMobilePhone(value, "en-IN");

      setValidationError((prevState) => ({
        ...prevState,
        mobile: !isValid ? true : false,
      }));
    }
    setPayment(false);
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    e.target.value &&
      setError((prevState) => ({
        ...prevState,
        [name]: false,
      }));

    setPayment(false);
  };

  const handleFormVisibility = () => {
    inputRef.current.checked = false;
  };

  const handlePaymentReset = () => {
    setPayment(false);
  };

  return (
    <div className={styles.payment_form} id="payment_form">
      <div className={styles.title}>
        <button className={styles.btn__back} onClick={handleFormVisibility}>
          &#10094;
        </button>{" "}
        Payment Details
        <div className={styles.title_underline} />
      </div>

      <div className={styles.form__section}>
        <form className="form-UI" noValidate>
          <div className={styles.input__fields}>
            {/* Name Field */}
            <div className={styles.input__container}>
              <div className={styles.field__label}>Name</div>
              <div className={styles.field__content}>
                <div className={styles.input__wrapper}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`${
                      error.name
                        ? styles.border__danger
                        : styles.default__border
                    } ${paymentData.name && "border-green"}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className={styles.error__message}>
                  {error.name && "This field is required"}
                </div>
                <div className={styles.field__description}>
                  <small />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className={styles.input__container}>
              <div className={styles.field__label}>Email</div>
              <div className={styles.field__content}>
                <div className={styles.input__wrapper}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${
                      error.email
                        ? styles.border__danger
                        : styles.default__border
                    } ${paymentData.email && "border-green"}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className={styles.error__message}>
                  {error.email &&
                    !paymentData.email &&
                    "This field is required"}
                </div>
                <div className={styles.error__message}>
                  {validationError.email && "Invalid email address"}
                </div>

                <div className={styles.field__description}>
                  <small />
                </div>
              </div>
            </div>

            {/* Mobile Field */}
            <div className={styles.input__container}>
              <div className={styles.field__label}>Mobile</div>
              <div className={styles.field__content}>
                <div className={styles.input__wrapper}>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    minLength={10}
                    className={`${
                      error.mobile
                        ? styles.border__danger
                        : styles.default__border
                    } ${paymentData.mobile && "border-green"}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className={styles.error__message}>
                  {error.mobile && "This field is required"}
                </div>
                <div className={styles.error__message}>
                  {validationError.mobile && "Invalid mobile number"}
                </div>
                <div className={styles.field__description}>
                  <small />
                </div>
              </div>
            </div>

            {/* I am a --- */}
            <div className={styles.input__container}>
              <div className={styles.field__label}>I am a</div>
              <div className={styles.field__content}>
                <div className={styles.input__wrapper}>
                  <select
                    name="iam"
                    id="iam"
                    className={`${
                      error.iam ? styles.border__danger : styles.default__border
                    } ${paymentData.iam && "border-green"}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  >
                    <option value="">--Select--</option>
                    <option value="student">Student</option>
                    <option value="graduate">Graduate</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div className={styles.error__message}>
                  {error.iam && "This field is required"}
                </div>
                <div className={styles.field__description}>
                  <small />
                </div>
              </div>
            </div>

            {/* College Field */}
            {(paymentData.iam === "student" ||
              paymentData.iam === "graduate") && (
              <div className={styles.input__container}>
                <div className={styles.field__label}>College</div>
                <div className={styles.field__content}>
                  <div className={styles.input__wrapper}>
                    <input
                      type="text"
                      name="college"
                      id="college"
                      value={paymentData.college}
                      className={`${
                        error.college
                          ? styles.border__danger
                          : styles.default__border
                      } ${paymentData.college && "border-green"}`}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className={styles.error__message}>
                    {error.college && "This field is required"}
                  </div>
                  <div className={styles.field__description}>
                    <small />
                  </div>
                </div>
              </div>
            )}

            {paymentData.iam === "professional" && (
              <div className={styles.input__container}>
                <div className={styles.field__label}>Company</div>
                <div className={styles.field__content}>
                  <div className={styles.input__wrapper}>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={paymentData.company}
                      className={`${
                        error.company
                          ? styles.border__danger
                          : styles.default__border
                      } ${paymentData.company && "border-green"}`}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div className={styles.error__message}>
                    {error.company && "This field is required"}
                  </div>
                  <div className={styles.field__description}>
                    <small />
                  </div>
                </div>
              </div>
            )}

            <div className={styles.input__container}>
              <div className={styles.field__label}>Amount </div>
              <div className={styles.field__content}>
                <div className={styles.input__wrapper}>
                  <input
                    type="text"
                    defaultValue={
                      `₹ ${
                        workshopInfo?.showGST
                          ? workshopInfo.amount - totalGST
                          : workshopInfo.amount
                      }
                    ` || ""
                    }
                    className={styles.default__border + " " + styles.field__gst}
                    disabled
                  />
                </div>
                <div className={styles.error__message} />
                <div className={styles.field__description}>
                  <small>
                    Limited Seats. Workshop Date:{" "}
                    {moment(workshopInfo.startDate).format("Do MMM")}
                  </small>
                </div>
              </div>
            </div>

            {/* GST Field */}

            {workshopInfo.showGST && (
              <div className={styles.input__container}>
                <div className={styles.field__label}>GST</div>
                <div className={styles.field__content}>
                  <div className={styles.input__wrapper}>
                    <input
                      type="text"
                      defaultValue={`₹ ${totalGST}` || ""}
                      className={
                        styles.default__border + " " + styles.field__gst
                      }
                      disabled
                    />
                  </div>
                  <div className={styles.error__message} />
                  <div className={styles.field__description}>
                    <small>GST @ 18%</small>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.footer}>
            <div className={styles.payment__methods}>
              <img
                src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
                alt=""
              />
            </div>
            <button
              className={styles.payment__button}
              type="submit"
              onClick={handlePayment}
              onMouseOver={handlePaymentReset}
            >
              Pay ₹ {workshopInfo.amount}
            </button>
          </div>
        </form>
      </div>
      {payment ? (
        <Razorpay
          paymentInfo={{ ...paymentData, ...workshopInfo }}
          setSuccess={setSuccess}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.company_header}>
      <div className={styles.company__logo}>
        <img
          src="https://cdn.razorpay.com/logos/GPKyOqzis6SPB4_large.jpg"
          alt="company-logo"
        />
      </div>
      <div className={styles.company__title}>
        KAARWAN EDUVENTURES PRIVATE LIMITED
      </div>
    </div>
  );
};
