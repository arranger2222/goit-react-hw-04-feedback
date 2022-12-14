import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled.jsx';

export default function FeedbackOptions ({ options, onBtnClick })  {
  return(
  <div>
    {options.map(option => (
      <Button type="button" key={option} onClick={() => onBtnClick(option)}>
        {option}
      </Button>
    ))}
  </div>
)};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
