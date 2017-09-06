import React from 'react';
import PropTypes from 'prop-types';


const InlineError = ({text}) => (
    <span style={{ color: "#9f3a38" }}>
        {text}
    </span>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;