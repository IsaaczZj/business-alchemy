import LayoutLandingPage from "@/template/layout-landing-page";
import { Metadata } from "next";


export const metadata:Metadata = {
  title:'Bussiness Alchemy',
  description:'Venda seus produtos como afiliado em um único lugar',
  robots:'index, follow'
}
export default function Home() {
  return (
    <>
      <LayoutLandingPage />
    </>
  );
}
