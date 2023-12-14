export default function ButUpDawon(ps) {
  return (
    <>
      <button
        onClick={ps.onClick}
        type="button"
        className=" Buttfromila-canry btn "
      >
        {ps.text}
      </button>
    </>
  );
}
