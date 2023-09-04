import { Button } from './Button.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};
