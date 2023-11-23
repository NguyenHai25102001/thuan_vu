import React, { useContext } from "react";
import { Page, Sheet } from "zmp-ui";
import { boxIcon, checkBoxIcon, closebtnIcon } from "../../utils/iconSvgNew";
import { useQuery } from "@tanstack/react-query";
import addressApi from "../../apis/address.apis";
import { IProvince } from "../../types/address.types";

interface IProps {
  setNameProvince: (value: string) => void;
  setIdProvince: (value: number) => void;
}

const ModalProvince = React.forwardRef((props: IProps, ref) => {
  const [showModalProvince, setShowModalProvince] = React.useState(false);
  const [dataProvince, setDataProvince] = React.useState<IProvince[]>([]);
  const { data } = useQuery({
    queryKey: ["dataProvince"],
    queryFn: () => {
      return addressApi.getProvince();
    },
    onSuccess: (data) => {
      const newData = data.data.data.map((item) => {
        return {
          ...item,
          choose: false,
        };
      });
      setDataProvince(newData);
    },
  });
  React.useImperativeHandle(ref, () => {
    return {
      setShowModalProvince,
    };
  });

  const handleItem = (item) => {
    const copied = [...dataProvince];
    copied.map((element) => {
      if (element.ProvinceID === item.ProvinceID) {
        element.choose = true;
      } else {
        element.choose = false;
      }
    });
    setDataProvince(copied);
    props.setNameProvince(item.ProvinceName);
    props.setIdProvince(item.ProvinceID);
    setShowModalProvince(false);
  };
  if (!showModalProvince) return <></>;
  return (
    <div className="absolute w-full h-full top-0 bg-[#000000] bg-opacity-80 z-50">
      <div className="h-full w-full bg-white mt-24 rounded-t-2xl">
        <div className="flex pl-4 border-b border-b-[#626262]">
          <div className="flex items-center flex-1">
            <p className="text-black text-base text-center flex-1 ml-12 mt-1">
              Chọn Tỉnh/TP
            </p>
          </div>
          <div
            className="pr-4 pl-4"
            onClick={() => setShowModalProvince(false)}
          >
            {closebtnIcon}
          </div>
        </div>
        <Page className="w-full h-full pb-40 no-scrollbar" hideScrollbar>
          <div>
            {!!dataProvince &&
              !!dataProvince.length &&
              dataProvince.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center px-2 py-2 border-b border-b-[#f5f5f5]]"
                    onClick={() => handleItem(item)}
                  >
                    {!item.choose ? boxIcon : checkBoxIcon}
                    <p className="text-black text-base font-normal ml-2">
                      {item.ProvinceName}
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
export default ModalProvince;
