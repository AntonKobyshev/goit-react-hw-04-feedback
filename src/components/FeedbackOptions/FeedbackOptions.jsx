import PropTypes from 'prop-types';
import { ButtonList, ButtonItem } from './FeedbackOptions.styled';
import { Icons } from './Icons';
import { ButtonFeedback } from '../ButtonFeedback/ButtonFeedback';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKey = Object.keys(options);
  return (
    <>
      <ButtonList>
        {optionsKey.map((option, index) => {
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
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
