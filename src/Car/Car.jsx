import React from 'react'
import './Car.scss'

class Car extends React.Component{

  // componentWillReceiveProps(nextProps){
  //   console.log('Car componentWillReceiveProps');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Car shouldComponentUpdate');
    return nextProps.name.trim() !== this.props.name.trim()
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Car componentWillUpdate');
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('Car getDerivedStateFromProps', nextProps, prevState);

    return prevState
  }

  componentDidUpdate(){
    console.log('Car componentDidUpdate');
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate()');
  }

  componentWillUnmount(){
    console.log('Car componentWillUnmount');
  }

  render() {
    console.log('Car render');
    const inputClasses = ['input']


  if (this.props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (this.props.name.length > 4) {
    inputClasses.push('bold')
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer'
    }
  }

  return (
    <div className="Car">
      <h3>Сar name: {this.props.name}</h3>
      <p>Year: <strong>{this.props.year}</strong></p>
      <input
        type="text"
        onChange={this.props.onChangeName}
        value={this.props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={this.props.onDelete}>Delete</button>
    </div>
  )
  }
}



export default Car