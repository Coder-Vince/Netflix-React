import React from "react";
import data from "../data.json";

const Section = () => {
  console.log(data.images);

  return (
    <div>
      {/* Premier tour de boucle sur les items de l'objet JSON data (items de clé "category") */}
      {data.map((items) => {
        console.log(items);

        // dans une balise section on va retourner à chaque tour un h1 qui correspond au titre de categorie et aussi looper dans une seconde pour afficher toutes les images de la clé images de l'objet JSON.

        return (
          <div>
            <h1>{items.category}</h1>
            <section>
              {/* Seconde loop ici à l'intérieur de la première */}
              {items.images.map((image) => {
                return <img alt="" src={image} />;
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
