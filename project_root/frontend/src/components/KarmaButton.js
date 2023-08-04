import React from 'react';
import { contactService } from '../services/contactService';

class KarmaButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karma: this.props.karma
        };
    }

    increaseKarma = async () => {
        const updatedKarma = await contactService.updateKarma(this.props.contactId);
        this.setState({ karma: updatedKarma });
    }

    render() {
        return (
            <button onClick={this.increaseKarma}>
                BT ({this.state.karma})
            </button>
        );
    }
}

export default KarmaButton;