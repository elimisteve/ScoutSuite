import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import { PartialValue } from '../../../../components/Partial';
import WarningMessage from '../../../../components/WarningMessage';

import './style.scss';


const propTypes = {
  flowLogs: PropTypes.array.isRequired,
};

const FlowLogs = props => {
  const { flowLogs } = props;

  return ( 
    <div className="flow-logs">
      {isEmpty(flowLogs) ? (
        <PartialValue
          errorPath="no_flowlog"
          renderValue={() => (
            <WarningMessage
              message="This subnet has no flow logs."
            />
          )}
        />
      ) : (
        <ul>
          {flowLogs.map((log, i) => (
            <li key={i}>
              {log.FlowLogId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

FlowLogs.propTypes = propTypes;

export default FlowLogs;
