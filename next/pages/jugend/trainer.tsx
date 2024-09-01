import Trainer from "../../components/Trainer/Trainer";
import { TrainerType } from "../../types/globalTypes";
import { TrainerPageProps } from "../../types/pageTypes";
import { getRequest } from "../../utils/strapi";
import styles from "./trainer.module.scss";

const TrainerPage: React.FC<TrainerPageProps> = ({ strapiData }) => {
  return (
    <>
      <h1>{strapiData.attributes.titel}</h1>
      <div className={styles.trainer}>
        {strapiData.attributes.trainer.map((trainer) => (
          <Trainer key={trainer.name} trainerProps={trainer} />
        ))}
      </div>
    </>
  );
};

export default TrainerPage;

export async function getStaticProps() {
  const trainerData = await getRequest("trainer-page?populate=deep");

  return {
    props: {
      strapiData: trainerData.data,
    },
    revalidate: 600,
  };
}
