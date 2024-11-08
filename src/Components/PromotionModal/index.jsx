const PromotionModal = ({ isOpen, img }) => {
  return (
    <>
      {isOpen && (
        <div className="container">
          <img src={img} alt="Promotion" />
        </div>
      )}
    </>
  );
};

export default PromotionModal;
