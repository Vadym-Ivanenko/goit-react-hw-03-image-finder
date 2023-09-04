import { Component } from 'react';
import {
  SearchBarWrapper,
  SearchForm,
  SearchButton,
  Input,
} from './SearchBar.styled';
import { FaSistrix } from 'react-icons/fa';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <SearchBarWrapper onSubmit={this.onFormSubmit}>
          <header>
            <SearchForm>
              <SearchButton type="submit">
                <FaSistrix size="25" color="#3f51b5" />
              </SearchButton>
              <Input
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                value={this.state.value}
                onChange={this.onInputChange}
              />
            </SearchForm>
          </header>
        </SearchBarWrapper>
      </div>
    );
  }
}
