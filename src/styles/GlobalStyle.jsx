import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}


    body {
    font-family: 'Poppins', sans-serif;
    }

    .notification-custom-icon {
  flex-basis: 20%;
  position: relative;
  display: inline-block;
  padding: 8px 8px 8px 12px;

  .fa {
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 28px;
    position: relative;
    transform: translate(-50%, -50%);
  }
}

.notification-custom-success {
  width: 100%;
  display: flex;
  background-color: #3F5D88;
  border-left: 7px solid #001371;
  border-radius: 3px;

  .notification-custom-icon {
    border-left: 8px solid darken(#28a745, 15%);
  }
  .notification-custom-content {
      min-width: 310px;
      width: 310px;
      .notification-message {
          .message-header {
              font-weight: 600;
              color: #fff;
              font-size: 14px;
              border-bottom: 1px solid #fff;
              margin: 0px 25px;
              padding: 10px 0px;
          }

          .message {
              padding: 10px 25px;
              color: #fff; 
          }
      }
  }
}


.custom-ui {
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  padding: 50px 100px;

  h1 {
    text-align:center;
  }

  p {
    text-align:center;
  }

  .btns {
    display: flex;
    justify-content:center;
    align-items:center;
    button {
      margin: 10px 5px;
      border: none;
      background: #fff;
      border: 1px solid #000;
      border-radius: 5px;
      width: fit-content;
      padding: 2.5px 10px;
      cursor:pointer;
    }
  }
}

/*  DATE TIME FIELDS */



/*!
 * https://github.com/YouCanBookMe/react-datetime
 */

.rdt {
  position: relative;
}
.rdtPicker {
  display: none;
  position: absolute;
  width: 250px;
  padding: 4px;
  margin-top: 1px;
  z-index: 99999 !important;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  border: 1px solid #f9f9f9;
}
.rdtOpen .rdtPicker {
  display: block;
}
.rdtStatic .rdtPicker {
  box-shadow: none;
  position: static;
}

.rdtPicker .rdtTimeToggle {
  text-align: center;
}

.rdtPicker table {
  width: 100%;
  margin: 0;
}
.rdtPicker td,
.rdtPicker th {
  text-align: center;
  height: 28px;
}
.rdtPicker td {
  cursor: pointer;
}
.rdtPicker td.rdtDay:hover,
.rdtPicker td.rdtHour:hover,
.rdtPicker td.rdtMinute:hover,
.rdtPicker td.rdtSecond:hover,
.rdtPicker .rdtTimeToggle:hover {
  background: #eeeeee;
  cursor: pointer;
}
.rdtPicker td.rdtOld,
.rdtPicker td.rdtNew {
  color: #999999;
}
.rdtPicker td.rdtToday {
  position: relative;
}
.rdtPicker td.rdtToday:before {
  content: '';
  display: inline-block;
  border-left: 7px solid transparent;
  border-bottom: 7px solid #428bca;
  border-top-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 4px;
  right: 4px;
}
.rdtPicker td.rdtActive,
.rdtPicker td.rdtActive:hover {
  background-color: #428bca;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.rdtPicker td.rdtActive.rdtToday:before {
  border-bottom-color: #fff;
}
.rdtPicker td.rdtDisabled,
.rdtPicker td.rdtDisabled:hover {
  background: none;
  color: #999999;
  cursor: not-allowed;
}

.rdtPicker td span.rdtOld {
  color: #999999;
}
.rdtPicker td span.rdtDisabled,
.rdtPicker td span.rdtDisabled:hover {
  background: none;
  color: #999999;
  cursor: not-allowed;
}
.rdtPicker th {
  border-bottom: 1px solid #f9f9f9;
}
.rdtPicker .dow {
  width: 14.2857%;
  border-bottom: none;
  cursor: default;
}
.rdtPicker th.rdtSwitch {
  width: 100px;
}
.rdtPicker th.rdtNext,
.rdtPicker th.rdtPrev {
  font-size: 21px;
  vertical-align: top;
}

.rdtPrev span,
.rdtNext span {
  display: block;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;
}

.rdtPicker th.rdtDisabled,
.rdtPicker th.rdtDisabled:hover {
  background: none;
  color: #999999;
  cursor: not-allowed;
}
.rdtPicker thead tr:first-child th {
  cursor: pointer;
}
.rdtPicker thead tr:first-child th:hover {
  background: #eeeeee;
}

.rdtPicker tfoot {
  border-top: 1px solid #f9f9f9;
}

.rdtPicker button {
  border: none;
  background: none;
  cursor: pointer;
}
.rdtPicker button:hover {
  background-color: #eee;
}

.rdtPicker thead button {
  width: 100%;
  height: 100%;
}

td.rdtMonth,
td.rdtYear {
  height: 50px;
  width: 25%;
  cursor: pointer;
}
td.rdtMonth:hover,
td.rdtYear:hover {
  background: #eee;
}

.rdtCounters {
  display: inline-block;
}

.rdtCounters > div {
  float: left;
}

.rdtCounter {
  height: 100px;
}

.rdtCounter {
  width: 40px;
}

.rdtCounterSeparator {
  line-height: 100px;
}

.rdtCounter .rdtBtn {
  height: 40%;
  line-height: 40px;
  cursor: pointer;
  display: block;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;
}
.rdtCounter .rdtBtn:hover {
  background: #eee;
}
.rdtCounter .rdtCount {
  height: 20%;
  font-size: 1.2em;
}

.rdtMilli {
  vertical-align: middle;
  padding-left: 8px;
  width: 48px;
}

.rdtMilli input {
  width: 100%;
  font-size: 1.2em;
  margin-top: 37px;
}

.rdtTime td {
  cursor: default;
}


/* END OF DATE TIME FIELDS */
`;

export default GlobalStyle;
