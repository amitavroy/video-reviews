interface Props {
  title?: string;
}
const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="card shadow">
      {title && title != '' && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};
export default Card;
