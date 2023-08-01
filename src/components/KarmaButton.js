import React from 'react';
import { KarmaAPI } from '../utils/KarmaAPI';
import '../styles/KarmaButton.css';

class KarmaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      karma: this.props.karma,
    };
  }

  handleClick = async () => {
    try {
      const response = await KarmaAPI.updateKarma(this.props.contactId);
      if (response.status === 200) {
        this.setState({ karma: this.state.karma + 1 });
      }
    } catch (error) {
      console.error('Error updating karma:', error);
    }
  };

  render() {
    return (
      <button className="karma-button" onClick={this.handleClick}>
        BT ({this.state.karma})
      </button>
    );
  }
}

export default KarmaButton;