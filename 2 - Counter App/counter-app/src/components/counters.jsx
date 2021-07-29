import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('PrevProps: ', prevProps);
        console.log('PrevState', prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call, for example
        }
    }

    render() {
        console.log('Counters - Rendered');
        const { counters, onReset, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-small m-2">Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />)}
            </div>);
    }
}

export default Counters;