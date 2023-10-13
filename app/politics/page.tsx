import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import Politics from "@/src/components/politics/politics";

const PoliticsPage = () => {
  return (
    <div>
      <Header />
      <Politics />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default PoliticsPage;
