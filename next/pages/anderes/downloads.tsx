import Link from "next/link";
import { StrapiImage } from "../../types/globalTypes";
import { getRequest, getStrapiImage } from "../../utils/strapi";
import styles from "./downloads.module.scss";
import LineUp from "../../components/Export/LineUp/LineUp";

interface DownloadsPageProps {
  strapiData: {
    data: {
      attributes: {
        downloads: download[];
        titel: string;
      };
    };
  };
}

interface download {
  __component: "content.file" | "link.link";
  datei?: StrapiImage;
  link?: string;
  name: string;
}

const Downloads: React.FC<DownloadsPageProps> = ({ strapiData }) => {
  const { downloads, titel } = strapiData.data.attributes;
  return (
    <>
      <h1>{titel}</h1>
      <div className={styles.downloads}>
        {downloads.map((download) =>
          download.__component === "content.file" ? (
            <>
              <Link href={getStrapiImage(download.datei)} key={download.name}>
                {download.name}
              </Link>
            </>
          ) : (
            <Link href={download.link} key={download.name}>
              {download.name}
            </Link>
          )
        )}
        <LineUp />
      </div>
    </>
  );
};

export default Downloads;

export const getStaticProps = async () => {
  const linksPage = await getRequest(`download-page?populate=deep`);
  return { props: { strapiData: linksPage } };
};
