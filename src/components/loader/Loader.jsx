import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderItem } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderItem>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#3f51b5"
      />
    </LoaderItem>
  );
};
