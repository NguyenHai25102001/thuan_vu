import React, {Suspense, lazy, useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop";
import Milestone from "../pages/milestone";
import Profile from "../pages/profile";
import Community from "../pages/community";
import DetailProduct from "../pages/detailProduct";
import path from "../constants/path";
import Cart from "../pages/cart";
import Category from "../pages/category";
import AskDoctor from "../pages/askDoctor";
import SearchAsk from "../pages/askDoctor/searchAsk";
import DetailAsk from "../pages/askDoctor/detailAsk";
import HistoryAsk from "../pages/askDoctor/historyAsk";
import AskQuestions from "../pages/askDoctor/askQuestions";
import VoucherComponent from "../pages/voucher";
import BabyHealth from "../pages/babyHealth";
import BrandPoin from "../pages/brandPoin";
import BrandGift from "../pages/brandGift";
import ListPresent from "../pages/listPresent";
import HandBook from "../pages/handBook";
import ListProduct from "../pages/listProduct";
import ListAddress from "../pages/listAddress";
import AddAdress from "../pages/addAddress";
import ModalRequestPhone from "../pages/modalRequestPhone";
import CategoryHandBook from "../pages/handBook/categoryHandBook";
import DetailHandBook from "../pages/handBook/detailHandBook";
import PlayVideo from "../components/playVideo";
import EditBaby from "../pages/editBaby";
import DetailLessonHome from "../pages/detailLessonHome";
import ReceiveGiftInformationScreen from "../pages/listPresent/ReceiveGiftInformationScreen";
import ProgramVoucher from "../pages/voucher/programVoucher";
import MyVoucher from "../pages/voucher/myVoucher";
import ProblemByAge from "../pages/problemByAge";
import DetailProblem from "../pages/detailProblem";
import AllQuesProblem from "../pages/detailProblem/allProblemQues";
import Parameters from "../pages/profile/parameters";
import MyOrder from "../pages/myOrder";
import SearchProduct from "../pages/searchProduct";
import TopProduct from "../pages/topProduct";
import ListCategory from "../pages/listCategory";
import ListBuyAgain from "../pages/shop/listBuyAgain";
import UploadPost from "../pages/community/uploadPost";
import UploadVideo from "../pages/community/uploadVideo";
import ListProductBuyAgain from "../pages/listProductBuyAgain";
import ListProblemByMonth from "../pages/listProblemByMonth";
import ListBlog from "../pages/profile/listBlog";
import DetailBlog from "../pages/profile/detailBlog";
import LisPostWithProblem from "../pages/listPostWithProblem";
import DetailPostProblem from "../pages/listPostWithProblem/detailPostProblem";
import {AppContext} from "../contexts/app.context";
const CustomNavigationBotom = lazy(() => import("./bottomTab"));
const Home = lazy(() => import("../pages/home"));
const AppNavigation = () => {
  // if (getSystemInfo().platform === "android") {
  //   const androidSafeTop = Math.round(
  //     (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
  //       window.devicePixelRatio
  //   );
  //   document.body.style.setProperty(
  //     "--zaui-safe-area-inset-top",
  //     `${androidSafeTop}px`
  //   );
  // }

  const {
    phoneUser,
    setPhoneUser,
  } = useContext(AppContext);

  return (
    <div className="h-screen relative flex flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={path.shop} element={<Shop />}></Route>
          <Route path={path.milestone} element={<Milestone />}></Route>
          <Route path={path.profile} element={<Profile />}></Route>
          <Route path={path.community} element={<Community />}></Route>
          <Route path={path.detailProduct} element={<DetailProduct />}></Route>
          <Route path={path.cart} element={<Cart />}></Route>
          <Route path={path.category} element={<Category />}></Route>
          <Route path={path.askDoctor} element={<AskDoctor />}></Route>
          <Route path={path.searchAsk} element={<SearchAsk />}></Route>
          <Route path={path.detailQuestion} element={<DetailAsk />}></Route>
          <Route path={path.historyAsk} element={<HistoryAsk />}></Route>
          <Route path={path.askQuestions} element={<AskQuestions />}></Route>
          <Route path={path.voucher} element={<VoucherComponent />}></Route>
          <Route path={path.babyHealth} element={<BabyHealth />}></Route>
          <Route path={path.brandPoin} element={<BrandPoin />}></Route>
          <Route path={path.brandGift} element={<BrandGift />}></Route>
          <Route path={path.listPresent} element={<ListPresent />}></Route>
          <Route path={path.handBook} element={<HandBook />}></Route>
          <Route path={path.listProduct} element={<ListProduct />}></Route>
          <Route path={path.listAddress} element={<ListAddress />}></Route>
          <Route path={path.addAdress} element={<AddAdress />}></Route>
          <Route
            path={path.categoryHandBook}
            element={<CategoryHandBook />}
          ></Route>
          <Route
            path={path.detailHandbook}
            element={<DetailHandBook />}
          ></Route>
          <Route path={path.playVideo} element={<PlayVideo />}></Route>
          <Route path={path.editBaby} element={<EditBaby />}></Route>
          <Route
            path={path.detailLessonHome}
            element={<DetailLessonHome />}
          ></Route>
          <Route path={path.detailProblem} element={<DetailProblem />}></Route>
          <Route
            path={path.programVoucher}
            element={<ProgramVoucher />}
          ></Route>
          <Route path={path.myVoucher} element={<MyVoucher />}></Route>
          <Route path={path.problemByAge} element={<ProblemByAge />}></Route>
          <Route
            path={path.allProblemQues}
            element={<AllQuesProblem />}
          ></Route>
          <Route
            path={path.receiveGiftInformationScreen}
            element={<ReceiveGiftInformationScreen />}
          />
          <Route path={path.detailProblem} element={<DetailProblem />} />
          <Route path={path.Parameters} element={<Parameters />} />
          <Route path={path.myOrder} element={<MyOrder />} />
          <Route path={path.searchProduct} element={<SearchProduct />} />
          <Route path={path.topProduct} element={<TopProduct />} />
          <Route path={path.listCategory} element={<ListCategory />} />
          <Route path={path.listBuyAgain} element={<ListBuyAgain />} />
          <Route path={path.uploadPost} element={<UploadPost />} />
          <Route path={path.uploadVideo} element={<UploadVideo />} />
          <Route path={path.listBlog} element={<ListBlog />} />
          <Route path={path.detailBlog} element={<DetailBlog />} />
          <Route
            path={path.detailPostProblem}
            element={<DetailPostProblem />}
          />
          <Route
            path={path.lisPostWithProblem}
            element={<LisPostWithProblem />}
          />
          {/* <Route
            path={path.listProblemByMonth}
            element={<ListProblemByMonth />}
          /> */}

          <Route
            path={path.listProductBuyAgain}
            element={<ListProductBuyAgain />}
          />
        </Routes>
      </div>
      <Suspense>
        <CustomNavigationBotom />
      </Suspense>
      {
        !phoneUser&&(<ModalRequestPhone />)
      }

    </div>
  );
};
export default AppNavigation;
