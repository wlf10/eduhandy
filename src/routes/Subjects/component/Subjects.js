import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';

const Subjects = ({ classes, subjects }) => {
  return (
    <Fragment>
      <Table
        classes={classes}
        columns={subjects.columns}
        data={subjects.data}
        title="Предметы"
      />
    </Fragment>
  );
}

Subjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Subjects;
