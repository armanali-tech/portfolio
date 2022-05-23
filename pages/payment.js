import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
// import { useRouter } from "next/router";

const API_URL = process.env.API_BASE_LINK
const Payment = () => {
  // For Mobile Device
  const [show, setShow] = useState({
    content: true,
    paymentForm: false
  })

  const handleVisibility = () => {
    setShow({
      content: false,
      paymentForm: true
    })
  }

  // const router = useRouter();
  // const { id } = router.query;

  const [workshopInfo, setWorkshopInfo] = useState({})

  const getWorkshopInfo = async () => {
    return axios
      .get(`${API_URL}/api/workshop/2/batch`)
      .then((response) => {
        const data = response.data.data.batches
        setWorkshopInfo(data)
      })
      .catch((error) => {
        console.log('Error : ', error)
      })
  }

  useEffect(() => {
    getWorkshopInfo()
  }, [])

  return (
    <PaymentPageContainer show={show}>
      <div className='content'>
        <Header />
        <div className='details-view'>
          <h1>{workshopInfo.Workshop?.name}</h1>
          <div className='title-underline' />
          <h3 style={{ margin: '20px 0' }}>{workshopInfo?.description}</h3>

          <div className='description'>
            <h3>Description:</h3>

            <h4 style={{ margin: '5px 0', fontWeight: '500' }}>
              Date: {moment(workshopInfo.startDate).format('Do MMM')} -{' '}
              {moment(workshopInfo.endDate).format('Do MMM')}{' '}
              {moment(workshopInfo.endDate).format('YYYY')}
            </h4>

            <h4 style={{ margin: '12px 0' }}>Timings</h4>

            {workshopInfo?.BatchSchedules?.map((schedule) => (
              <p key={schedule.id}>
                {moment(schedule.date).format('dddd')} :{' '}
                {moment(`${schedule.date} ${schedule.startTime}`).format('LT')}{' '}
                - {moment(`${schedule.date} ${schedule.endTime}`).format('LT')}
              </p>
            ))}
            {/* <p>Wednesday: Flexible with Recorded Session</p> */}
          </div>

          <div className='notes'>
            <h3>Important:</h3>
            {workshopInfo.notes?.map((note, index) => (
              <p key={index} className='note'>
                # {note}
              </p>
            ))}
          </div>
        </div>
        <PaymentForm handle={{ show, setShow }} workshopInfo={workshopInfo} />

        <div className='contact-info'>
          <h5 className='short-heading'>Share this on</h5>
          <div className='social-icons'>
            <button className='social-button'>
              <i className='fb-icon' />
            </button>
            <button className='social-button'>
              <i className='twitter-icon' />
            </button>
            <button className='social-button'>
              <i className='whatsapp-icon' />
            </button>
          </div>

          <h5 className='short-heading'>Contact Us</h5>
          <div className='email-and-call'>
            <a href='mailto:hola@kaarwan.com'>
              <img
                src='/static/mail.svg'
                alt=''
                style={{ width: '14px', marginRight: '6px' }}
              />
              hola@kaarwan.com
            </a>
            <br />
            <a href='tel:9833777469'>
              <img
                src='/static/phone.svg'
                alt=''
                style={{ width: '14px', marginRight: '6px' }}
              />
              9833777469
            </a>
          </div>

          <h5 className='short-heading'>Terms & Conditions</h5>
          <div className='terms_and_conditions'>
            <p>
              You agree to share information entered on this page with KAARWAN
              EDUVENTURES PRIVATE LIMITED (owner of this page) and Razorpay,
              adhering to applicable laws.
            </p>
          </div>
        </div>

        {/* Razorpay Footer Details */}
        {/* <div className="details-footer">
          <div className="">
            <img
              src="https://cdn.razorpay.com/logo.svg"
              alt="razorpay-logo"
              width={"120px"}
            />
          </div>
          <p>
            Want to create page like this for your Business?
            <a href="">Visit Razorpay Payment Pages to get started!</a>
          </p>
          <a href="#">
            <img
              src="/static/flag.svg"
              alt="report-page"
              style={{ width: "9px", marginRight: "4px" }}
            />
            Report Page
          </a>
        </div> */}
      </div>

      {/* Show on Mobile Device to Open Payment Form */}
      {show.content ? (
        <>
          <button className='btn-open' onClick={handleVisibility}>
            Next
          </button>
        </>
      ) : null}
    </PaymentPageContainer>
  )
}

export default Payment

