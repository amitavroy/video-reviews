import { ErrorMessage } from 'formik';

interface Props {
  name: string;
}

export const ValidationMessage: React.FC<Props> = ({ name }) => {
  return (
    <div className="validation-error">
      <ErrorMessage name={name} />
    </div>
  );
};
