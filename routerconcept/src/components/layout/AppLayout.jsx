import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../layout/Loading";

export default function AppLayout() {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
