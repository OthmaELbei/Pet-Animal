/* eslint-disable react/prop-types */

export default function Femail(props) {
  return (
    <>
      <div className="d-flex row w-100 align-items-center mx-1 my-auto justify-content-center">
        <label
          className="text-start text-capitalize fs-5 me-5 mr-2 col-sm-2"
          htmlFor=""
        >
          {props.name}
        </label>

        <input
          placeholder={props.prName}
          className="col-sm-10  py-2 mt-2 rounded bg-white px-5"
          type="text"
          name=""
          id=""
        />
      </div>
    </>
  );
}
