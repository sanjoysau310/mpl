import React from "react";

export const Spinner = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-md-6 mx-auto">
          <div className="text-center text-info fw-bolder">
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"></span>
              Loading...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
