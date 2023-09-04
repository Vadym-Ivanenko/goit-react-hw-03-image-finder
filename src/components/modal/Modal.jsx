import { Component } from 'react';

import { Backdrop, ModalItem } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { image, tags } = this.props;
    return (
      <Backdrop onClick={this.handleBackdrop}>
        <ModalItem>
          <img src={image} alt={tags} />
        </ModalItem>
      </Backdrop>
    );
  }
}
