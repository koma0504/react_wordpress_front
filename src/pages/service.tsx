import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import PageText from "@/components/atoms/PageText/PageText";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";

const Service = () => {
  const serviceData = [
    {
      title: "撮影（スチール・動画）",
      text: `あらゆるシーンに適した写真と映像で、
            クライアントのメッセージを
            鮮明に伝えるプロの撮影サービス。`,
    },
    {
      title: "サイト制作",
      text: `ユーザーエクスペリエンスを最優先にしたサイト制作で、
            クライアントのブランド価値を最大化。`,
    },
    {
      title: "PR（記事執筆）",
      text: `クライアントの想いを、ターゲット層の共感を呼び起こすストーリーに変換します。`,
    },
    {
      title: "キャスティング",
      text: `プロジェクトにマッチする最適なキャストを通じ、
      内容の質とメッセージの伝わりやすさを高めます。`,
    },
  ];
  return (
    <Layout>
      <PageTitle>service</PageTitle>
      {serviceData.map((service, index) => (
        <div key={index}>
          <PageSubTitle>{service.title}</PageSubTitle>
          <PageText>{service.text}</PageText>
        </div>
      ))}
    </Layout>
  );
};

export default Service;
