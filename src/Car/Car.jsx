import React from 'react'
import PropTypes from 'prop-types'
import classes from './Car.css'
import withClass from '../hoc/withClass'


class Car extends React.Component{

  componentDidMount(){
    if (this.props.index === 0){
      this.inputRef.focus()
    }
  }

  render() {
    const inputClasses = ['input']
    
  if (this.props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (this.props.name.length > 4) {
    inputClasses.push('bold')
  }

 
  return (
    <>
      <div className="Car" style={classes.Car}>
        <h3>Сar name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={(inputRef) => this.inputRef = inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    </>
  )
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, classes.Car)