import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  const closeHandler = () => {
    props.onClose(false);
  };

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={closeHandler}>X</button>
    </section>
  );
};

export default Notification;
