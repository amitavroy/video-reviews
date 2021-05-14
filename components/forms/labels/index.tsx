interface Props {
  id: string;
  name: string;
}

const FormLabel: React.FC<Props> = ({ id, name }) => {
  return (
    <div className="mb-1">
      <label htmlFor={id || ''}>
        <strong>{name}</strong>
      </label>
    </div>
  );
};

export default FormLabel;
