import React, { Component } from 'react';
import Modal from './Modal';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal : false
    }
    this.shwModal = this.shwModal.bind(this)
  }
  shwModal = () => {
    this.setState({
        showModal : !this.state.showModal
    })
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.shwModal}>Click</button>
        <Modal showModal={this.state.showModal} closeModal={this.shwModal}>
          <div>Modal!</div>
        </Modal>
      </div>
    );
  }
}

export default App;
