// eslint-disable-next-line react/prop-types
export default function Links({ children }) {
  return (
    <div>
      <li
        style={{ letterSpacing: "1.5px" }}
        className="list-unstyled ms-4 fs-5 text-capitalize  fw-bold "
      >
        {children}
      </li>
    </div>
  );
}
