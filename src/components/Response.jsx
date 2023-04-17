export default function Response({ from, time, message }) {
  return (
    <>
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message}
      </div>
    </>
  );
}