import React, { useContext } from "react";
import { Page, Sheet } from "zmp-ui";
import { boxIcon, checkBoxIcon, closebtnIcon } from "../../utils/iconSvgNew";
import { useQuery } from "@tanstack/react-query";
import addressApi from "../../apis/address.apis";
import { IDistrict, IProvince } from "../../types/address.types";

interface IProps {
  setNameDistrict: (value: string) => void;
  setIdDistrict: (value: number) => void;
  provinceId: number | string;
}

const ModalDistrict = React.forwardRef((props: IProps, ref) => {
  const [showModalDistrict, setShowModalDistrict] = React.useState(false);
  const [dataDistrict, setDataDistrict] = React.useState<IDistrict[]>([]);
  const { data } = useQuery({
    queryKey: ["dataDistrict", props.provinceId],
    queryFn: () => {
      return addressApi.getDistrict(props.provinceId);
    },
    enabled: Boolean(props.provinceId),
    onSuccess: (data) => {
      const newData = data.data.data.map((item) => {
        return {
          ...item,
          choose: false,
        };
      });
      setDataDistrict(newData);
    },
  });
  React.useImperativeHandle(ref, () => {
    return {
      setShowModalDistrict,
    };
  });

  const handleItem = (item) => {
    const copied = [...dataDistrict];
    copied.map((element) => {
      if (element.DistrictID === item.DistrictID) {
        element.choose = true;
      } else {
        element.choose = false;
      }
    });
    setDataDistrict(copied);
    props.setNameDistrict(item.DistrictName);
    props.setIdDistrict(item.DistrictID);
    setShowModalDistrict(false);
  };
  if (!showModalDistrict) return <></>;
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
            onClick={() => setShowModalDistrict(false)}
          >
            {closebtnIcon}
          </div>
        </div>
        <Page className="w-full h-full pb-40 no-scrollbar" hideScrollbar>
          <div>
            {!!dataDistrict &&
              !!dataDistrict.length &&
              dataDistrict.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center px-2 py-2 border-b border-b-[#f5f5f5]]"
                    onClick={() => handleItem(item)}
                  >
                    {!item.choose ? boxIcon : checkBoxIcon}
                    <p className="text-black text-base font-normal ml-2">
                      {item.DistrictName}
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
export default ModalDistrict;
