import "./SingleCard.css";

const SingleCard = ({
  card,
  choiceOne,
  setChoiceOne,
  setChoiceTwo,
  flipped,
  disabled,
}) => {
  const clickHandler = () => {
    !disabled && choiceOne // '&& choiceOne !== card' add this to prevent double clicking same card. double clicking it would reveal the other card
      ? setChoiceTwo(card)
      : setChoiceOne(card); //used this disabled check to prevent continous clicking on the card
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} />
        <img
          className="back"
          src="/memory-game/img/cover.png"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};

export default SingleCard;
