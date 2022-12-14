import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PrivateAPI from "../../api/PrivateAPI";

export default function Payment() {
  let { id } = useParams();

  useEffect(() => {
    makePayment();
  });

  const isDate = (val) => {
    return Object.prototype.toString.call(val) === "[object Date]";
  };
  const isObj = (val) => {
    return typeof val === "object";
  };
  const stringifyValue = (val) => {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  };

  const buildForm = ({ action, params }) => {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });
    return form;
  };

  const post = (details) => {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const getDetails = async (pId) => {
    return await PrivateAPI.get(`v1/payment/pgdetails/${pId}`);
  };

  const makePayment = async () => {
    getDetails(id).then((response) => {
      var information = {
        action: process.env.REACT_APP_PAYTM_URL,
        params: response.data,
      };
      post(information);
    });
  };
}
