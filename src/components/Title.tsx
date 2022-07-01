import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface Props {
  children: any;
}

const Title: FC<Props> = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom={true}>
      {children}
    </Typography>
  );
};

export default Title;

// Title.propTypes = {
//   children: PropTypes.node
// };
