import React from "react";
import { getRequest, getStrapiImage } from "../../utils/strapi";
import { Articles } from "../../types/globalTypes";
import styles from "./aktuellesDetailPage.module.scss";
import { Gallery } from "react-grid-gallery";
import TextWrap from "../../components/TextWrap/TextWrap";
import { AktuellesDetailsPageProps } from "../../types/pageTypes";

const AktuellesDetailPage: React.FC<AktuellesDetailsPageProps> = ({
  postData,
}) => {
  let images: { src: string; width: number; height: number }[];
  if (postData?.attributes?.bilder?.data) {
    images = postData.attributes.bilder.data.map((image) => {
      return {
        src: getStrapiImage(image),
        width: image.attributes.width,
        height: image.attributes.height,
      };
    });
  }
  return (
    <>
      <h1 style={{ marginBottom: "8px" }}>{postData.attributes.titel}</h1>
      <span className={styles.date}>
        {postData.attributes.datum.split("-").reverse().join(".")}
      </span>
      <TextWrap
        image={postData.attributes.vorschauBild}
        text={postData.attributes.text}
        textType="html"
      />
      {images && (
        <div className={styles.gallery}>
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={250}
          />
        </div>
      )}
    </>
  );
};

export default AktuellesDetailPage;

export const getStaticPaths = async () => {
  const articles: Articles = await getRequest("articles");
  const paths = articles.data.map((article) => {
    return { params: { slug: article.attributes.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

interface Context {
  params: {
    slug: string;
  };
}

export const getStaticProps = async (context: Context) => {
  const slug = context.params.slug;
  const post = await getRequest(
    `articles?filters[slug][$eq]=${slug}&populate=deep`
  );
  return { props: { postData: post.data[0] } };
};
