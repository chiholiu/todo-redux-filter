import React from 'react';
import { connect } from 'react-redux';
import { currentFilter } from '../actions/index';

const FilterButtons = ({ currentFilter }) => {
    return (
        <div>
           <button onClick={() => currentFilter('ALL')}>All</button>
           <button onClick={() => currentFilter('COMPLETE')}>Complete</button>
           <button onClick={() => currentFilter('INCOMPLETE')}>Incomplete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    currentFilter: filter => dispatch(currentFilter(filter))
});

export default connect(null, mapDispatchToProps)(FilterButtons);