const PaymentForm = ({ handle, workshopInfo }) => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    college: '',
    phone: '',
    iam_a: ''
  })
  const [error, setError] = useState({
    name: false,
    email: false,
    college: false,
    phone: false,
    iam_a: false
  })

  const handlePayment = (e) => {
    e.preventDefault()
    paymentData.name === ''
      ? setError((prevState) => ({ ...prevState, name: true }))
      : setError((prevState) => ({ ...prevState, name: false }))

    paymentData.email === ''
      ? setError((prevState) => ({ ...prevState, email: true }))
      : setError((prevState) => ({ ...prevState, email: false }))

    paymentData.college === ''
      ? setError((prevState) => ({ ...prevState, college: true }))
      : setError((prevState) => ({ ...prevState, college: false }))

    paymentData.phone === ''
      ? setError((prevState) => ({ ...prevState, phone: true }))
      : setError((prevState) => ({ ...prevState, phone: false }))

    paymentData.iam_a === ''
      ? setError((prevState) => ({ ...prevState, iam_a: true }))
      : setError((prevState) => ({ ...prevState, iam_a: false }))

    if (
      paymentData.email &&
      paymentData.email &&
      paymentData.college &&
      paymentData.phone &&
      paymentData.iam_a
    ) {
      console.log(paymentData)
    }
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPaymentData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleInputBlur = (e) => {
    const name = e.target.name
    e.target.value &&
      setError((prevState) => ({
        ...prevState,
        [name]: false
      }))
  }

  return (
    <PaymentFormContainer show={handle.show.paymentForm}>
      <div className='title'>
        <button
          className='btn-back'
          onClick={() => {
            handle.setShow({ content: true, paymentForm: false })
          }}
        >
          &#10094;
        </button>{' '}
        Payment Details
        <div className='title-underline' />
      </div>

      <div className='form-section'>
        <form className='form-UI' noValidate>
          <div className='input-fields'>
            {/* Name Field */}
            <div className='input-container'>
              <div className='field-label'>Name</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className={`${
                      error.name ? 'border-danger' : 'default-border'
                    } ${paymentData.name && 'border-green'}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className='error-message'>
                  {error.name && 'This field is required'}
                </div>
                <div className='field-description'>
                  <small />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className='input-container'>
              <div className='field-label'>Email</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className={`${
                      error.email ? 'border-danger' : 'default-border'
                    } ${paymentData.email && 'border-green'}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className='error-message'>
                  {error.email &&
                    !paymentData.email &&
                    'This field is required'}
                </div>
                <div className='field-description'>
                  <small />
                </div>
              </div>
            </div>

            {/* College Field */}
            <div className='input-container'>
              <div className='field-label'>College</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    name='college'
                    id='college'
                    className={`${
                      error.college ? 'border-danger' : 'default-border'
                    } ${paymentData.college && 'border-green'}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className='error-message'>
                  {error.college && 'This field is required'}
                </div>
                <div className='field-description'>
                  <small />
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div className='input-container'>
              <div className='field-label'>Phone</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className={`${
                      error.phone ? 'border-danger' : 'default-border'
                    } ${paymentData.phone && 'border-green'}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                </div>
                <div className='error-message'>
                  {error.phone && 'This field is required'}
                </div>
                <div className='field-description'>
                  <small />
                </div>
              </div>
            </div>

            {/* I am a --- */}
            <div className='input-container'>
              <div className='field-label'>I am a</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <select
                    name='iam_a'
                    id='iam_a'
                    className={`${
                      error.iam_a ? 'border-danger' : 'default-border'
                    } ${paymentData.iam_a && 'border-green'}`}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  >
                    <option defaultValue={'student'} disabled>
                      --Select--
                    </option>
                    <option value='student'>Student</option>
                    <option value='graduate'>Graduate</option>
                    <option value='professional'>Professional</option>
                  </select>
                </div>
                <div className='error-message'>
                  {error.iam_a && 'This field is required'}
                </div>
                <div className='field-description'>
                  <small />
                </div>
              </div>
            </div>

            {/* Batch No */}
            <div className='input-container'>
              <div className='field-label'>Batch 12</div>
              <div className='field-content'>
                <div className='input-wrapper'>
                  <input
                    type='text'
                    defaultValue={'₹ ' + workshopInfo.amount}
                    name='gst'
                    id='gst'
                    className='default-border field-batch'
                    disabled
                  />
                </div>
                <div className='error-message' />
                <div className='field-description'>
                  <small>Limited Seats. Date: 2nd July-31st July 2022</small>
                </div>
              </div>
            </div>

            {/* GST Field */}

            {workshopInfo.showGST && (
              <div className='input-container'>
                <div className='field-label'>GST</div>
                <div className='field-content'>
                  <div className='input-wrapper'>
                    <input
                      type='text'
                      defaultValue={'₹ 1,350.00'}
                      className='default-border field-gst'
                      disabled
                    />
                  </div>
                  <div className='error-message' />
                  <div className='field-description'>
                    <small>GST @ 18%</small>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='footer'>
            <div className='payment-methods'>
              <img
                src='https://cdn.razorpay.com/static/assets/pay_methods_branding.png'
                alt=''
              />
            </div>
            <button
              className='payment-button'
              type='submit'
              onClick={handlePayment}
            >
              Pay ₹ 8,849.00
            </button>
          </div>
        </form>
      </div>
    </PaymentFormContainer>
  )
}

const PaymentPageContainer = styled('div')`
  position: relative;
  width: 100%;
  background-color: #fcfcfc;
  color: #0d2366;
  background-position: right;
  background-size: cover;
  box-sizing: border-box;
  overflow-y: ${(props) => (props.show.content ? 'auto' : 'hidden')};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  overflow-x: hidden;
  &::before {
    content: "";
    position: absolute;
    border-left: 10px solid #ff6600;
    left: 0px;
    height: 100%;
    margin-bottom: 20px;
  }

  &::after {
    content: "";
    background-image: url("https://cdn.razorpay.com/static/assets/paymentpages/light_desktop.svg");
    top: 0;
    position: absolute;
    right: 0;
    width: 30%;
    height: 100%;
    background-position: right top;
    background-size: 100% 72.4%;
    background-repeat: no-repeat;
    background-color: #efefef;
  }

  .btn-open {
    width: calc(100% - 50px);
    position: fixed;
    bottom: 5px;
    margin: 5px;
    background-color: #ff6600;
    background-image: linear-gradient(90deg, #ffffff19 0%, #00000019 100%);
    border: none;
    color: white;
    padding: 12px;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    display: none;
    left: 10px;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }

  .content {
    padding-top: 40px;
    width: 68%;
    margin: 0 auto;
    padding-left: 36px;
    padding-bottom: 20px;

    .notes,
    .description {
      h3 {
        margin-top: 20px;
        margin-bottom: 8px;
        font-weight: 500;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        margin-bottom: 4px;
      }
    }
    .details-view {
      max-width: 420px;
      margin-top: 20px;
    }
    @media screen and (max-width: 680px) {
      padding-top: 10px;
    }

    @media screen and (max-width: 1340px) {
      width: 100%;
    }
    .contact-info {
      /* Social Share Icons */
      .social-icons {
        display: flex;
        gap: 0 12px;
        .social-button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
          i {
            display: inline-block;
            background: url(/static/social-icons.png) no-repeat;
            overflow: hidden;
            text-indent: -9999px;
            text-align: left;
            width: 40px;
            height: 40px;
            -webkit-transform: scale(0.6);
            transform: scale(0.6);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            margin-bottom: -16px;
            margin-right: -16px;
          }
          .fb-icon {
            background-position: -2px 0px;
          }
          .twitter-icon {
            background-position: -44px -42px;
          }
          .whatsapp-icon {
            background-position: -2px -84px;
          }
        }
      }
      .short-heading {
        line-height: 20px;
        margin-top: 30px;
        margin-bottom: 4px;
      }

      a {
        text-decoration: none;
        color: #0d2366;
        line-height: 25px;
        font-size: 0.95rem;
      }

      .terms_and_conditions {
        width: 45%;
        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: #162f56bd;
        }
        @media screen and (max-width: 680px) {
          width: 100%;
        }
      }
    }

    .details-footer {
      width: 45%;
      margin-top: 20px;
      box-shadow: 0 -4px 4px -4px rgb(0 0 0 / 18%);
      padding: 16px 0;
      box-sizing: border-box;
      p {
        font-size: 0.8rem;
        font-weight: 400;
        margin: 8px 0;
        color: #162f56bd;
        a {
          color: dodgerblue;
          font-size: inherit;
          margin-left: 5px;
          font-weight: inherit;
        }
      }
      a {
        color: #536582;
        font-size: 0.8rem;
        text-decoration: none;
        font-weight: 500;
      }
    }
    @media screen and (max-width: 680px) {
      padding-left: 0;
      margin: auto auto;
      .details-footer {
        width: 100%;
      }
    }
  }

  .title-underline {
    width: 28px;
    display: block;
    margin-top: 20px;
    border-bottom: 5px solid #ff6600;
  }

  @media screen and (max-width: 680px) {
    .content {
      width: 90%;
    }
    &::before {
      content: "";
      position: absolute;
      border-left: 10px solid #ffffff;
      left: 0px;
      height: 100vh;
    }
    &::after {
      content: "";
      background-image: unset;
      top: unset;
      position: absolute;
      right: unset;
      width: unset;
      height: unset;
      background-position: right top;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: inherit;
    }
  }

  @media screen and (max-width: 1100px) {
    .content {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    padding-bottom: 50px;
    height: 100vh;

    .btn-open {
      display: block;
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <div className='company-logo'>
        <img
          src='https://cdn.razorpay.com/logos/GPKyOqzis6SPB4_large.jpg'
          alt='company-logo'
        />
      </div>
      <div className='company-title'>KAARWAN EDUVENTURES PRIVATE LIMITED</div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  .company-logo {
    width: 64px;
    height: 64px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 18%);
    padding: 8px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .company-title {
    color: #0d2366;
    font-weight: bold;
    line-height: 28px;
    max-width: 25%;
    display: inline-block;
    vertical-align: middle;
    padding-left: 16px;
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: 680px) {
      max-width: 75%;
      text-align: center;
    }
  }
  @media screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const PaymentFormContainer = styled('div')`
  position: absolute;
  right: 16%;
  width: 480px;
  background-color: #ffffff;
  box-shadow: 6px 11px 24px 0 rgb(23 31 37 / 12%);
  z-index: 5;
  box-sizing: border-box;
  top: 100px;
  overflow: hidden;
  .title {
    position: relative;
    color: #30478a;
    overflow-wrap: break-word;
    font-weight: 500;
    font-size: 20px;
    padding: 30px 32px;
    line-height: 24px;

    @media screen and (max-width: 680px) {
      padding: 15px 16px;
    }
  }

  .form-section {
    .input-fields {
      padding: 30px 32px;
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      @media screen and (max-width: 680px) {
        gap: 10px 0;
        padding: 15px 16px;
      }
    }
  }

  .btn-back {
    background-color: transparent;
    border: none;
    display: none;
    margin-left: 0;
    margin-right: 8px;
    font-size: 15px;
    background-color: #00a2ff;
    padding: 6px 12px;
    color: white;
    cursor: pointer;
  }

  .input-container {
    display: flex;
    gap: 0 20px;

    .field-label {
      width: 120px;
      font-size: 0.9rem;
      font-family: "Muli", "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }

    .error-message {
      font-size: 12px;
      margin: 4px 0;
      line-height: 16px;
      color: #f05050;
    }

    @media screen and (max-width: 680px) {
      flex-direction: column;
      gap: 8px 0;
    }
    .field-content {
      width: 55%;

      @media screen and (max-width: 680px) {
        width: 90%;
      }
      /* Border for Input Error */
      .border-danger {
        border: 1px solid #f05050;
      }

      .border-green {
        border: 1px solid #86d9a8 !important;
      }

      /* Default Border Style for Input, Select */
      .default-border {
        border: 1px solid #e2e2e2;
        &:hover {
          border-color: #bababa;
        }
        &:focus {
          border-color: #00a2ff;
        }
      }

      .field-gst,
      .field-batch {
        user-select: none;
        opacity: 0.9;
        &:hover {
          border: 1px solid #e2e2e2;
        }
      }

      .input-wrapper {
        width: 100%;
        input,
        select {
          box-sizing: content-box;
          line-height: 16px;
          height: 100%;
          background: #fff;
          border-radius: 2px;
          overflow: hidden;
          font-size: 14px;
          padding: 6px 9px;
          outline: none;
          color: inherit;
          transition: all 0.1s linear;
          width: 100%;
        }
      }
    }
  }

  .footer {
    display: flex;
    width: 100%;
    .payment-methods {
      background-color: #f5f6f7;
      min-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      img {
        width: 180px;
      }
    }
    .payment-button {
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 22px;
      background-color: rgb(255, 102, 0);
      color: white;
      background-image: linear-gradient(90deg, #ffffff19 0%, #00000019 100%);
    }
  }
  @media screen and (max-width: 1100px) {
    width: 70%;
    position: static;
    right: unset;
    top: unset;
    z-index: 5;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
    display: ${(props) => (props.show ? 'block' : 'none')};
    .footer {
      flex-direction: column;
    }
    .btn-back {
      display: inline-block;
    }
  }
`
