import PropTypes from 'prop-types';

import { Container } from './Container.module';

export const Section = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
