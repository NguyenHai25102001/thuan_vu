import React, { useContext } from "react";
import { Page, Sheet } from "zmp-ui";
import { boxIcon, checkBoxIcon, closebtnIcon } from "../../utils/iconSvgNew";
import { useQuery } from "@tanstack/react-query";
import addressApi from "../../apis/address.apis";
import { IDistrict, IProvince } from "../../types/address.types";
import homeApi from "../../apis/home.apis";

interface IProps {
  setItem: (value) => void;
}

const ModalCategory = React.forwardRef((props: IProps, ref) => {
  const [showModal, setShowModal] = React.useState(false);
  const { data: dataCategory, isLoading } = useQuery({
    queryKey: ["videoCommunity"],
    queryFn: () => {
      return homeApi.getCategory();
    },
    onError: (e) => {
      console.log(e);
    },
  });
  React.useImperativeHandle(ref, () => {
    return {
      setShowModal,
    };
  });

  const handleItem = (item) => {
    props.setItem(item);
    setShowModal(false);
  };
  if (!showModal) return <></>;
  return (
    <div className="absolute w-full h-full top-0 bg-[#000000] bg-opacity-80 z-50">
      <div className="h-full w-full bg-white mt-24 rounded-t-2xl">
        <div className="flex pl-4 border-b border-b-[#626262]">
          <div className="flex items-center flex-1">
            <p className="text-black text-base text-center flex-1 ml-12 mt-1">
              Chọn Danh Mục
            </p>
          </div>
          <div className="pr-4 pl-4" onClick={() => setShowModal(false)}>
            {closebtnIcon}
          </div>
        </div>
        <Page className="w-full h-full pb-40 no-scrollbar" hideScrollbar>
          <div>
            {!!dataCategory &&
              !!dataCategory.data &&
              !!dataCategory.data.data &&
              !!dataCategory.data.data.length &&
              dataCategory.data.data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center px-2 py-2 border-b border-b-[#f5f5f5]]"
                    onClick={() => handleItem(item)}
                  >
                    <p className="text-black text-base font-normal ml-2">
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </Page>
      </div>
    </div>
  );
});
export default ModalCategory;
