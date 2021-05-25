const Social = ({ icon, link, text }) => {
  return (
    <div className={`social__wrap`}>
      <a className="social__link" target="_blank" rel="noreferrer" href={link}>
        {icon}
      </a>
      <div className="social__wrap-date">
        <p className="social__date">{text}</p>
      </div>
    </div>
  );
};

export default Social;
