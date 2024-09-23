import FooterSm from "@/components/footer/footer";
import HeaderLg from "@/components/header/header-lg";
import HeaderSm from "@/components/header/header-sm";
import Main from "@/components/main";
import MainSm from "@/components/main-sm";
import MenueLeft from "@/components/menue-left";

export default function Home() {
  return (
    <div className="w-dvw md:h-dvh isolate ">
      <HeaderLg />
      <HeaderSm />
      <MenueLeft />
      <Main />
      <MainSm />
      <FooterSm />
    </div>
  );
}
