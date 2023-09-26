import PageText from "@/components/atoms/PageText/PageText";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import Layout from "@/components/templates/layout/Layout";

const About = () => {
  return (
    <Layout>
      <PageTitle>about us</PageTitle>
      <PageText props="left">
        プロフェッショナリズムと真摯な対話で、
        クライアントの真のニーズを把握し、 最高のクリエイティブを制作します。
      </PageText>
    </Layout>
  );
};

export default About;
