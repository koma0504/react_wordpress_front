import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import PageText from "@/components/atoms/PageText/PageText";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import Layout from "@/components/templates/layout/Layout";

const Works = () => {
  const worksData = [
    {
      title: "すごい実績1のタイトル",
      text: `すごい実績１のテキスト`,
    },
    {
      title: "すごい実績1のタイトル",
      text: `すごい実績１のテキスト`,
    },
    {
      title: "すごい実績1のタイトル",
      text: `すごい実績１のテキスト`,
    },
    {
      title: "すごい実績1のタイトル",
      text: `すごい実績１のテキスト`,
    },
    {
      title: "すごい実績1のタイトル",
      text: `すごい実績１のテキスト`,
    },
  ];
  return (
    <Layout>
      <PageTitle>works</PageTitle>
      {worksData.map((work, index) => (
        <div key={index}>
          <PageSubTitle>{work.title}</PageSubTitle>
          <PageText>{work.text}</PageText>
        </div>
      ))}
    </Layout>
  );
};

export default Works;
