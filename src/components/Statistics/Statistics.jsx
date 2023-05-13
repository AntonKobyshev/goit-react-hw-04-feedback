import PropTypes from 'prop-types';
import { Votes, VotesItem, Name, Rate } from './Statistics.styled';
import { HiThumbUp, HiThumbDown, HiPresentationChartBar } from 'react-icons/hi';
import { MdPercent } from 'react-icons/md';
import { AiFillMeh } from 'react-icons/ai';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalVotes,
  positivePercentage,
}) => {
  return (
    <>
      <Votes>
        <VotesItem>
          <HiThumbUp size="20" />
          <Name>Good:</Name>
          <Rate>{good}</Rate>
        </VotesItem>
        <VotesItem>
          <AiFillMeh size="20" />
          <Name>Neutral:</Name>
          <Rate>{neutral}</Rate>
        </VotesItem>
        <VotesItem>
          <HiThumbDown size="20" />
          <Name>Bad:</Name>
          <Rate>{bad}</Rate>
        </VotesItem>
        <VotesItem>
          <HiPresentationChartBar size="20" />
          <Name>Total:</Name>
          <Rate>{totalVotes}</Rate>
        </VotesItem>
        <VotesItem>
          <MdPercent size="20" />
          <Name>Positive feedback:</Name>
          <Rate>{positivePercentage}%</Rate>
        </VotesItem>
      </Votes>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
