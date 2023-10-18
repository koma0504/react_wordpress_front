import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import PageText from "@/components/atoms/PageText/PageText";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import s from "./service.module.scss";

const Service = () => {
  const serviceData = [
    {
      title: "撮影（スチール・動画）",
      jpText: `あらゆるシーンに適した写真と映像で、
            クライアントのメッセージを
            鮮明に伝えるプロの撮影サービス。`,
      enText: `A professional photography and videography service that vividly conveys the client's message, suitable for any scene.`,
    },
    {
      title: "サイト制作",
      jpText: `ユーザーエクスペリエンスを最優先にしたサイト制作で、
            クライアントのブランド価値を最大化。`,
      enText: `We prioritize user experience in website creation, maximizing the brand value of our clients.`,
    },
    {
      title: "PR（記事執筆）",
      jpText: `クライアントの想いを、ターゲット層の共感を呼び起こすストーリーに変換します。`,
      enText: `We transform the client's vision into a story that evokes empathy from the target audience.`,
    },
    {
      title: "キャスティング",
      jpText: `プロジェクトにマッチする最適なキャストを通じ、
      内容の質とメッセージの伝わりやすさを高めます。`,
      enText: `Through the optimal cast that matches the project, we enhance the quality of the content and the clarity of the message.`,
    },
  ];
  return (
    <Layout>
      <PageTitle>service</PageTitle>
      {serviceData.map((service, index) => (
        <div className={s.service_list} key={index}>
          <PageSubTitle>{service.title}</PageSubTitle>
          <p className={s.jp_text}>{service.jpText}</p>
          <p className={s.en_text}>{service.enText}</p>
        </div>
      ))}
    </Layout>
  );
};

export default Service;
