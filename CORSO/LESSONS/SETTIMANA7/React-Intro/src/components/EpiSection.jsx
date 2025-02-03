const EpiSection = (props) => {
  console.log("EPISECTION PROPS", props);
  return (
    // in un componente bisognerà SEMPRE tornare SOLO UN SINGOLO ELEMENTO ALLA VOLTA (che ne può contentere altri)
    // un tag senza nome o etichetta è definito un Fragment, crea un gruppo unico (quindi viene visto come singolo elemento ritornato),
    // ma non genera a sua volta un elemento nella pagina
    <div className={props.className} style={{ paddingBlock: props.paddingBlock, margin: props.margin }}>
      <img src={props.imageUrl} width={props.imageWidth} />
      <p>{props.description}</p>
    </div>
  );
};

export default EpiSection;
