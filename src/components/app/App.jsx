import { Component } from 'react';
import { toast } from 'react-toastify';
import * as Api from '../api/Api';
import { SearchBar } from 'components/search-bar/SearchBar';
import { ImageGallery } from '../image-gallery/ImageGallery';
import { Loader } from '../loader/Loader';
import { LoadMore } from '../button/Button';
import Modal from '../modal/Modal';
import { GlobalStyle } from '../globalStyle';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    totalHits: 0,
    showModal: false,
    largeImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page)
      try {
        const { hits, totalHits } = await Api.fetchGalleryImages(query, page);
        this.setState({ loading: true });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          ...hits,
          totalHits: totalHits,
        }));
      } catch (error) {
        this.setState({ error: true });
        toast.error('Sorry, have some problem');
      } finally {
        this.setState({ loading: false });
      }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  handleSubmit = value => {
    this.setState({
      query: value,
      images: [],
      page: 1,
      error: null,
      totalHits: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showModal, largeImage, images, loading, totalHits, page } =
      this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleSubmit} />

        {showModal && <Modal image={largeImage} onClose={this.toggleModal} />}

        <ImageGallery images={images} onGetLargeImage={this.getLargeImage} />

        {loading && <Loader />}

        {page < Math.ceil(totalHits / 12) && (
          <LoadMore onClick={this.handleLoadMore} />
        )}

        <GlobalStyle />
      </Wrapper>
    );
  }
}
