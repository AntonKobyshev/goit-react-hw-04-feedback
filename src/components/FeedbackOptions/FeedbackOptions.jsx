import PropTypes from 'prop-types';
import { ButtonList, ButtonItem } from './FeedbackOptions.styled';
import { Icons } from './Icons';
import { ButtonFeedback } from '../ButtonFeedback/ButtonFeedback';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <ButtonItem key={index}  >
              <ButtonFeedback type="button" onClick={() => onLeaveFeedback(option)} icon={Icons[option]} >
                {label} 
              </ButtonFeedback>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
