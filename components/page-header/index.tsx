interface Props {
  title: string;
  description?: string;
}
const PageHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};
export default PageHeader;
