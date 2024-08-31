import styles from "./Team.module.scss";
import ImageTextModule from "../ImageTextModule/ImageTextModule";

const Team = ({
  image,
  players,
  title,
  myTischtennisLink,
  imagePosition,
  altImage,
}) => {
  const img = image ? image : altImage;
  return (
    <ImageTextModule
      image={img}
      imagePosition={imagePosition}
      className={styles.imageTextModule}
      tags={[
        {
          icon: "link",
          id: 1,
          text: "MyTischtennis Link",
          url: myTischtennisLink,
        },
      ]}
    >
      <h2>{title}</h2>
      {players && (
        <>
          <ol className={styles.players}>
            {players.map((player) => (
              <li key={player.name}>{player.name}</li>
            ))}
          </ol>
        </>
      )}
    </ImageTextModule>
  );
};

export default Team;
